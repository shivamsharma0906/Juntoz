// Spine Accordion by Made for Award: https://www.madeforaward.com/ui/interactions/spine-accordion
// Free and open source (MIT). If it helped, a star means a lot: https://github.com/shivc868/madeforaward-ui
'use client'

import {animate, motion, useMotionValue, useSpring, useTransform, type MotionValue} from 'motion/react'
import {useCallback, useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore} from 'react'

export type SpineItem = {
  title: string
  shortTitle?: string
  badge?: string
  subtitle?: string
  description?: string
  deliverables?: string[]
  image?: string
  imageAlt?: string
  imageScale?: number
  tone?: string
  coverColor?: string
  linkLabel?: string
  href?: string
  newTab?: boolean
}

export type SpineAccordionProps = {
  items?: SpineItem[]
  /** 1-based index of the panel open at start; 0 starts with all closed (when collapsible) */
  initialOpen?: number
  /** clicking the open panel closes it */
  collapsible?: boolean
  /** a resting mouse opens a spine after a short intent delay */
  hoverToOpen?: boolean
  /** moves to the next panel on a timer, with a progress ring and pause button */
  autoplay?: boolean
  /** seconds per panel (min 2) */
  interval?: number
  /** panel height in the horizontal layout, px */
  cardHeight?: number
  /** spine width in the horizontal layout, px */
  closedWidth?: number
  /** header height in the stacked layout, px */
  mobileHeaderHeight?: number
  /** container width from which spines sit side by side, px */
  breakpoint?: number
  /** narrowest the open panel may get before the row scrolls, px */
  minOpenWidth?: number
  gap?: number
  radius?: number
  /** how far the artwork follows the pointer, px */
  artTravel?: number
  /** artwork floats, tilts and follows the pointer on the open panel */
  hoverMotion?: boolean
  textColor?: string
  secondaryColor?: string
  coverTextColor?: string
  focusColor?: string
  className?: string
}

