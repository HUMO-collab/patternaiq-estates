"use client";

import { useEffect, useRef } from "react";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

/* Small neural mark reused in footer — matches logo motif */
function MiniMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="fc-chrome" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#C0CAD6" />
          <stop offset="100%" stopColor="#8A9BAD" />
        </linearGradient>
      </defs>
      <path d="M18,52 C35,38 55,68 82,58" stroke="url(#fc-chrome)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M18,62 C35,72 55,32 82,42" stroke="url(#fc-chrome)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"/>
      <circle cx="18" cy="57" r="5.5" fill="#4BA8D4" opacity="0.9"/>
      <circle cx="30" cy="68" r="4"   fill="#3DBFA0" opacity="0.85"/>
      <circle cx="72" cy="32" r="4.5" fill="#E8803A" opacity="0.85"/>
      <circle cx="82" cy="50" r="3"   fill="#E8803A" opacity="0.65"/>
    </svg>
  );
}

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px clamp(20px, 6vw, 80px) 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Neural glow — teal + blue matching logo nodes */}
      <div aria-hidden="true" style={{ position: "absolute", top: "30%", left: "20%", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(75,168,212,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "20%", right: "15%", width: "350px", height: "250px", background: "radial-gradient(ellipse, rgba(61,191,160,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "30%", right: "25%", width: "250px", height: "200px", background: "radial-gradient(ellipse, rgba(232,128,58,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal section-label" style={{ justifyContent: "center" }}>
          Ready to start
        </div>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "clamp(36px, 7vw, 80px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          Stop chasing leads.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Start closing them.
          </span>
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            color: "rgba(192,202,214,0.5)",
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.7,
            maxWidth: "500px",
            margin: "0 auto 48px",
          }}
        >
          Book your free audit today. We analyse your area, show you what&apos;s possible,
          and you decide — zero commitment.
        </p>

        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px" }}
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20an%20estate%20agent%20and%20I%27d%20like%20a%20free%20audit`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1.05rem", padding: "18px 36px" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
              <path d="M10 0C4.477 0 0 4.477 0 10c0 1.763.461 3.418 1.268 4.862L0 20l5.293-1.237A9.953 9.953 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm0 18.182a8.182 8.182 0 110-16.364 8.182 8.182 0 010 16.364z" fill="currentColor" opacity=".3"/>
            </svg>
            Book Free Audit on WhatsApp
          </a>
        </div>

        {/* Footer */}
        <div
          className="reveal reveal-delay-4"
          style={{
            marginTop: "80px",
            paddingTop: "36px",
            borderTop: "1px solid rgba(192,202,214,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MiniMark />
            <span
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #C0CAD6 0%, #E8F0F7 50%, #8A9BAD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              PatterNAIQ
            </span>
          </div>
          <span style={{ color: "rgba(192,202,214,0.22)", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} PatterNAIQ. South Africa.
          </span>
          <span style={{ color: "rgba(192,202,214,0.22)", fontSize: "0.78rem", letterSpacing: "0.06em" }}>
            WHERE DATA THINKS FOR YOU
          </span>
        </div>
      </div>
    </section>
  );
}
