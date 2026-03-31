"use client";

import Image from "next/image";

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
        padding: "10px clamp(20px, 6vw, 80px)",
        borderBottom: "1px solid rgba(192,202,214,0.07)",
        background: "rgba(11,17,32,0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Logo — actual PNG, screen blend removes the dark bg seamlessly */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.png"
          alt="PatterNAIQ"
          width={148}
          height={74}
          priority
          style={{
            objectFit: "contain",
            mixBlendMode: "screen",
            filter: "brightness(1.08) contrast(1.05)",
          }}
        />
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