export const JUNTOZ_ACCORDION_SERVICES: SpineItem[] = [
  {
    title: 'Performance Marketing & Paid Ads',
    shortTitle: 'PERFORMANCE ADS',
    badge: 'Meta & Google Partner',
    subtitle: 'Paid Acquisition & High-ROAS Pipeline',
    description:
      'Meta and Google advertising campaigns focused on qualified leads and conversions. We deploy granular pin-code targeting, high-converting video variations, and automated WhatsApp routing to turn ad spend into predictable revenue.',
    deliverables: [
      'Pin-code & high-intent audience targeting',
      'Direct-response video ad hooks & testing',
      'Speed-to-lead WhatsApp attribution tracking',
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Performance marketing data dashboard and campaign optimization',
    tone: '#F7F6F2',
    coverColor: '#111111',
    linkLabel: 'Explore Paid Ads',
    href: '/services/meta-google-ads',
  },
  {
    title: 'Lead Generation',
    shortTitle: 'LEAD GENERATION',
    badge: '1-Tap WhatsApp Funnel',
    subtitle: 'Conversion-Focused Acquisition Funnels',
    description:
      'Lead acquisition strategies, landing pages and conversion-focused funnels. We engineer high-converting digital storefronts paired with automated WhatsApp workflows that guide high-ticket prospects straight into your appointment book.',
    deliverables: [
      'Sub-second mobile landing page architecture',
      'Automated WhatsApp booking & deposit triggers',
      'Ghosting reduction & lead pre-qualification flows',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'High converting landing page funnels and digital conversion metrics',
    tone: '#F1E7F9',
    coverColor: '#1A1A1A',
    linkLabel: 'Explore Lead Funnels',
    href: '/services/websites',
  },
  {
    title: 'Social Media Management',
    shortTitle: 'SOCIAL MEDIA',
    badge: 'Editorial & 4K Reels',
    subtitle: 'Content Strategy & Instagram Growth',
    description:
      'Content strategy, Instagram growth, profile management and audience engagement. We craft curated grid aesthetics, viral reel concepts, and daily story architectures that nurture casual followers into high-paying clients.',
    deliverables: [
      'Curated grid aesthetics & positioning',
      'High-retention 4K reel scripting & production',
      'Direct-response DM nurturing & community engagement',
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Curated editorial social media content strategy on mobile display',
    tone: '#F7F6F2',
    coverColor: '#111111',
    linkLabel: 'Explore Social Growth',
    href: '/services/instagram-management',
  },
  {
    title: 'SEO & Local Search',
    shortTitle: 'SEO & LOCAL SEARCH',
    badge: 'Local 3-Pack Supremacy',
    subtitle: 'Search Engine Optimisation & Google Business Profile',
    description:
      'Search engine optimisation, Google Business Profile and local visibility. We ensure your business ranks #1 when affluent local clients search for your services in your territory, capturing near-me intent before competitors.',
    deliverables: [
      'Google Business Profile (GBP) 3-Pack rank acceleration',
      'High-authority local citations & geo-tagged schema',
      'Review velocity engine & reputation management',
    ],
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Local search rankings and Google Business Profile optimization dashboard',
    tone: '#F1E7F9',
    coverColor: '#1A1A1A',
    linkLabel: 'Explore Local SEO',
    href: '/services/gmb',
  },
  {
    title: 'Branding & Creative Production',
    shortTitle: 'CREATIVE PRODUCTION',
    badge: 'Mumbai & Delhi NCR Shoots',
    subtitle: 'Brand Identity & Professional Shoots',
    description:
      'Brand identity, creative campaigns, visual content and professional shoots. We direct on-location 4K cinematic shoots and build cohesive brand visual systems that command premium pricing and defend your market authority.',
    deliverables: [
      'On-location commercial photo & 4K video shoots',
      'Signature brand identity, typography & palettes',
      'High-impact multi-channel digital creative toolkits',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'High-fashion editorial photo shoot and creative brand production',
    tone: '#F7F6F2',
    coverColor: '#111111',
    linkLabel: 'Explore Creative Shoots',
    href: '/services/mobile-content-shoot',
  },
]

const COVER = '#111111'
const OPEN_SPRING = {type: 'spring', stiffness: 260, damping: 34, mass: 1, restDelta: 0.05, restSpeed: 0.5} as const

const smooth = (v: number, a: number, b: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
const finePointer = (e: React.PointerEvent) => e.pointerType !== 'touch' && matchMedia('(hover:hover) and (pointer:fine)').matches
const startIndex = (open: number, n: number, collapsible: boolean) => {
  if (!n) return -1
  const i = Math.min(n - 1, Math.max(-1, Math.round(Number.isFinite(open) ? open : 1) - 1))
  return !collapsible && i < 0 ? 0 : i
}

const subscribeReduced = (cb: () => void) => {
  const mq = matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const useReducedMotion = () =>
  useSyncExternalStore(
    subscribeReduced,
    () => matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )

export default function SpineAccordion({
  items = JUNTOZ_ACCORDION_SERVICES,
  initialOpen = 1,
  collapsible = false,
  hoverToOpen = true,
  autoplay = false,
  interval = 6,
  cardHeight = 520,
  closedWidth = 76,
  mobileHeaderHeight = 64,
  breakpoint = 960,
  minOpenWidth = 440,
  gap = 10,
  radius = 24,
  artTravel = 4,
  hoverMotion = true,
  textColor = '#111111',
  secondaryColor = '#5F5F5A',
  coverTextColor = '#FFFFFF',
  focusColor = '#5D2E85',
  className = '',
}: SpineAccordionProps) {
  const n = items.length
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const triggers = useRef<(HTMLButtonElement | null)[]>([])
  const cards = useRef<(HTMLElement | null)[]>([])
  const [width, setWidth] = useState(0)
  const [minimums, setMinimums] = useState<Record<number, number>>({})
  const [open, setOpen] = useState(() => startIndex(initialOpen, n, collapsible))
  const startKey = `${initialOpen}-${n}-${collapsible}`
  const [startedFrom, setStartedFrom] = useState(startKey)
  if (startedFrom !== startKey) {
    setStartedFrom(startKey)
    setOpen(startIndex(initialOpen, n, collapsible))
  }
  const [selection, setSelection] = useState(0)
  const [paused, setPaused] = useState(false)
  const [pointerInside, setPointerInside] = useState(false)
  const [timerClicked, setTimerClicked] = useState(false)
  const [inView, setInView] = useState(false)
  const [tabVisible, setTabVisible] = useState(true)
  const [settled, setSettled] = useState(true)
  const [timerFocus, setTimerFocus] = useState(false)
  const [timerHover, setTimerHover] = useState(false)
  const progress = useMotionValue(0)
  const elapsed = useRef(0)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingHover = useRef(-1)
  const pointer = useRef({x: 0, y: 0})
  const lastOpen = useRef({x: -9999, y: -9999, index: -1, time: 0})
  const hoverBlockedUntil = useRef(0)
  const openRef = useRef(open)

  const intervalMs = Math.max(2, Number.isFinite(interval) ? interval : 6) * 1000
  const timerOn = autoplay && n > 1 && !reduced
  const running = settled && timerOn && !paused && (!pointerInside || timerClicked) && inView && tabVisible && open >= 0

  const clearHover = useCallback(() => {
    if (hoverTimer.current !== null) clearTimeout(hoverTimer.current)
    hoverTimer.current = null
    pendingHover.current = -1
  }, [])

  const select = useCallback(
    (i: number) => {
      clearHover()
      lastOpen.current = {...pointer.current, index: -1, time: 0}
      elapsed.current = 0
      setOpen(i)
      setSelection((s) => s + 1)
      setSettled(reduced)
    },
    [clearHover, reduced],
  )

  const linkFocused = () => {
    const el = document.activeElement
    return el instanceof HTMLElement && !!el.dataset.bodyLink && rootRef.current?.contains(el) && el.matches(':focus-visible')
  }

  const hoverIntent = (i: number, e: React.PointerEvent<HTMLButtonElement>) => {
    if (!hoverToOpen || linkFocused() || i === open || e.pointerType === 'touch' || e.buttons || e.timeStamp < hoverBlockedUntil.current || !finePointer(e)) return
    pointer.current = {x: e.clientX, y: e.clientY}
    const last = lastOpen.current
    if (Math.abs(e.clientX - last.x) + Math.abs(e.clientY - last.y) < 4 || pendingHover.current === i) return
    clearHover()
    pendingHover.current = i
    const target = e.currentTarget
    hoverTimer.current = setTimeout(() => {
      hoverTimer.current = null
      pendingHover.current = -1
      if (!target.isConnected || !target.matches(':hover') || linkFocused()) return
      select(i)
      lastOpen.current = {...pointer.current, index: i, time: performance.now()}
    }, 120)
  }

  useEffect(() => clearHover, [clearHover])
  useEffect(() => clearHover(), [hoverToOpen, n, clearHover])
  useEffect(() => {
    openRef.current = open
  }, [open])

  useLayoutEffect(() => {
    elapsed.current = 0
    progress.set(0)
  }, [open, selection, intervalMs, progress, reduced])

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === 'visible')
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting && e.intersectionRatio >= 0.25), {threshold: [0, 0.25]})
    io.observe(root)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!running) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      elapsed.current = Math.min(intervalMs, elapsed.current + Math.max(0, now - last))
      last = now
      progress.set(elapsed.current / intervalMs)
      if (elapsed.current >= intervalMs) return select((open + 1) % n)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running, open, selection, intervalMs, n, progress, select])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => setWidth(root.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  const onMinimum = useCallback((i: number, min: number) => setMinimums((m) => (Math.abs((m[i] || 0) - min) > 0.5 ? {...m, [i]: min} : m)), [])
  const onSettled = useCallback((i: number, done: boolean) => {
    if (i === openRef.current || openRef.current < 0) setSettled(done)
  }, [])

  const rowGap = Math.max(0, n - 1) * gap
  const spines = Math.max(0, n - 1) * closedWidth
  const narrowest = Math.max(minOpenWidth, closedWidth + 240)
  const horizontal = n > 0 && width >= breakpoint
  const trackW = horizontal ? Math.max(width, spines + rowGap + narrowest) : width
  const openW = Math.max(0, trackW - rowGap - spines)
  const scrolls = horizontal && trackW > width + 0.5
  const compact = width < 600
  const panelH = Math.max(cardHeight, ...items.map((_, i) => minimums[i] || 0))
  const evenW = n ? Math.max(0, (trackW - rowGap) / n) : 0

  useEffect(() => clearHover(), [horizontal, width, clearHover])

  const reveal = useCallback(
    (i: number, triggerOnly = false, instant = false) => {
      const vp = viewportRef.current
      const card = cards.current[i]
      const trigger = triggers.current[i]
      if (!scrolls || !vp || !card || !trigger) return
      const w = triggerOnly ? trigger.offsetWidth : card.offsetWidth
      const start = card.offsetLeft + (triggerOnly ? trigger.offsetLeft : 0)
      const end = start + w
      let to = vp.scrollLeft
      if (w > vp.clientWidth || start < to) to = start
      else if (end > to + vp.clientWidth) to = end - vp.clientWidth
      to = Math.max(0, Math.min(to, vp.scrollWidth - vp.clientWidth))
      if (Math.abs(to - vp.scrollLeft) > 0.5) vp.scrollTo({left: to, behavior: reduced || instant ? 'auto' : 'smooth'})
    },
    [scrolls, reduced],
  )

  useLayoutEffect(() => {
    if (!scrolls) {
      if (viewportRef.current) viewportRef.current.scrollLeft = 0
      return
    }
    if (settled && open >= 0) {
      const el = document.activeElement
      const focused = el instanceof HTMLButtonElement && el.matches(':focus-visible') ? triggers.current.indexOf(el) : -1
      if (focused >= 0 && focused !== open) reveal(focused, true, true)
      else reveal(open)
    }
  }, [scrolls, trackW, width, open, settled, reveal])

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    let to = i
    if (e.key === 'ArrowDown' || (horizontal && e.key === 'ArrowRight')) to = (i + 1) % n
    else if (e.key === 'ArrowUp' || (horizontal && e.key === 'ArrowLeft')) to = (i - 1 + n) % n
    else if (e.key === 'Home') to = 0
    else if (e.key === 'End') to = n - 1
    else return
    e.preventDefault()
    triggers.current[to]?.focus({preventScroll: scrolls})
    reveal(to, true, true)
  }

  if (!n) return null

  const colors = {text: textColor, secondary: secondaryColor, coverText: coverTextColor}
  return (
    <div
      ref={rootRef}
      className={`relative min-w-0 text-base leading-[1.55em] tracking-[-0.015em] ${className}`}
      style={{'--sa-focus': focusColor, '--sa-text': textColor} as React.CSSProperties}
      data-autoplay={timerOn ? (running ? 'running' : 'paused') : 'off'}
      onPointerMoveCapture={(e) => void (pointer.current = {x: e.clientX, y: e.clientY})}
      onPointerEnter={(e) => e.pointerType !== 'touch' && setPointerInside(true)}
      onPointerLeave={() => {
        setPointerInside(false)
        setTimerClicked(false)
        clearHover()
      }}
      onPointerDownCapture={(e) => {
        if (e.pointerType === 'touch' && !(e.target instanceof Element && e.target.closest('[data-timer]'))) setPaused(true)
      }}
      onFocusCapture={(e) => {
        if (!(e.target instanceof HTMLElement) || !e.target.matches(':focus-visible')) return
        clearHover()
        setPaused(true)
        const i = triggers.current.findIndex((t) => t === (e.target as Element))
        if (i >= 0) reveal(i, true, true)
      }}
    >
      <div
        ref={viewportRef}
        className="w-full min-w-0 overscroll-x-contain"
        style={{overflowX: scrolls ? 'auto' : 'visible', overflowY: scrolls ? 'hidden' : 'visible'}}
        onScroll={(e) => {
          clearHover()
          hoverBlockedUntil.current = e.timeStamp + 160
          lastOpen.current = {...pointer.current, index: -1, time: 0}
        }}
      >
        <div className="relative flex items-start" style={{width: trackW, flexDirection: horizontal ? 'row' : 'column', gap}}>
          {width > 0 &&
            items.map((item, i) => (
              <Card
                key={i}
                item={item}
                index={i}
                open={open === i}
                collapsible={collapsible}
                horizontal={horizontal}
                compact={compact}
                width={horizontal ? (open < 0 ? evenW : open === i ? openW : closedWidth) : width}
                openW={horizontal ? openW : width}
                spine={closedWidth}
                panelH={panelH}
                headerMin={mobileHeaderHeight}
                colors={colors}
                padding={compact ? 16 : 24}
                radius={radius}
                reduced={reduced}
                hoverMotion={hoverMotion}
                artTravel={artTravel}
                motionActive={inView && tabVisible}
                id={id}
                selection={`${open}-${selection}`}
                setCard={(el) => void (cards.current[i] = el)}
                setTrigger={(el) => void (triggers.current[i] = el)}
                onToggle={(e) => {
                  clearHover()
                  const l = lastOpen.current
                  if (e.detail > 0 && open === i && l.index === i && e.timeStamp - l.time < 650) return
                  if (open === i && !collapsible) return
                  if (open === i) setPaused(true)
                  select(open === i ? -1 : i)
                }}
                onKeyDown={(e) => onKeyDown(e, i)}
                onHoverIntent={(e) => hoverIntent(i, e)}
                onHoverLeave={clearHover}
                onMinimum={onMinimum}
                onSettled={onSettled}
                timer={
                  timerOn
                    ? {
                        progress,
                        paused,
                        focus: timerFocus,
                        engaged: timerHover,
                        onClick: () => {
                          clearHover()
                          setPaused((p) => !p)
                          setTimerClicked(true)
                        },
                        onFocus: setTimerFocus,
                        onHover: setTimerHover,
                      }
                    : null
                }
              />
            ))}
        </div>
      </div>
    </div>
  )
}

