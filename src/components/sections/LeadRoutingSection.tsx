"use client";

import React, { useState, useEffect, useRef, Suspense, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, MotionConfig } from "motion/react";
import { Megaphone, MapPin, Camera, Globe, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Lazy-load BackgroundCubesGrid so three.js stays in its own separate chunk
const LazyBackgroundCubesGrid = React.lazy(() =>
  import("@/components/ui/background-cubes-grid").then((m) => ({
    default: m.BackgroundCubesGrid,
  }))
);

// WhatsApp brand SVG path
const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

type SourcePill = {
  word: string;
  bg: string;
  fg: string;
  isSvg?: boolean;
  IconComponent?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const sources: SourcePill[] = [
  { word: "Meta Ads", bg: "#F1E7F9", fg: "#5D2E85", IconComponent: Megaphone },
  { word: "Google Maps", bg: "#F1E7F9", fg: "#5D2E85", IconComponent: MapPin },
  { word: "Instagram", bg: "#F1E7F9", fg: "#5D2E85", IconComponent: Camera },
  { word: "your website", bg: "#F1E7F9", fg: "#5D2E85", IconComponent: Globe },
  { word: "phone calls", bg: "#F1E7F9", fg: "#5D2E85", IconComponent: Phone },
  { word: "WhatsApp", bg: "#25D366", fg: "#ffffff", isSvg: true },
];

const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;
const STAGGER = 0.09;
const START = 0.15;

function InlinePill({ source, delay }: { source: SourcePill; delay: number }) {
  const reduceMotion = useReducedMotion();
  const IconComp = source.IconComponent;

  return (
    <motion.span
      initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
      className="mx-[0.06em] inline-flex translate-y-[-0.06em] items-center gap-[0.28em] rounded-full py-[0.1em] pr-[0.44em] pl-[0.12em] align-middle leading-none bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] backdrop-blur"
    >
      <span
        className="inline-flex size-[0.92em] items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ backgroundColor: source.bg, color: source.fg }}
      >
        {source.isSvg ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-[0.52em]" aria-hidden>
            <path d={WHATSAPP_PATH} />
          </svg>
        ) : (
          IconComp && <IconComp className="size-[0.52em]" strokeWidth={2.5} />
        )}
      </span>
      <span className="font-heading font-medium text-[0.88em] tracking-tight">{source.word}</span>
    </motion.span>
  );
}

function LeadRoutingContent() {
  const reduceMotion = useReducedMotion();
  const [metaAds, googleMaps, instagram, website, phoneCalls, whatsapp] = sources;

  const pill = (s: SourcePill, suffix = ""): ReactNode => (
    <span className="whitespace-nowrap">
      <InlinePill source={s} delay={START + sources.indexOf(s) * STAGGER} />
      {suffix}
    </span>
  );

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-20% 0px" },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  });

  return (
    <div className="pointer-events-none mx-auto flex max-w-[1080px] flex-col items-center text-center antialiased">
      {/* Eyebrow */}
      <motion.span
        {...fadeUp(0.05)}
        className="font-heading font-bold text-xs uppercase tracking-widest text-[#B58AE0] block mb-4"
      >
        AUTOMATED TELEMETRY · INSTANT LEAD ROUTING
      </motion.span>

      {/* Semantic H2 Heading */}
      <h2
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        className="max-w-[30ch] text-[clamp(27px,4vw,52px)] leading-[1.32] font-normal tracking-tight text-balance text-white"
      >
        Leads from {pill(metaAds, ",")} {pill(googleMaps, ",")} {pill(instagram, ",")}{" "}
        {pill(website)} and {pill(phoneCalls)} reach {pill(whatsapp)} in under 60 seconds.
      </h2>

      {/* Subtext */}
      <motion.p
        {...fadeUp(0.7)}
        className="mt-6 max-w-[640px] font-body text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-white/75 text-pretty px-2"
      >
        Automated WhatsApp routing guides qualified prospects straight into your appointment calendar, with live campaign telemetry behind every lead.
      </motion.p>

      {/* CTAs (Pointer Events Auto) */}
      <motion.div
        {...fadeUp(0.8)}
        className="pointer-events-auto mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Link
          to="/contact"
          className="inline-flex h-11 items-center justify-center rounded-full bg-[#F1E7F9] px-6 text-[14px] font-heading font-bold uppercase tracking-wider text-[#5D2E85] shadow-[0_4px_20px_rgba(181,138,224,0.35)] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Book a Strategy Call
        </Link>
        <Link
          to="/services/websites"
          className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 text-[14px] font-heading font-semibold uppercase tracking-wider text-white hover:bg-white/[0.12] hover:border-white/35 transition-all"
        >
          See Conversion Funnels
        </Link>
      </motion.div>

      {/* Small note */}
      <motion.p {...fadeUp(0.9)} className="mt-4 font-body text-[12px] sm:text-[13px] text-white/50 tracking-wide">
        Direct Founder Call · 20-Minute Strategic Session
      </motion.p>
    </div>
  );
}

// Static visible still of the grid (purple grid lines & dot perspective pattern)
// Shown when prefers-reduced-motion is active, WebGL is unavailable, or lazy chunk is loading
function FallbackBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[#0E0817] overflow-hidden"
    >
      {/* 3D Perspective Grid Line & Dot Matrix Still in brand purple */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(199, 155, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(199, 155, 255, 0.18) 1px, transparent 1px),
            radial-gradient(circle 2px at 20px 20px, rgba(199, 155, 255, 0.5) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px",
          backgroundPosition: "center center",
          transform: "perspective(700px) rotateX(28deg) translateY(-25px) scale(1.18)",
          transformOrigin: "center 30%",
        }}
      />
      {/* Ambient purple glow highlights */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(199, 155, 255, 0.15), transparent 70%),
            radial-gradient(circle 420px at 50% 40%, rgba(46, 31, 69, 0.6), transparent 80%),
            linear-gradient(to bottom, #0E0817 0%, rgba(46, 31, 69, 0.25) 50%, #0E0817 100%)
          `,
        }}
      />
    </div>
  );
}

function checkWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.warn("[LeadRoutingSection] WebGL context unavailable. Displaying static grid fallback.");
      return false;
    }
    return true;
  } catch (err) {
    console.warn("[LeadRoutingSection] WebGL detection failed:", err);
    return false;
  }
}

export default function LeadRoutingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(true);
  const [gridSize, setGridSize] = useState(28); // SSR-safe smaller default
  const [hasWebGL, setHasWebGL] = useState(true);
  const reduceMotion = useReducedMotion();

  // Test WebGL once mounted
  useEffect(() => {
    setHasWebGL(checkWebGL());
  }, []);

  // Responsive gridSize: 44 on desktop, 28 under 768px
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 768px)");
    const updateSize = () => setGridSize(media.matches ? 44 : 28);
    updateSize();

    media.addEventListener("change", updateSize);
    return () => media.removeEventListener("change", updateSize);
  }, []);

  // IntersectionObserver: Once within range, keep mounted for smooth rendering
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setHasEnteredView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
        }
      },
      { rootMargin: "400px 0px 400px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldRenderCanvas = hasEnteredView && hasWebGL;

  return (
    <section
      id="lead-routing"
      aria-label="Automated Lead Routing and Telemetry"
      className="py-10 sm:py-16 md:py-20 bg-[#F7F6F2] relative overflow-hidden border-b border-[#DEDED7]/70"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div
          ref={sectionRef}
          className="relative isolate flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0E0817] px-5 py-24 sm:px-8 sm:py-32 shadow-2xl"
        >
          {/* Animated WebGL 3D Canvas or static fallback */}
          {shouldRenderCanvas ? (
            <Suspense fallback={<FallbackBackground />}>
              <MotionConfig reducedMotion="never">
                <LazyBackgroundCubesGrid
                  variant="perspective"
                  baseColor="#2E1F45"
                  waveColor="#C79BFF"
                  backgroundColor="#0E0817"
                  glow={1}
                  amplitude={0.6}
                  gridSize={gridSize}
                  className="-z-10"
                />
              </MotionConfig>
            </Suspense>
          ) : (
            <FallbackBackground />
          )}

          {/* Radial overlay behind the text: reduced opacity from 0.8 to 0.6 so cubes are clearly visible */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(14,8,23,0.6),transparent)]"
          />

          {/* Content */}
          <LeadRoutingContent />
        </div>
      </div>
    </section>
  );
}

