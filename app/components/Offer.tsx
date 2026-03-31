"use client";

import { useEffect, useRef } from "react";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

const INCLUDES = [
  "AI lead generation system (exclusive to you)",
  "10–20 qualified buyer & seller leads per month",
  "Automated WhatsApp delivery — no new tools",
  "Lead pre-qualification before they reach you",
  "Automated follow-up sequences",
  "Monthly performance review + optimisation",
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
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "64px",
        alignItems: "center",
      }}
    >
      {/* Left */}
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
          }}
        >
          Everything you need.{" "}
          <span style={{ color: "#0066FF" }}>Nothing you don&apos;t.</span>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            fontSize: "1rem",
            maxWidth: "440px",
            marginBottom: "40px",
          }}
        >
          One flat engagement. We build it, run it, and deliver results. You focus on
          closing — we handle everything before the conversation starts.
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

      {/* Right — includes card */}
      <div
        className="glass-card reveal reveal-delay-2"
        style={{ padding: "48px 40px" }}
      >
        <div
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "1.1rem",
            marginBottom: "32px",
            letterSpacing: "-0.01em",
          }}
        >
          What&apos;s included
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {INCLUDES.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <circle cx="9" cy="9" r="7.5" stroke="#0066FF" strokeWidth="1.2"/>
                <path d="M6 9l2.5 2.5 4-4" stroke="#0066FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "36px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
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
