import React from 'react';

export default function BalloonHeading({ src, alt, className = '' }) {
  return (
    <div className={`relative inline-flex items-center justify-center aspect-[950/243] w-full ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain object-center select-none pointer-events-none" 
      />
    </div>
  );
}
