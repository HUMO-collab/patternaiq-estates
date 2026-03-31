"use client";

import { useEffect, useRef } from "react";

const PAINS = [
  {
    number: "01",
    headline: "You're paying for leads that go nowhere",
    body: "Property24 sells the same lead to 10 agents. You get volume — not quality. Unqualified buyers waste your time and your petrol.",
  },
  {
    number: "02",
    headline: "Follow-up falls through the cracks",
    body: "Leads go cold while you're showing properties. No system means no follow-through — and that's commission walking out the door.",
  },
  {
    number: "03",
    headline: "You're doing marketing instead of closing",
    body: "Every hour spent on Facebook ads or WhatsApp broadcasts is an hour you're not in front of a buyer ready to sign.",
  },
];

export default function Pain() {
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
        padding: "120px clamp(20px, 6vw, 80px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="reveal section-label">The Problem</div>

      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: "var(--font-space)",
          fontWeight: 700,
          fontSize: "clamp(32px, 5vw, 56px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "600px",
          marginBottom: "72px",
        }}
      >
        Estate agents deserve better than cold leads and empty viewings.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {PAINS.map(({ number, headline, body }, i) => (
          <div
            key={number}
            className={`glass-card reveal reveal-delay-${i + 1}`}
            style={{ padding: "40px 32px" }}
          >
            <div
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                color: "rgba(0,102,255,0.6)",
                marginBottom: "20px",
              }}
            >
              {number}
            </div>
            <div className="blue-line" />
            <h3
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 600,
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.3,
                marginBottom: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              {headline}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "0.95rem" }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
