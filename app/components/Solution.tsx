"use client";

import { useEffect, useRef } from "react";

const POINTS = [
  {
    color: "#4BA8D4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8.5" stroke="#4BA8D4" strokeWidth="1.4"/>
        <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#4BA8D4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Only buyers and sellers actively looking in your area and price bracket",
  },
  {
    color: "#3DBFA0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="15" height="15" rx="3" stroke="#3DBFA0" strokeWidth="1.4"/>
        <path d="M6.5 10h7M10 6.5v7" stroke="#3DBFA0" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    text: "AI filters out time-wasters before they ever reach you",
  },
  {
    color: "#4BA8D4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2.5 10l4.5 4.5 10-10" stroke="#4BA8D4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Automated follow-up keeps leads warm while you're showing properties",
  },
  {
    color: "#E8803A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="#E8803A" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="3" stroke="#E8803A" strokeWidth="1.4"/>
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
            color: "#fff",
          }}
        >
          10–20 qualified leads.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Every month.
          </span>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{ color: "rgba(192,202,214,0.55)", lineHeight: 1.75, fontSize: "1rem", maxWidth: "440px" }}
        >
          We build an AI system exclusive to you — not shared with competing agents. It finds,
          qualifies, and delivers people who are ready to buy or sell, in your area, at your
          price bracket.
        </p>

        {/* ROI callout */}
        <div
          className="reveal reveal-delay-3"
          style={{
            marginTop: "48px",
            padding: "32px",
            borderLeft: "2px solid #3DBFA0",
            background: "rgba(61,191,160,0.05)",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space)",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 50px)",
              letterSpacing: "-0.03em",
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            1 sale pays for
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              6+ months.
            </span>
          </div>
          <p style={{ color: "rgba(192,202,214,0.45)", marginTop: "12px", fontSize: "0.875rem" }}>
            At an average commission of R40,000 — the ROI is obvious.
          </p>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {POINTS.map(({ icon, text, color }, i) => (
          <div
            key={i}
            className={`glass-card reveal reveal-delay-${i + 1}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              padding: "22px 24px",
              borderLeft: `2px solid ${color}22`,
            }}
          >
            <div style={{ flexShrink: 0, marginTop: "1px" }}>{icon}</div>
            <p style={{ color: "rgba(192,202,214,0.75)", lineHeight: 1.6, fontSize: "0.93rem" }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
