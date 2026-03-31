"use client";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

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
        padding: "20px clamp(20px, 6vw, 80px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(8,8,8,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-space)",
          fontWeight: 700,
          fontSize: "clamp(16px,2vw,20px)",
          letterSpacing: "-0.02em",
          color: "#fff",
        }}
      >
        Pattern<span style={{ color: "#0066FF" }}>NAIQ</span>
      </span>

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
