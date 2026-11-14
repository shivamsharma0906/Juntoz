import React from 'react';

export interface RollingTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

/**
 * Lusion-Style Kinetic Rolling-Letter Typography.
 * On parent hover (with 'group' on parent link/button), each letter rolls vertically,
 * revealing an identical duplicate letter sliding up from below with a staggered delay.
 */
export function RollingText({ text, className = '', stagger = 0.015 }: RollingTextProps) {
  const characters = text.split('');

  return (
    <span className={`inline-flex items-center overflow-hidden leading-none select-none ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {characters.map((char, i) => (
          <span key={i} className="relative inline-block overflow-hidden">
            {/* Primary character sliding up and out */}
            <span
              className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * stagger}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
            {/* Clone character sliding up from below */}
            <span
              className="absolute top-0 left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 text-inherit"
              style={{ transitionDelay: `${i * stagger}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

export default RollingText;
