export default function BalloonHeading({ src, alt, className = '' }) {
  const webpSrc = src.endsWith('.png') ? src.replace(/\.png$/, '.webp') : src;
  return (
    <div className={`relative inline-flex items-center justify-center aspect-[950/243] w-full ${className}`}>
      <img 
        src={webpSrc} 
        alt={alt} 
        width={950}
        height={243}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain object-center select-none pointer-events-none" 
      />
    </div>
  );
}
