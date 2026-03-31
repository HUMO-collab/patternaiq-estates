"use client";

const WA_NUMBER = "27000000000"; // TODO: replace with real number

export default function Hero() {
  return (
    <section
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
      {/* Background blue glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
        <div className="section-label" style={{ marginBottom: "32px" }}>
          AI Lead Generation · South Africa
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
          <span style={{ color: "#0066FF" }}>Less&nbsp;Chasing.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.6)",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          We deliver <strong style={{ color: "#fff" }}>10–20 qualified leads per month</strong> to
          estate agents across South Africa — using AI systems that find, filter, and follow up
          so you only speak to people ready to move.
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
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className="btn-outline">
            See How It Works
          </a>
        </div>

        {/* Trust bar */}
        <div
          style={{
            display: "flex",
            gap: "clamp(24px,4vw,48px)",
            marginTop: "64px",
            flexWrap: "wrap",
          }}
        >
          {[
            { stat: "10–20", label: "Qualified leads/month" },
            { stat: "48h",   label: "System live" },
            { stat: "0",     label: "Wasted viewings" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "var(--font-space)",
                  fontWeight: 700,
                  fontSize: "clamp(28px,4vw,40px)",
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {stat}
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: "6px", letterSpacing: "0.04em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "clamp(20px,6vw,80px)",
          right: "clamp(20px,6vw,80px)",
          height: "1px",
          background: "rgba(255,255,255,0.06)",
        }}
      />
    </section>
  );
}
