"use client";

import { useEffect, useRef } from "react";

const POINTS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="#0066FF" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Only buyers and sellers actively looking in your area and price bracket",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="#0066FF" strokeWidth="1.5"/>
        <path d="M7 11h8M11 7v8" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "AI filters out time-wasters before they ever reach you",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 11l5 5 11-11" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Automated follow-up keeps leads warm while you're showing properties",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3" stroke="#0066FF" strokeWidth="1.5"/>
      </svg>
    ),
    text: "Delivered straight to your WhatsApp — no new tools to learn",
  },
];

export default function Solution() {
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
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "80px",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div>
        <div className="reveal section-label">The Solution</div>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 56px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          10–20 qualified leads.{" "}
          <span style={{ color: "#0066FF" }}>Every month.</span>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "440px" }}
        >
          We build an AI system exclusive to you — not shared with competing agents.
          It finds, qualifies, and delivers people who are ready to buy or sell,
          in your area, at your price bracket.
        </p>

        {/* Big number callout */}
        <div
          className="reveal reveal-delay-3"
          style={{
            marginTop: "48px",
            padding: "32px",
            borderLeft: "2px solid #0066FF",
            background: "rgba(0,102,255,0.05)",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space)",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.03em",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            1 sale pays for
            <br />
            <span style={{ color: "#0066FF" }}>6+ months.</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.45)", marginTop: "12px", fontSize: "0.875rem" }}>
            At an average commission of R40,000 — the ROI is obvious.
          </p>
        </div>
      </div>

      {/* Right — feature list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {POINTS.map(({ icon, text }, i) => (
          <div
            key={i}
            className={`glass-card reveal reveal-delay-${i + 1}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              padding: "24px",
            }}
          >
            <div style={{ flexShrink: 0, marginTop: "2px" }}>{icon}</div>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
