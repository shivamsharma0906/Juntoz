/**
 * FloatingShapes — 3D ambient decorative objects
 * ─────────────────────────────────────────────
 * • Desktop (≥768px): Full quality, all shapes, high Z depth
 * • Mobile: Component is NOT mounted (hidden md:block on wrapper)
 *   so zero GPU cost on phones — CSS particles used instead
 *
 * FIXES:
 * • Wrapped Canvas in an ErrorBoundary so if Three.js / Environment
 *   HDR asset fails, it fails silently instead of crashing the page.
 * • ScrollGroup lerp factor increased slightly to reduce scroll jitter.
 */
import { useRef, Component } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Sphere,
  Torus,
  TorusKnot,
  MeshDistortMaterial,
  Environment,
} from '@react-three/drei';

/* ─── Error boundary — swallows Three.js initialisation errors ── */
class ThreeErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null; // fail silently — shapes are decorative
    return this.props.children;
  }
}

/* ─── smooth scroll-linked group ─────────────────────────────── */
function ScrollGroup({ children }) {
  const group = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (!group.current) return;
    const scrollY  = window.scrollY;
    const yOffset  = (scrollY * viewport.height) / window.innerHeight;
    // Slightly faster lerp (0.08 → 0.07) to stay tight with scroll without jitter
    group.current.position.y += (yOffset - group.current.position.y) * 0.07;
  });

  return <group ref={group}>{children}</group>;
}

/* ─── shared dark gloss material ─────────────────────────────── */
const DarkGlossMaterial = () => (
  <meshStandardMaterial
    color="#030305"
    metalness={0.92}
    roughness={0.12}
    envMapIntensity={1.4}
  />
);

/* ─── shapes ──────────────────────────────────────────────────── */
function AnimatedSphere({ position, scale = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.9) * 0.22;
    meshRef.current.rotation.x = t * 0.14;
    meshRef.current.rotation.y = t * 0.20;
  });
  return (
    <group position={position} scale={scale}>
      <Sphere ref={meshRef} args={[1.3, 64, 64]}>
        <MeshDistortMaterial
          color="#030305"
          distort={0.22}
          speed={1.1}
          metalness={1}
          roughness={0.07}
        />
      </Sphere>
    </group>
  );
}

function AnimatedTorus({ position, scale = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.cos(t * 0.8) * 0.28;
    meshRef.current.rotation.x = t * 0.28;
    meshRef.current.rotation.y = t * 0.38;
  });
  return (
    <group position={position} scale={scale}>
      <Torus ref={meshRef} args={[1.4, 0.5, 64, 64]}>
        <DarkGlossMaterial />
      </Torus>
    </group>
  );
}

function OverlappingRings({ position, scale = 1 }) {
  const groupRef = useRef();
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.18;
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.16;
  });
  return (
    <group position={position} ref={groupRef} rotation={[0.4, -0.4, 0]} scale={scale}>
      <Torus args={[1.1, 0.28, 32, 64]} position={[0, 0, 0]}>
        <DarkGlossMaterial />
      </Torus>
      <Torus args={[1.1, 0.28, 32, 64]} position={[0.35, 0.35, -0.7]}>
        <DarkGlossMaterial />
      </Torus>
      <Torus args={[1.1, 0.28, 32, 64]} position={[0.7, 0.7, -1.4]}>
        <DarkGlossMaterial />
      </Torus>
    </group>
  );
}

function RibbedSphere({ position, scale = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.08;
    meshRef.current.rotation.y = t * 0.22;
    meshRef.current.position.y = Math.sin(t * 1.1) * 0.16;
  });
  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <MeshDistortMaterial
          color="#030305"
          distort={0.11}
          speed={1.6}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function AnimatedTorusKnot({ position, scale = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.17;
    meshRef.current.rotation.y = t * 0.32;
    meshRef.current.position.y = Math.cos(t * 1.0) * 0.22;
  });
  return (
    <group position={position} scale={scale}>
      <TorusKnot ref={meshRef} args={[1.0, 0.35, 128, 32]}>
        <DarkGlossMaterial />
      </TorusKnot>
    </group>
  );
}

/* ─── scene layout — positions relative to viewport size ─────── */
function SceneLayout() {
  const { viewport } = useThree();
  const h = viewport.height;
  const w = viewport.width;

  return (
    <ScrollGroup>
      {/* HERO — shapes pinned to far left/right screen edges, very deep Z */}
      {/* x = ±0.62 × viewport pushes them half-off-screen; z = -8/-9 makes them small */}
      <AnimatedSphere position={[-w * 0.62, h * 0.05, -8]} />
      <AnimatedTorus  position={[ w * 0.60, -h * 0.10, -9]} />

      {/* TESTIMONIALS */}
      <RibbedSphere position={[w * 0.55, -h * 1.3, -6]} />

      {/* PROBLEM/SOLUTION */}
      <OverlappingRings position={[-w * 0.55, -h * 2.4, -5]} />

      {/* HOW IT WORKS */}
      <AnimatedTorusKnot position={[w * 0.52, -h * 3.6, -7]} />

      {/* FOOTER */}
      <AnimatedSphere position={[-w * 0.50, -h * 5.2, -5]} />
    </ScrollGroup>
  );
}

/* ─── main export — DESKTOP ONLY via CSS (hidden md:block) ────── */
export default function FloatingShapes() {
  return (
    /* hidden on mobile: saves GPU, battery, and prevents overlap with hero text */
    <div
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: -1, width: '100vw', height: '100vh' }}
    >
      <ThreeErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 44 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]} /* cap pixel ratio — prevents 3x rendering on HiDPI at high cost */
        >
          <ambientLight intensity={1.0} />

          <directionalLight position={[5, 5, 5]}   intensity={3.2} color="#00F5D4" />
          <directionalLight position={[-5, -5, 2]}  intensity={2.2} color="#FF3AF2" />
          <spotLight        position={[0, 10, -10]} intensity={3.5} color="#7B2FFF" />

          <Environment preset="night" />
          <SceneLayout />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}