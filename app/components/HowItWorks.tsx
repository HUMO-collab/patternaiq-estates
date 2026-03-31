"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  { step: "01", title: "Free Audit",        body: "We analyse your area, target price bracket, and current lead situation. No commitment — we show you exactly what's possible.", time: "Day 1",   color: "#4BA8D4" },
  { step: "02", title: "We Build",          body: "Your AI lead pipeline is live within 48 hours. Exclusive to you — no other agent in your area gets the same system.",         time: "Day 2–3", color: "#3DBFA0" },
  { step: "03", title: "Leads Arrive",      body: "Qualified buyer and seller leads delivered directly to your WhatsApp. Pre-filtered, pre-engaged, ready for you to close.",    time: "Week 1–2", color: "#4BA8D4" },
  { step: "04", title: "You Scale",         body: "As results come in, we optimise. You close more deals, we improve targeting. The system gets stronger every month.",           time: "Month 1+", color: "#E8803A" },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{ padding: "120px clamp(20px, 6vw, 80px)" }}
    >
      <div className="reveal section-label">How It Works</div>
      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: "var(--font-space)",
          fontWeight: 700,
          fontSize: "clamp(32px, 5vw, 56px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "560px",
          marginBottom: "80px",
          color: "#fff",
        }}
      >
        Live system in{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          48 hours.
        </span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2px",
          background: "rgba(192,202,214,0.06)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {STEPS.map(({ step, title, body, time, color }, i) => (
          <div
            key={step}
            className={`reveal reveal-delay-${i + 1}`}
            style={{
              background: "#0B1120",
              padding: "40px 32px",
              position: "relative",
              borderTop: `2px solid ${color}33`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 700,
                fontSize: "3rem",
                letterSpacing: "-0.04em",
                color: `${color}1A`,
                lineHeight: 1,
                marginBottom: "24px",
                userSelect: "none",
              }}
            >
              {step}
            </div>

            <div
              style={{
                display: "inline-block",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color,
                background: `${color}18`,
                padding: "4px 10px",
                borderRadius: "100px",
                marginBottom: "16px",
              }}
            >
              {time}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 600,
                fontSize: "1.15rem",
                letterSpacing: "-0.01em",
                marginBottom: "12px",
                color: "#fff",
              }}
            >
              {title}
            </h3>

            <p style={{ color: "rgba(192,202,214,0.5)", lineHeight: 1.7, fontSize: "0.88rem" }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
