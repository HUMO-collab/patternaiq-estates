"use client";

import { useEffect, useRef } from "react";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

const INCLUDES = [
  { text: "AI lead generation system (exclusive to you)",      color: "#4BA8D4" },
  { text: "10–20 qualified buyer & seller leads per month",    color: "#3DBFA0" },
  { text: "Automated WhatsApp delivery — no new tools",        color: "#4BA8D4" },
  { text: "Lead pre-qualification before they reach you",      color: "#3DBFA0" },
  { text: "Automated follow-up sequences",                     color: "#E8803A" },
  { text: "Monthly performance review + optimisation",         color: "#4BA8D4" },
];

export default function Offer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px clamp(20px, 6vw, 80px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "64px",
        alignItems: "center",
      }}
    >
      <div>
        <div className="reveal section-label">The Offer</div>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 56px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          Everything you need.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nothing you don&apos;t.
          </span>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{ color: "rgba(192,202,214,0.5)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "440px", marginBottom: "40px" }}
        >
          One flat engagement. We build it, run it, and deliver results. You focus on closing —
          we handle everything before the conversation starts.
        </p>
        <div className="reveal reveal-delay-3">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20discuss%20the%20lead%20generation%20offer%20for%20estate%20agents`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="glass-card reveal reveal-delay-2" style={{ padding: "48px 40px" }}>
        <div
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "1rem",
            marginBottom: "32px",
            letterSpacing: "-0.01em",
            color: "#C0CAD6",
          }}
        >
          What&apos;s included
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {INCLUDES.map(({ text, color }) => (
            <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1.2"/>
                <path d="M6 9l2.5 2.5 4-4" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ color: "rgba(192,202,214,0.75)", fontSize: "0.93rem", lineHeight: 1.55 }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "36px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(192,202,214,0.07)",
            fontSize: "0.78rem",
            color: "rgba(192,202,214,0.3)",
            lineHeight: 1.6,
          }}
        >
          Pricing discussed on your free audit call — based on your area and target bracket.
          No lock-in contracts.
        </div>
      </div>
    </section>
  );
}
