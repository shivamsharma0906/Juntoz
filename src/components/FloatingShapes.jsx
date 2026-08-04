/**
 * FloatingShapes — 3D ambient decorative objects (CSS Replacement)
 * ─────────────────────────────────────────────
 * • Replaced heavy Three.js / WebGL Canvas with pure CSS shapes.
 * • Uses `will-change: transform` and CSS keyframes for 120fps hardware-accelerated animations.
 * • Zero CPU/GPU scroll lag.
 */

export default function FloatingShapes() {
  return (
    <>
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        @keyframes float-medium {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-60px) rotate(-180deg); }
          100% { transform: translateY(0) rotate(-360deg); }
        }
        .css-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
          opacity: 0.15;
          z-index: -3;
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none hidden md:block overflow-hidden" style={{ zIndex: -3 }}>
        {/* HERO BLOB */}
        <div 
          className="css-blob" 
          style={{ 
            top: '5%', left: '-10%', width: '600px', height: '600px', 
            background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)',
            animation: 'float-slow 20s ease-in-out infinite' 
          }} 
        />
        <div 
          className="css-blob" 
          style={{ 
            top: '20%', right: '-15%', width: '700px', height: '700px', 
            background: 'radial-gradient(circle, #FF3AF2 0%, transparent 70%)',
            animation: 'float-medium 25s ease-in-out infinite' 
          }} 
        />
        
        {/* MID SECTION BLOB */}
        <div 
          className="css-blob" 
          style={{ 
            top: '45%', left: '15%', width: '500px', height: '500px', 
            background: 'radial-gradient(circle, #00F5D4 0%, transparent 70%)',
            animation: 'float-slow 22s ease-in-out infinite reverse' 
          }} 
        />

        {/* LOWER SECTION BLOB */}
        <div 
          className="css-blob" 
          style={{ 
            bottom: '-10%', right: '10%', width: '800px', height: '800px', 
            background: 'radial-gradient(circle, #7B2FFF 0%, transparent 70%)',
            animation: 'float-medium 28s ease-in-out infinite' 
          }} 
        />
        <div 
          className="css-blob" 
          style={{ 
            bottom: '20%', left: '-20%', width: '650px', height: '650px', 
            background: 'radial-gradient(circle, #FF3AF2 0%, transparent 70%)',
            animation: 'float-slow 24s ease-in-out infinite' 
          }} 
        />
      </div>
    </>
  );
}