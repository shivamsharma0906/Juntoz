import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom GLSL Shaders for the "Awareness to Advocacy" Particle System
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uPointerRadius;
  uniform float uPointerStrength;

  attribute vec4 aSeed; // x: speed, y: phase, z: laneAngle, w: type (0.0 = ink flow, 1.0 = advocacy)
  attribute float aSize;

  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    float speed = aSeed.x;
    float phase = aSeed.y;
    float laneAngle = aSeed.z;
    float isAdvocacy = aSeed.w;

    // Progression along the funnel loop [0.0, 1.0]
    float t = fract(uTime * speed + phase);

    vec3 pos = vec3(0.0);

    if (isAdvocacy < 0.5) {
      // ── TIER 1 & 2: AWARENESS TO CONVERSION (Inward Funnel Flow) ──
      // Top: y = 1.3, spread radius = 2.0 (Awareness)
      // Bottom: y = -0.5, constricted radius = 0.15 (Conversion)
      float y = mix(1.3, -0.5, t);
      
      // Conical streamline radius with logarithmic tapering
      float radius = 0.15 + 1.85 * pow(smoothstep(-0.5, 1.3, y), 1.6);
      
      // Subtle organic swirl that tightens toward the constriction
      float angle = laneAngle + (1.0 - t) * 1.5 + sin(uTime * 0.4 + y * 2.0) * 0.12;

      pos.x = cos(angle) * radius;
      pos.z = sin(angle) * (radius * 0.5); // Flattened depth for crisp 2.5D profile
      pos.y = y;

      // Color & Opacity: dim ink-dark drift at top, becoming denser and crisper near conversion
      float alphaBase = mix(0.22, 0.75, t);
      vOpacity = alphaBase * smoothstep(0.0, 0.08, t) * smoothstep(1.0, 0.92, t);
      vColor = vec3(0.067, 0.067, 0.067); // #111111
    } else {
      // ── TIER 3: ADVOCACY (Ascending Orbit from Constriction) ──
      // Emerges at y = -0.5 and spirals outward/upward in an expanding loop
      float y = mix(-0.45, 0.8, pow(t, 0.85));
      float radius = 0.25 + 1.4 * pow(t, 1.4);
      float angle = laneAngle + t * 4.2 + uTime * 0.6;

      pos.x = cos(angle) * radius + 0.35 * (1.0 - t);
      pos.z = sin(angle) * (radius * 0.6);
      pos.y = y;

      // Brighter purple #5D2E85 with subtle lavender #F1E7F9 highlights
      vOpacity = mix(0.85, 0.3, t) * smoothstep(0.0, 0.06, t) * smoothstep(1.0, 0.85, t);
      vColor = mix(vec3(0.365, 0.180, 0.522), vec3(0.945, 0.906, 0.976), sin(t * 6.28) * 0.2 + 0.2);
    }

    // ── GENTLE CURSOR INFLUENCE ──
    vec2 dirToMouse = pos.xy - uPointer;
    float distToMouse = length(dirToMouse);
    if (distToMouse < uPointerRadius && distToMouse > 0.001) {
      float force = (1.0 - distToMouse / uPointerRadius) * uPointerStrength;
      vec2 perp = vec2(-dirToMouse.y, dirToMouse.x) / distToMouse;
      pos.xy += (dirToMouse / distToMouse * 0.15 + perp * 0.85) * force;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Screen-space point size with distance attenuation
    gl_PointSize = aSize * (260.0 / -mvPosition.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    vec2 centerCoord = gl_PointCoord - vec2(0.5);
    float dist = length(centerCoord);

    if (dist > 0.5) discard;

    float edgeAlpha = smoothstep(0.5, 0.35, dist);
    gl_FragColor = vec4(vColor, vOpacity * edgeAlpha);
  }
`;

// Deterministic PRNG generator to satisfy React compiler purity rules
function createSeededRandom(seed = 123456789) {
  let s = seed;
  return function () {
    s = (s ^ (s << 13)) >>> 0;
    s = (s ^ (s >>> 17)) >>> 0;
    s = (s ^ (s << 5)) >>> 0;
    return (s >>> 0) / 4294967296;
  };
}

function generateParticleData(count) {
  const rand = createSeededRandom(42);
  const pos = new Float32Array(count * 3);
  const sd = new Float32Array(count * 4);
  const sz = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const isAdvocacy = i % 7 === 0 ? 1.0 : 0.0;
    const speed = isAdvocacy ? 0.08 + rand() * 0.08 : 0.06 + rand() * 0.09;
    const phase = rand();
    const laneAngle = rand() * Math.PI * 2.0;

    sd[i * 4 + 0] = speed;
    sd[i * 4 + 1] = phase;
    sd[i * 4 + 2] = laneAngle;
    sd[i * 4 + 3] = isAdvocacy;

    sz[i] = isAdvocacy ? (2.8 + rand() * 1.6) : (1.8 + rand() * 1.4);

    pos[i * 3 + 0] = 0;
    pos[i * 3 + 1] = 0;
    pos[i * 3 + 2] = 0;
  }

  return { positions: pos, seeds: sd, sizes: sz };
}

function ParticleSystem({ count, pointerRef, onFirstFrame, onPerformanceDrop }) {
  const pointsRef = useRef();
  const materialRef = useRef();
  const reportedFirstFrame = useRef(false);
  const frameCount = useRef(0);
  const frameTimes = useRef([]);
  const startTime = useRef(0);
  const lastTime = useRef(0);

  const { positions, seeds, sizes } = useMemo(() => {
    return generateParticleData(count);
  }, [count]);

  useEffect(() => {
    frameTimes.current = [];
    frameCount.current = 0;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(-999, -999) },
    uPointerRadius: { value: 0.9 },
    uPointerStrength: { value: 0.22 },
  }), []);

  useFrame(() => {
    const now = performance.now();
    if (startTime.current === 0) {
      startTime.current = now;
      lastTime.current = now;
      return;
    }
    const delta = (now - lastTime.current) / 1000;
    lastTime.current = now;

    if (!reportedFirstFrame.current) {
      reportedFirstFrame.current = true;
      if (typeof onFirstFrame === 'function') {
        onFirstFrame();
      }
    }

    frameCount.current += 1;

    // Ignore the first ~30 frames (shader compile, JIT, pipeline creation)
    if (frameCount.current > 30 && delta > 0 && delta < 0.2) {
      frameTimes.current.push(delta);
      if (frameTimes.current.length > 60) {
        frameTimes.current.shift();
        const avgDelta = frameTimes.current.reduce((a, b) => a + b, 0) / frameTimes.current.length;
        // Step down if frame rate falls below ~30 FPS (avg delta > 33.3 ms)
        if (avgDelta > 0.033 && typeof onPerformanceDrop === 'function') {
          frameTimes.current = [];
          onPerformanceDrop();
        }
      }
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = (now - startTime.current) / 1000;
      
      if (pointerRef && pointerRef.current) {
        const target = pointerRef.current;
        const current = materialRef.current.uniforms.uPointer.value;
        current.x += (target.x - current.x) * 0.08;
        current.y += (target.y - current.y) * 0.08;
      }
    }
  });

  useEffect(() => {
    const currentPoints = pointsRef.current;
    const currentMaterial = materialRef.current;
    return () => {
      if (currentPoints && currentPoints.geometry) {
        currentPoints.geometry.dispose();
      }
      if (currentMaterial) {
        currentMaterial.dispose();
      }
    };
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aSeed"
          args={[seeds, 4]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene({ tier = 'high', isVisible = true, pointerRef, onFirstFrame, onPerformanceDrop }) {
  const particleCount = tier === 'mid' ? 6000 : 12000;

  return (
    <Canvas
      camera={{ position: [0, 0.15, 3.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true,
      }}
      frameloop={isVisible ? 'always' : 'never'}
      className="w-full h-full"
      style={{ pointerEvents: 'none' }}
    >
      <ParticleSystem
        count={particleCount}
        pointerRef={pointerRef}
        onFirstFrame={onFirstFrame}
        onPerformanceDrop={onPerformanceDrop}
      />
    </Canvas>
  );
}
