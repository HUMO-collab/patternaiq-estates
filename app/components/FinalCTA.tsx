"use client";

import { useEffect, useRef } from "react";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

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
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,102,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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
          }}
        >
          Stop chasing leads.
          <br />
          <span style={{ color: "#0066FF" }}>Start closing them.</span>
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            color: "rgba(255,255,255,0.5)",
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
            style={{ fontSize: "1.1rem", padding: "20px 40px" }}
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
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space)",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Pattern<span style={{ color: "#0066FF" }}>NAIQ</span>
          </span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} PatterNAIQ. South Africa.
          </span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem" }}>
            Where data thinks for you.
          </span>
        </div>
      </div>
    </section>
  );
}
