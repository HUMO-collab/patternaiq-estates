"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "How is this different from Property24?",
    a: "Property24 sells the same lead to every agent in your area. We build a system exclusive to you — one that finds, qualifies, and delivers leads that match your specific area and price bracket. Nobody else gets your leads.",
  },
  {
    q: "What if the leads aren't qualified?",
    a: "We only pass leads who match your defined criteria: location, price bracket, buying or selling timeline, and intent. Anyone who doesn't meet the bar gets filtered out before they reach you.",
  },
  {
    q: "How fast will I see results?",
    a: "Your system goes live within 48 hours of our audit. Most agents receive their first qualified leads within 7–14 days. The system improves in accuracy every month.",
  },
  {
    q: "Do I need to do anything technical?",
    a: "No. You receive leads directly on WhatsApp. We handle the entire system — setup, running, follow-up, and optimisation. You just respond to warm leads and close.",
  },
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen((v) => !v)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 600,
            fontSize: "clamp(15px, 1.8vw, 18px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
            color: open ? "#fff" : "rgba(255,255,255,0.8)",
          }}
        >
          {q}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
            color: open ? "#0066FF" : "rgba(255,255,255,0.4)",
          }}
        >
          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "200px" : "0px",
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <p
          style={{
            paddingTop: "16px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            fontSize: "0.95rem",
            maxWidth: "680px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
      ref={ref}
      style={{
        padding: "120px clamp(20px, 6vw, 80px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
      }}
    >
      <div className="reveal section-label">FAQ</div>
      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: "var(--font-space)",
          fontWeight: 700,
          fontSize: "clamp(32px, 5vw, 56px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "64px",
        }}
      >
        Straight answers.
      </h2>

      <div className="reveal reveal-delay-2">
        {FAQS.map((item, i) => (
          <FAQItem key={item.q} {...item} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
