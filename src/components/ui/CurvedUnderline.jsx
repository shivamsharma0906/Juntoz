import { motion } from 'motion/react';

/**
 * Animated curved SVG underline in Juntoz signature purple (#5D2E85),
 * matching the exact editorial headline design from ServicesGrid and CaseStudiesShowcase.
 */
export function CurvedUnderline({ className = "text-[#5D2E85]" }) {
  return (
    <motion.svg
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none ${className}`}
      height="12"
      viewBox="0 0 260 14"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 9 C 60 3, 170 12, 258 4"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

/**
 * HeadlineHighlight wraps a focal word/phrase in brand purple (#5D2E85)
 * and places the animated curved SVG underline beneath it.
 */
export function HeadlineHighlight({ children, className = "", underlineClass = "text-[#5D2E85]" }) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="text-[#5D2E85]">{children}</span>
      <CurvedUnderline className={underlineClass} />
    </span>
  );
}

export default CurvedUnderline;

