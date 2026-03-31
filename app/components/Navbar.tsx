"use client";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

/* ── Inline SVG recreation of the PatterNAIQ neural mark ── */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nm-chrome" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C0CAD6" />
          <stop offset="50%"  stopColor="#E8F0F7" />
          <stop offset="100%" stopColor="#8A9BAD" />
        </linearGradient>
        <filter id="nm-glow-b">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="nm-glow-t">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="nm-glow-o">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Crossing curves (neural connections) ── */}
      {/* Top-left arc to bottom-right */}
      <path
        d="M18,38 C35,28 55,68 82,58"
        stroke="url(#nm-chrome)" strokeWidth="2.8" strokeLinecap="round" fill="none"
        opacity="0.75"
      />
      {/* Bottom-left arc to top-right */}
      <path
        d="M18,62 C35,72 55,32 82,42"
        stroke="url(#nm-chrome)" strokeWidth="2.8" strokeLinecap="round" fill="none"
        opacity="0.75"
      />
      {/* Horizontal spine */}
      <path
        d="M18,50 C40,44 60,56 82,50"
        stroke="url(#nm-chrome)" strokeWidth="1.6" strokeLinecap="round" fill="none"
        opacity="0.45"
      />

      {/* ── Nodes ── */}
      {/* Left blue node (large) */}
      <circle cx="18" cy="50" r="6.5" fill="#4BA8D4" filter="url(#nm-glow-b)" opacity="0.95">
        <animate attributeName="r" values="6.5;8;6.5" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Bottom-left teal node */}
      <circle cx="30" cy="68" r="5.5" fill="#3DBFA0" filter="url(#nm-glow-t)" opacity="0.9">
        <animate attributeName="r" values="5.5;7;5.5" dur="3.8s" begin="0.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3.8s" begin="0.6s" repeatCount="indefinite" />
      </circle>

      {/* Top-right orange node */}
      <circle cx="72" cy="32" r="5" fill="#E8803A" filter="url(#nm-glow-o)" opacity="0.9">
        <animate attributeName="r" values="5;6.5;5" dur="2.9s" begin="1.1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;1;0.9" dur="2.9s" begin="1.1s" repeatCount="indefinite" />
      </circle>

      {/* Right small orange node */}
      <circle cx="82" cy="50" r="3.5" fill="#E8803A" opacity="0.7">
        <animate attributeName="r" values="3.5;4.5;3.5" dur="3.4s" begin="0.3s" repeatCount="indefinite" />
      </circle>

      {/* Centre small chrome dots */}
      <circle cx="50" cy="44" r="2.5" fill="#C0CAD6" opacity="0.5" />
      <circle cx="50" cy="56" r="2"   fill="#C0CAD6" opacity="0.4" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px clamp(20px, 6vw, 80px)",
        borderBottom: "1px solid rgba(192,202,214,0.07)",
        background: "rgba(11,17,32,0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Logo lockup */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <LogoMark size={38} />
        <span
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "clamp(15px, 2vw, 19px)",
            letterSpacing: "-0.025em",
            background: "linear-gradient(135deg, #C0CAD6 0%, #E8F0F7 45%, #8A9BAD 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          PatterNAIQ
        </span>
      </div>

      <a
        href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20an%20estate%20agent%20interested%20in%20qualified%20leads`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ padding: "10px 22px", fontSize: "0.875rem", animation: "none" }}
      >
        Get Started
      </a>
    </nav>
  );
}
