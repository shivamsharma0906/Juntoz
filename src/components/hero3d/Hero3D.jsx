import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { motionConfig } from '../../config/motion';

// Only loaded dynamically when all capability gates pass
const LazyHeroScene = lazy(() => import('./HeroScene'));

function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

export default function Hero3D({ fallback }) {
  const [canMount3D, setCanMount3D] = useState(false);
  // Initial tier is strictly 'high'. Mid tier comes exclusively from runtime step-down.
  const [tier, setTier] = useState('high');
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasContextLost, setHasContextLost] = useState(false);

  const containerRef = useRef(null);
  const pointerRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    // 1. Feature Flag Check
    if (!motionConfig.hero3d) return;

    // 2. Hardware and Environment Gates
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (navigator.connection && navigator.connection.saveData) return;

    // Strict Gate: Mount WebGL only if hardwareConcurrency >= 4; below that, SVG only.
    const concurrency = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 0;
    if (concurrency < 4) return;

    if (!checkWebGLSupport()) return;

    // 3. Defer mounting until window 'load' has fired and CPU is idle
    let idleHandle = null;
    let timerHandle = null;

    const scheduleMount = () => {
      const startIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 150));
      idleHandle = startIdle(() => {
        setCanMount3D(true);
      }, { timeout: 2000 });
    };

    if (document.readyState === 'complete') {
      scheduleMount();
    } else {
      window.addEventListener('load', scheduleMount, { once: true });
    }

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsVisible(false);
      } else if (!document.hidden) {
        setIsVisible(true);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (idleHandle && window.cancelIdleCallback) window.cancelIdleCallback(idleHandle);
      if (timerHandle) clearTimeout(timerHandle);
      window.removeEventListener('load', scheduleMount);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 4. Track pointer on window with passive listener (Canvas wrapper is pointer-events-none)
  useEffect(() => {
    if (!canMount3D) return;

    const handlePointerMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalized coordinates relative to container center [-1.5, 1.5]
      const nx = ((e.clientX - (rect.left + rect.width / 2)) / rect.width) * 3.0;
      const ny = -((e.clientY - (rect.top + rect.height / 2)) / rect.height) * 3.0;
      pointerRef.current = { x: nx, y: ny };
    };

    const handlePointerLeave = () => {
      pointerRef.current = { x: -999, y: -999 };
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, [canMount3D]);

  // 5. Visibility and Offscreen intersection management
  useEffect(() => {
    if (!canMount3D || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && !document.hidden);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [canMount3D]);

  // 6. WebGL context lost handler
  useEffect(() => {
    const handleContextLost = (e) => {
      e.preventDefault();
      setHasContextLost(true);
      setCanMount3D(false);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('webglcontextlost', handleContextLost, false);
    }
    return () => {
      if (el) el.removeEventListener('webglcontextlost', handleContextLost);
    };
  }, [canMount3D]);

  // Adaptive performance step-down handler
  const handlePerformanceDrop = () => {
    if (tier === 'high') {
      setTier('mid');
    } else {
      // Step down all the way to SVG fallback if mid still struggles
      setCanMount3D(false);
    }
  };

  const showWebGL = canMount3D && !hasContextLost;

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* ── BASE LAYER: SVG Fallback ──
          Always rendered initially to guarantee instant zero-delay presentation.
          Fades out only after the 3D scene confirms its first rendered frame. */}
      <div
        className={`w-full transition-opacity duration-700 ease-out ${
          isSceneReady && showWebGL ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {fallback}
      </div>

      {/* ── ENHANCEMENT LAYER: Interactive WebGL Canvas ──
          Strictly pointer-events-none so CTA buttons and HUD cards are never intercepted */}
      {showWebGL && (
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ease-out ${
            isSceneReady ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <ErrorBoundary fallback={fallback}>
            <Suspense fallback={null}>
              <LazyHeroScene
                tier={tier}
                isVisible={isVisible}
                pointerRef={pointerRef}
                onFirstFrame={() => setIsSceneReady(true)}
                onPerformanceDrop={handlePerformanceDrop}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    </div>
  );
}
