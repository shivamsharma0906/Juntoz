import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { motionConfig } from '../../config/motion';
import { getLenis } from '../../lib/lenis';

// Only loaded dynamically when all capability gates pass
const LazyHeroScene = lazy(() => import('./HeroScene'));

function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return false;
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    return true;
  } catch {
    return false;
  }
}

export default function Hero3D({ fallback = null, isScrollStory = false }) {
  const [canMount3D, setCanMount3D] = useState(false);
  // Initial tier is strictly 'high'. Mid tier comes exclusively from runtime step-down.
  const [tier, setTier] = useState('high');
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasContextLost, setHasContextLost] = useState(false);

  const containerRef = useRef(null);
  const pointerRef = useRef({ x: -999, y: -999 });
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    // 1. Feature Flag Check (Must be enabled by hero3d or scrollStory)
    const isFeatureEnabled = isScrollStory ? motionConfig.scrollStory : (motionConfig.hero3d || motionConfig.scrollStory);
    if (!isFeatureEnabled) return;

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
  }, [isScrollStory]);

  // 4. Scroll progress tracking across the customer journey
  useEffect(() => {
    if (!canMount3D) return;

    let cleanupScroll = null;
    const lenis = getLenis();
    if (lenis) {
      const handleLenisScroll = (e) => {
        if (typeof e.progress === 'number') {
          scrollProgressRef.current = e.progress;
        }
      };
      lenis.on('scroll', handleLenisScroll);
      cleanupScroll = () => {
        lenis.off('scroll', handleLenisScroll);
      };
    } else {
      const handleNativeScroll = () => {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgressRef.current = docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
      };
      window.addEventListener('scroll', handleNativeScroll, { passive: true });
      cleanupScroll = () => {
        window.removeEventListener('scroll', handleNativeScroll);
      };
    }

    return () => {
      if (cleanupScroll) cleanupScroll();
    };
  }, [canMount3D]);

  // 5. Track pointer on window with passive listener (Canvas wrapper is pointer-events-none)
  useEffect(() => {
    if (!canMount3D) return;

    const handlePointerMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
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

  // 6. Visibility and Offscreen intersection management
  useEffect(() => {
    if (!canMount3D || !containerRef.current) return;

    let observer = null;
    if (!isScrollStory) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting && !document.hidden);
        },
        { threshold: 0.05 }
      );
      observer.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (observer) observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [canMount3D, isScrollStory]);

  // 7. WebGL context lost handler
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

  // ── SCROLL-STORY FULL-PAGE VIEWPORT MODE ──
  if (isScrollStory) {
    if (!showWebGL) return null;

    return (
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`w-full h-full transition-opacity duration-1000 ease-out ${
            isSceneReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <LazyHeroScene
                tier={tier}
                isVisible={isVisible}
                pointerRef={pointerRef}
                scrollProgressRef={scrollProgressRef}
                onFirstFrame={() => setIsSceneReady(true)}
                onPerformanceDrop={handlePerformanceDrop}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    );
  }

  // ── LOCAL HERO MODE ──
  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* ── BASE LAYER: SVG Fallback ── */}
      <div
        className={`w-full transition-opacity duration-700 ease-out ${
          isSceneReady && showWebGL ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {fallback}
      </div>

      {/* ── ENHANCEMENT LAYER: Interactive WebGL Canvas ── */}
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
                scrollProgressRef={scrollProgressRef}
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
