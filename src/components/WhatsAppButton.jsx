/**
 * WhatsAppButton
 * Floating fixed button — bottom-right corner.
 * Pure CSS animations, no external libraries.
 * GPU-friendly: only uses transform + opacity.
 */
export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          will-change: transform;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37,211,102,0.6);
        }
        .wa-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-pulse 2.2s ease-out infinite;
          z-index: -1;
        }
        .wa-btn svg {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
        }
      `}</style>

      <a
        href="https://wa.me/919004001800"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Official WhatsApp logo path */}
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.002 3C8.82 3 3 8.82 3 16.002c0 2.29.61 4.53 1.77 6.49L3 29l6.7-1.74a13.02 13.02 0 006.302 1.624c7.18 0 13.002-5.82 13.002-13.002S23.182 3 16.002 3zM16.002 26.46a10.79 10.79 0 01-5.5-1.51l-.39-.24-4.02 1.05 1.07-3.9-.25-.4a10.81 10.81 0 01-1.66-5.76c0-5.96 4.84-10.8 10.8-10.8s10.8 4.84 10.8 10.8-4.84 10.77-10.85 10.77z"
            fill="white"
          />
          <path
            d="M21.84 18.58c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
}
