import { useState, useRef, useEffect, useCallback } from 'react';
import { motionConfig } from '../../config/motion';

/**
 * High-performance, luxury liquid silk shader hover effect for case study card imagery.
 * Progressive enhancement:
 * - Mounted only on desktop (pointer: fine) with hardwareConcurrency >= 4 and no reduced motion.
 * - Always keeps the underlying <img> in the DOM for SEO, lazy-loading, and accessibility.
 * - RAF loop runs ONLY while hovering or transitioning, stopping completely when idle (0% CPU/GPU).
 * - Graceful fallback to CSS hover scale if WebGL is unavailable, tainted, or flag is OFF.
 */

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
uniform sampler2D u_texture;
uniform vec2 u_mouse;
uniform float u_hover;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_imageResolution;
varying vec2 v_uv;

vec2 getCoverUv(vec2 uv, vec2 containerRes, vec2 imgRes) {
  float containerAspect = containerRes.x / containerRes.y;
  float imgAspect = imgRes.x / imgRes.y;
  vec2 newSize = containerAspect < imgAspect
    ? vec2(imgRes.x * containerRes.y / imgRes.y, containerRes.y)
    : vec2(containerRes.x, imgRes.y * containerRes.x / imgRes.x);
  vec2 offset = (containerAspect < imgAspect
    ? vec2((newSize.x - containerRes.x) * 0.5, 0.0)
    : vec2(0.0, (newSize.y - containerRes.y) * 0.5)) / newSize;
  return uv * containerRes / newSize + offset;
}

void main() {
  vec2 aspect = vec2(u_resolution.x / min(u_resolution.x, u_resolution.y), u_resolution.y / min(u_resolution.x, u_resolution.y));
  vec2 currentPos = v_uv * aspect;
  vec2 mousePos = u_mouse * aspect;
  
  float dist = length(currentPos - mousePos);
  
  // Luxury liquid silk ripple emanating from cursor
  float ripple = sin(dist * 18.0 - u_time * 3.5) * exp(-dist * 4.2);
  
  // Directional displacement vector
  vec2 dir = normalize(currentPos - mousePos + vec2(0.0001));
  
  // Subtle amplitude tuned for calm luxury elegance
  float displacementStrength = 0.022 * u_hover;
  vec2 displacedUv = v_uv + dir * ripple * displacementStrength;
  
  // Aspect-corrected cover sampling
  vec2 coverUv = getCoverUv(displacedUv, u_resolution, u_imageResolution);
  coverUv = clamp(coverUv, vec2(0.001), vec2(0.999));
  
  vec4 texColor = texture2D(u_texture, coverUv);
  
  // Soft brand caustic specular sheen (#5D2E85 purple highlight on ripple crests)
  float sheen = max(0.0, ripple) * 0.09 * u_hover;
  vec3 brandPurple = vec3(0.365, 0.180, 0.522);
  texColor.rgb += brandPurple * sheen;
  
  gl_FragColor = texColor;
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vsSource, fsSource) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export default function CardImageShader({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  aspectRatio = 'auto',
  loading = 'lazy',
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const textureRef = useRef(null);
  const rafRef = useRef(null);

  const hoverRef = useRef(0);
  const targetHoverRef = useRef(0);
  const mouseRef = useRef([0.5, 0.5]);
  const startTimeRef = useRef(0);
  const isRunningRef = useRef(false);

  // Pure lazy state initialization to prevent setState within effect
  const [canMountShader] = useState(() => {
    if (typeof window === 'undefined') return false;
    const flagEnabled = motionConfig.caseHover;
    const hasHardware = (navigator.hardwareConcurrency || 4) >= 4;
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return Boolean(flagEnabled && hasHardware && isDesktopPointer && !prefersReducedMotion);
  });

  const [isReady, setIsReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Starts the RAF animation loop if not currently running
  const startLoopIfNeeded = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    function renderLoop(timestamp) {
      const gl = glRef.current;
      const program = programRef.current;
      if (!gl || !program) {
        isRunningRef.current = false;
        return;
      }

      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsedTime = (timestamp - startTimeRef.current) * 0.001;

      // Smooth lerp transition for hover
      hoverRef.current += (targetHoverRef.current - hoverRef.current) * 0.08;

      gl.useProgram(program);

      gl.uniform2f(gl.getUniformLocation(program, 'u_mouse'), mouseRef.current[0], mouseRef.current[1]);
      gl.uniform1f(gl.getUniformLocation(program, 'u_hover'), hoverRef.current);
      gl.uniform1f(gl.getUniformLocation(program, 'u_time'), elapsedTime);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // Continue loop only if hovering or still transitioning back to 0
      if (targetHoverRef.current > 0 || hoverRef.current > 0.002) {
        rafRef.current = requestAnimationFrame(renderLoop);
      } else {
        hoverRef.current = 0;
        isRunningRef.current = false;
      }
    }

    rafRef.current = requestAnimationFrame(renderLoop);
  }, []);

  // Initialize WebGL and Texture
  useEffect(() => {
    if (!canMountShader) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: 'low-power',
      preserveDrawingBuffer: false,
    });

    if (!gl) return;
    glRef.current = gl;

    const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
    if (!program) return;
    programRef.current = program;

    // Quad geometry: full clip space rectangle
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    // Load texture
    const texture = gl.createTexture();
    textureRef.current = texture;
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      if (!glRef.current) return;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

      gl.useProgram(program);
      gl.uniform2f(
        gl.getUniformLocation(program, 'u_imageResolution'),
        img.naturalWidth || 800,
        img.naturalHeight || 600
      );
      gl.uniform1i(gl.getUniformLocation(program, 'u_texture'), 0);

      setIsReady(true);
    };

    img.onerror = () => {
      // Fallback cleanly to standard CSS img
      setIsReady(false);
    };

    img.src = src;

    // Handle container resizing
    const updateSize = () => {
      if (!container || !canvas || !gl) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.useProgram(program);
        gl.uniform2f(gl.getUniformLocation(program, 'u_resolution'), width, height);
      }
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
        if (program) gl.deleteProgram(program);
      }
      glRef.current = null;
      programRef.current = null;
      textureRef.current = null;
    };
  }, [canMountShader, src]);

  // Pointer event handlers
  const handleMouseEnter = () => {
    targetHoverRef.current = 1.0;
    setIsHovered(true);
    startLoopIfNeeded();
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; // invert Y for WebGL UV space
    mouseRef.current = [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
    targetHoverRef.current = 1.0;
    startLoopIfNeeded();
  };

  const handleMouseLeave = () => {
    targetHoverRef.current = 0.0;
    setIsHovered(false);
    startLoopIfNeeded();
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group/shader ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Primary Accessible & SEO image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`w-full h-full object-cover block transition-transform duration-500 ease-out group-hover/shader:scale-[1.03] ${imgClassName}`}
      />

      {/* WebGL Canvas overlay */}
      {canMountShader && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
          style={{ opacity: isReady && isHovered ? 1 : 0 }}
        />
      )}
    </div>
  );
}