type Timer = {
  progress: MotionValue<number>
  paused: boolean
  focus: boolean
  engaged: boolean
  onClick: () => void
  onFocus: (v: boolean) => void
  onHover: (v: boolean) => void
}

type CardProps = {
  item: SpineItem
  index: number
  open: boolean
  collapsible: boolean
  horizontal: boolean
  compact: boolean
  width: number
  openW: number
  spine: number
  panelH: number
  headerMin: number
  colors: {text: string; secondary: string; coverText: string}
  padding: number
  radius: number
  reduced: boolean
  hoverMotion: boolean
  artTravel: number
  motionActive: boolean
  id: string
  selection: string
  setCard: (el: HTMLElement | null) => void
  setTrigger: (el: HTMLButtonElement | null) => void
  onToggle: (e: React.MouseEvent) => void
  onKeyDown: (e: React.KeyboardEvent) => void
  onHoverIntent: (e: React.PointerEvent<HTMLButtonElement>) => void
  onHoverLeave: () => void
  onMinimum: (i: number, min: number) => void
  onSettled: (i: number, done: boolean) => void
  timer: Timer | null
}

function Card({
  item,
  index,
  open,
  collapsible,
  horizontal,
  compact,
  width,
  openW,
  spine,
  panelH,
  headerMin,
  colors,
  padding: pad,
  radius,
  reduced,
  hoverMotion,
  artTravel,
  motionActive,
  id,
  selection,
  setCard,
  setTrigger,
  onToggle,
  onKeyDown,
  onHoverIntent,
  onHoverLeave,
  onMinimum,
  onSettled,
  timer,
}: CardProps) {
  const headerRef = useRef<HTMLSpanElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [triggerHover, setTriggerHover] = useState(false)
  const [triggerFocus, setTriggerFocus] = useState(false)
  const [linkHover, setLinkHover] = useState(false)
  const [linkFocus, setLinkFocus] = useState(false)
  const [ready, setReady] = useState(true)
  const [measuredContentH, setMeasuredContentH] = useState(440)

  const motionOn = !reduced && hoverMotion
  const linkEngaged = open && (linkHover || linkFocus)
  const engaged = open && (triggerHover || linkHover || triggerFocus || linkFocus)

  const aimX = useMotionValue(0)
  const aimY = useMotionValue(0)
  const followX = useSpring(aimX, {stiffness: 180, damping: 27, mass: 1})
  const followY = useSpring(aimY, {stiffness: 180, damping: 27, mass: 1})
  const openness = useMotionValue(+open)
  const float = useSpring(0, {stiffness: 90, damping: 21, mass: 1, restDelta: 1e-4, restSpeed: 0.001})
  const phase = useMotionValue(0)

  useLayoutEffect(() => {
    if (!motionOn) return float.jump(0)
    float.set(engaged && motionActive ? 1 : 0)
  }, [engaged, motionActive, motionOn, float])

  useEffect(() => {
    if (!motionOn || !motionActive || (!engaged && float.get() < 0.001)) return
    const a = animate(phase, phase.get() + Math.PI * 2, {duration: 6.8, ease: 'linear', repeat: Infinity})
    const off = float.on('change', (v) => !engaged && v < 0.001 && a.stop())
    return () => {
      off()
      a.stop()
    }
  }, [engaged, motionActive, motionOn, float, phase])

  const grip = () => (motionOn ? smooth(openness.get(), 0.2, 0.95) : 0)
  const drift = () => float.get() * grip()
  const hoverX = useTransform(() => followX.get() * grip() + Math.sin(phase.get()) * 0.65 * drift())
  const hoverY = useTransform(() => followY.get() * grip() + (-5 + Math.sin(phase.get()) * 1.4) * drift())
  const hoverScale = useTransform(() => 1 + 0.02 * drift())

  const ringProgress = useMotionValue(0)
  useLayoutEffect(() => {
    if (!open || !timer) return
    ringProgress.set(0)
    return timer.progress.on('change', (v) => ringProgress.set(v))
  }, [open, timer, ringProgress])

  const resetAim = () => {
    aimX.set(0)
    aimY.set(0)
  }
  const aim = (e: React.PointerEvent<HTMLElement>) => {
    if (!motionOn || !open || !ready || !finePointer(e)) return
    const r = e.currentTarget.getBoundingClientRect()
    if (!r.width || !r.height) return
    aimX.set(Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1)) * artTravel)
    aimY.set(Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1)) * artTravel * 0.65)
  }

  useEffect(() => {
    aimX.set(0)
    aimY.set(0)
    if (!open) {
      setLinkHover(false)
      setLinkFocus(false)
    }
  }, [open, horizontal, aimX, aimY])

  const header = horizontal ? 0 : headerMin
  const contentH = horizontal ? panelH : measuredContentH
  const height = horizontal ? panelH : header + (open ? contentH : 0)

  const w = useMotionValue(width)
  const h = useMotionValue(height)
  const copyOpacity = useTransform(openness, (v) => (linkFocus ? 1 : smooth(v, 0.25, 0.9)))
  const toneOpacity = useTransform(openness, (v) => smooth(v, 0, 1))

  const wasHorizontal = useRef(horizontal)
  useLayoutEffect(() => {
    const switched = wasHorizontal.current !== horizontal
    wasHorizontal.current = horizontal
    if (reduced || switched) {
      w.jump(width)
      h.jump(height)
      openness.jump(+open)
      setReady(true)
      onSettled(index, true)
      return
    }
    setReady(false)
    onSettled(index, false)
    let cancelled = false
    let left = 3
    const done = () => {
      if (!cancelled && --left === 0) {
        setReady(true)
        onSettled(index, true)
      }
    }
    const a = animate(w, width, {...OPEN_SPRING, onComplete: done})
    const b = animate(h, height, {...OPEN_SPRING, onComplete: done})
    const c = animate(openness, +open, {...OPEN_SPRING, restDelta: 1e-4, restSpeed: 0.001, onComplete: done})
    return () => {
      cancelled = true
      a.stop()
      b.stop()
      c.stop()
    }
  }, [selection, open, width, height, horizontal, reduced, w, h, openness, index, onSettled])

  useLayoutEffect(() => {
    if (horizontal) {
      onMinimum(index, panelH)
      return
    }
    const el = contentRef.current
    if (!el) return
    const measure = () => {
      const mh = el.scrollHeight || 440
      setMeasuredContentH(mh)
      onMinimum(index, header + mh + 12)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [horizontal, panelH, header, index, onMinimum, open])

  return (
    <motion.article
      ref={setCard}
      className="group/card relative min-w-0 shrink-0 overflow-hidden shadow-card"
      data-open={open}
      data-trigger-engaged={triggerHover || triggerFocus || undefined}
      data-link-engaged={linkEngaged || undefined}
      style={{
        width: w,
        height: h,
        minHeight: horizontal ? panelH : header,
        borderRadius: radius,
        background: item.coverColor ?? COVER,
        color: colors.coverText,
      }}
    >
      {/* Background Tone when Open */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{background: item.tone ?? '#F7F6F2', opacity: toneOpacity}}
      />

      {/* Subtle Border Inset */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-4 rounded-[inherit] border border-white/10 transition-colors duration-240 group-data-trigger-engaged/card:border-white/30"
      />

      {/* Accordion Trigger (Spine Header) */}
      <h3 className="pointer-events-none absolute inset-0 z-2 m-0 p-0">
        <button
          ref={setTrigger}
          type="button"
          id={`${id}-trigger-${index}`}
          aria-label={item.title}
          aria-expanded={open}
          aria-disabled={open && !collapsible ? true : undefined}
          aria-controls={`${id}-panel-${index}`}
          onClick={onToggle}
          onKeyDown={onKeyDown}
          onPointerEnter={(e) => {
            if (!finePointer(e)) return
            setTriggerHover(true)
            if (!open) onHoverIntent(e)
          }}
          onPointerMove={(e) => !open && finePointer(e) && onHoverIntent(e)}
          onPointerLeave={() => {
            setTriggerHover(false)
            resetAim()
            onHoverLeave()
          }}
          onPointerCancel={() => {
            setTriggerHover(false)
            resetAim()
            onHoverLeave()
          }}
          onFocus={(e) => setTriggerFocus(e.currentTarget.matches(':focus-visible'))}
          onBlur={() => setTriggerFocus(false)}
          className="pointer-events-auto absolute top-0 left-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-left [-webkit-tap-highlight-color:transparent] focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-(--sa-focus)"
          style={{
            width: horizontal && open ? spine : '100%',
            height: horizontal ? '100%' : header,
            borderRadius: radius,
          }}
        >
          <span
            ref={headerRef}
            aria-hidden
            className={
              horizontal
                ? 'absolute inset-0 block select-none'
                : 'absolute inset-0 px-4 sm:px-6 flex items-center justify-between gap-3 select-none'
            }
          >
            {horizontal ? (
              !open ? (
                <>
                  {/* 01 Counter Badge */}
                  <span className="absolute top-[28px] left-1/2 -translate-x-1/2 font-mono text-[11px] font-bold tracking-widest text-white/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Vertical Spine Title (Short Form: Never Clips) */}
                  <span
                    className="absolute top-[75px] left-1/2 whitespace-nowrap font-sans font-bold text-xs uppercase tracking-[0.16em] text-white/90"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'translateX(-50%) rotate(180deg)',
                    }}
                  >
                    {item.shortTitle || item.title}
                  </span>

                  {/* Bottom Plus Indicator */}
                  <span className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/80 text-xs">
                    +
                  </span>
                </>
              ) : null
            ) : (
              <>
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                      open ? 'bg-[#5D2E85] text-white' : 'bg-[#F1E7F9] text-[#5D2E85]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-heading font-bold text-sm sm:text-base truncate ${
                      open ? 'text-[#111111]' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    open ? 'bg-[#111111]/10 text-[#111111]' : 'bg-white/10 text-white'
                  }`}
                >
                  {open ? '−' : '+'}
                </span>
              </>
            )}
          </span>
        </button>
      </h3>

      {/* Expanded Panel Content */}
      <div
        id={`${id}-panel-${index}`}
        role="region"
        aria-labelledby={`${id}-trigger-${index}`}
        aria-hidden={!open}
        className="pointer-events-none absolute inset-0 z-1"
      >
        {horizontal ? (
          /* ── DESKTOP HORIZONTAL OPEN PANEL: 2-COLUMN LUXURY EDITORIAL ── */
          <div
            className="absolute inset-0 block overflow-hidden"
            style={{
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: open ? 'auto' : 'none',
            }}
            onPointerEnter={(e) => {
              if (finePointer(e)) setLinkHover(true)
            }}
            onPointerMove={aim}
            onPointerLeave={() => {
              setLinkHover(false)
              resetAim()
            }}
          >
            <motion.div
              style={{opacity: copyOpacity}}
              className="w-full h-full p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 bg-white/95 select-text overflow-hidden"
            >
              {/* Left Column: Information, Badges & Deliverables (~58%) */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full z-10">
                <div className="space-y-4">
                  {/* Editorial Eyebrow */}
                  <div className="flex items-center gap-2.5 flex-wrap font-mono text-xs uppercase tracking-wider">
                    <span className="font-semibold text-[#5D2E85]">
                      SERVICE 0{index + 1}
                    </span>
                    {item.badge && (
                      <>
                        <span className="text-[#DEDED7]">/</span>
                        <span className="text-[#5F5F5A]">{item.badge}</span>
                      </>
                    )}
                  </div>

                  {/* Service Headline */}
                  <h3
                    style={{fontFamily: "'Playfair Display', Georgia, serif"}}
                    className="font-normal text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.12] text-[#111111] tracking-tight"
                  >
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <p className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-[#5D2E85]">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-[#5F5F5A] leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  {item.deliverables && item.deliverables.length > 0 && (
                    <div className="pt-3 border-t border-[#DEDED7]/80 space-y-2">
                      <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#5F5F5A] block">
                        CORE DELIVERABLES &amp; EXECUTION:
                      </span>
                      <ul className="space-y-1.5">
                        {item.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2.5 text-xs text-[#111111] font-medium">
                            <span className="w-4 h-4 rounded-full bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center shrink-0 text-[10px] font-bold">
                              ✓
                            </span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Action CTA Button */}
                {item.href && (
                  <div className="pt-4 mt-auto">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm group/btn"
                    >
                      <span>{item.linkLabel || 'Explore Service'}</span>
                      <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Photographic Preview Frame (~42%) */}
              {item.image && (
                <div className="hidden sm:flex lg:w-[40%] xl:w-[42%] shrink-0 flex-col justify-center">
                  <motion.div
                    style={{x: hoverX, y: hoverY, scale: hoverScale}}
                    className="relative w-full h-full max-h-[380px] rounded-2xl overflow-hidden border border-[#DEDED7] shadow-card bg-[#F7F6F2] group/frame"
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/frame:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/90">
                        Verified System
                      </span>
                      <span className="text-[10px] font-sans font-semibold text-white/90">
                        Commercial Focus
                      </span>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          /* ── MOBILE / STACKED OPEN PANEL ── */
          <div
            ref={contentRef}
            className="absolute inset-x-0 bottom-0 overflow-hidden"
            style={{
              top: header,
              pointerEvents: open ? 'auto' : 'none',
            }}
          >
            <motion.div
              style={{opacity: copyOpacity}}
              className="p-5 space-y-4 bg-white/95 border-t border-[#DEDED7]/80 rounded-b-2xl select-text"
            >
              {item.image && (
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[#DEDED7] shadow-xs">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase tracking-wider text-white drop-shadow-sm">
                    SERVICE 0{index + 1}
                  </span>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {item.badge && (
                    <span className="font-mono font-semibold text-[10px] uppercase tracking-wider text-[#5D2E85]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3
                  style={{fontFamily: "'Playfair Display', Georgia, serif"}}
                  className="text-xl font-normal text-[#111111]"
                >
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="font-sans font-bold text-[11px] uppercase tracking-wider text-[#5D2E85]">
                    {item.subtitle}
                  </p>
                )}
                <p className="font-body text-xs text-[#5F5F5A] leading-relaxed">
                  {item.description}
                </p>

                {item.deliverables && (
                  <ul className="pt-2 space-y-1.5 text-xs text-[#111111]">
                    {item.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#F1E7F9] text-[#5D2E85] flex items-center justify-center text-[9px] font-bold shrink-0">
                          ✓
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.href && (
                <div className="pt-2">
                  <a
                    href={item.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#5D2E85] text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>{item.linkLabel || 'Explore Service'}</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </motion.article>
  )
}
