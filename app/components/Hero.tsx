"use client";

import { useEffect, useRef } from "react";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

/* ── Animated neural network background — matches logo motif ── */
function NeuralBg() {
  // Node positions: mirrors the logo layout (left blue, bottom-left teal, top-right orange, etc.)
  const nodes = [
    { cx: "12%",  cy: "52%", r: 5,   color: "#4BA8D4", dur: "3.2s",  delay: "0s",    glow: "rgba(75,168,212,0.5)"  },
    { cx: "25%",  cy: "70%", r: 4,   color: "#3DBFA0", dur: "4s",    delay: "0.8s",  glow: "rgba(61,191,160,0.45)" },
    { cx: "38%",  cy: "35%", r: 3,   color: "#C0CAD6", dur: "3.6s",  delay: "0.4s",  glow: "rgba(192,202,214,0.3)" },
    { cx: "52%",  cy: "62%", r: 3.5, color: "#4BA8D4", dur: "2.8s",  delay: "1.2s",  glow: "rgba(75,168,212,0.4)"  },
    { cx: "65%",  cy: "28%", r: 5,   color: "#E8803A", dur: "3.5s",  delay: "0.6s",  glow: "rgba(232,128,58,0.5)"  },
    { cx: "78%",  cy: "55%", r: 3,   color: "#C0CAD6", dur: "4.2s",  delay: "1.4s",  glow: "rgba(192,202,214,0.3)" },
    { cx: "88%",  cy: "40%", r: 4,   color: "#E8803A", dur: "3s",    delay: "0.2s",  glow: "rgba(232,128,58,0.4)"  },
    { cx: "20%",  cy: "30%", r: 2.5, color: "#3DBFA0", dur: "5s",    delay: "1s",    glow: "rgba(61,191,160,0.35)" },
    { cx: "72%",  cy: "75%", r: 3,   color: "#4BA8D4", dur: "3.8s",  delay: "0.5s",  glow: "rgba(75,168,212,0.35)" },
    { cx: "45%",  cy: "82%", r: 2,   color: "#C0CAD6", dur: "4.5s",  delay: "1.8s",  glow: "rgba(192,202,214,0.25)"},
  ];

  // Edges: curved paths connecting nodes — matching the crossing-curves motif in the logo
  const edges = [
    "M 12%,52% C 25%,38% 38%,62% 52%,62%",
    "M 12%,52% C 20%,60% 25%,68% 38%,35%",
    "M 25%,70% C 35%,55% 45%,60% 52%,62%",
    "M 38%,35% C 50%,28% 60%,40% 65%,28%",
    "M 52%,62% C 62%,52% 72%,58% 78%,55%",
    "M 65%,28% C 72%,38% 78%,48% 88%,40%",
    "M 78%,55% C 82%,48% 85%,44% 88%,40%",
    "M 20%,30% C 30%,32% 35%,34% 38%,35%",
    "M 52%,62% C 60%,70% 66%,74% 72%,75%",
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.38,
        pointerEvents: "none",
      }}
    >
      <defs>
        {nodes.map((n, i) => (
          <filter key={i} id={`glow-${i}`}>
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
        <linearGradient id="edge-grad-b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#4BA8D4" stopOpacity="0" />
          <stop offset="50%"  stopColor="#4BA8D4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4BA8D4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="edge-grad-t" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#3DBFA0" stopOpacity="0" />
          <stop offset="50%"  stopColor="#3DBFA0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3DBFA0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Edges */}
      {[
        { d: "M12,52 C25,38 38,62 52,62", grad: "edge-grad-b", delay: "0s" },
        { d: "M12,52 C20,60 25,68 38,35", grad: "edge-grad-t", delay: "0.5s" },
        { d: "M25,70 C35,55 45,60 52,62", grad: "edge-grad-b", delay: "1s" },
        { d: "M38,35 C50,28 60,40 65,28", grad: "edge-grad-t", delay: "0.3s" },
        { d: "M52,62 C62,52 72,58 78,55", grad: "edge-grad-b", delay: "0.7s" },
        { d: "M65,28 C72,38 78,48 88,40", grad: "edge-grad-t", delay: "1.3s" },
        { d: "M78,55 C82,48 85,44 88,40", grad: "edge-grad-b", delay: "0.2s" },
        { d: "M20,30 C30,32 35,34 38,35", grad: "edge-grad-t", delay: "0.9s" },
        { d: "M52,62 C60,70 66,74 72,75", grad: "edge-grad-b", delay: "1.6s" },
      ].map((e, i) => (
        <path
          key={i}
          d={e.d}
          fill="none"
          stroke={`url(#${e.grad})`}
          strokeWidth="0.6"
          strokeDasharray="200"
          strokeDashoffset="200"
          style={{ animation: `edge-flow 4s ease-in-out ${e.delay} infinite` }}
        />
      ))}

      {/* Nodes */}
      {[
        { cx: 12, cy: 52, r: 4,   color: "#4BA8D4", dur: "3.2s", delay: "0s"   },
        { cx: 25, cy: 70, r: 3.5, color: "#3DBFA0", dur: "4s",   delay: "0.8s" },
        { cx: 38, cy: 35, r: 2.5, color: "#C0CAD6", dur: "3.6s", delay: "0.4s" },
        { cx: 52, cy: 62, r: 3,   color: "#4BA8D4", dur: "2.8s", delay: "1.2s" },
        { cx: 65, cy: 28, r: 4,   color: "#E8803A", dur: "3.5s", delay: "0.6s" },
        { cx: 78, cy: 55, r: 2.5, color: "#C0CAD6", dur: "4.2s", delay: "1.4s" },
        { cx: 88, cy: 40, r: 3.5, color: "#E8803A", dur: "3s",   delay: "0.2s" },
        { cx: 20, cy: 30, r: 2,   color: "#3DBFA0", dur: "5s",   delay: "1s"   },
        { cx: 72, cy: 75, r: 2.5, color: "#4BA8D4", dur: "3.8s", delay: "0.5s" },
        { cx: 45, cy: 82, r: 1.8, color: "#C0CAD6", dur: "4.5s", delay: "1.8s" },
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} fill={n.color} filter={`url(#glow-${i})`}>
          <animate attributeName="r" values={`${n.r};${n.r * 1.5};${n.r}`} dur={n.dur} begin={n.delay} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur={n.dur} begin={n.delay} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax on hero bg
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY * 0.15;
      const svg = ref.current.querySelector(".neural-bg") as HTMLElement;
      if (svg) svg.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "140px clamp(20px, 6vw, 80px) 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Neural bg */}
      <div
        className="neural-bg"
        style={{ position: "absolute", inset: 0, zIndex: 0, willChange: "transform" }}
      >
        <NeuralBg />
      </div>

      {/* Deep navy radial overlay to keep text readable */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 30% 50%, rgba(11,17,32,0.05) 0%, rgba(11,17,32,0.7) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Blue node glow — matches logo left blue node */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(75,168,212,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "940px" }}>
        <div className="section-label" style={{ marginBottom: "32px" }}>
          AI Lead Generation · Estate Agents · South Africa
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space)",
            fontWeight: 700,
            fontSize: "clamp(44px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "32px",
          }}
        >
          More Qualified
          <br />
          Buyers.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Less&nbsp;Chasing.
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            color: "rgba(192,202,214,0.7)",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          We deliver{" "}
          <strong style={{ color: "#C0CAD6" }}>10–20 qualified leads per month</strong> to estate
          agents across South Africa — using AI systems that find, filter, and follow up so
          you only speak to people ready to move.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20an%20estate%20agent%20and%20I%27d%20like%20to%20get%20more%20qualified%20leads`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get My First Leads
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how-it-works" className="btn-outline">
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "clamp(24px, 4vw, 56px)",
            marginTop: "72px",
            flexWrap: "wrap",
          }}
        >
          {[
            { stat: "10–20", label: "Qualified leads/month", color: "#4BA8D4" },
            { stat: "48h",   label: "System live",           color: "#3DBFA0" },
            { stat: "0",     label: "Wasted viewings",       color: "#E8803A" },
          ].map(({ stat, label, color }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "var(--font-space)",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  letterSpacing: "-0.03em",
                  color,
                  lineHeight: 1,
                }}
              >
                {stat}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(192,202,214,0.45)",
                  marginTop: "6px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "clamp(20px,6vw,80px)",
          right: "clamp(20px,6vw,80px)",
          height: "1px",
          background: "rgba(192,202,214,0.07)",
        }}
      />
    </section>
  );
}
