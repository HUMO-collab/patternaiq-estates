"use client";

import { useEffect, useRef } from "react";

/**
 * Chrome liquid swoosh divider.
 * Parallax: path shifts slightly as user scrolls past it.
 * Matches the silver liquid wave reference image.
 */
export default function Swoosh({ flip = false }: { flip?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onScroll = () => {
      const rect = svg.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (above) to 1 (below) relative position
      const rel = (vh / 2 - (rect.top + rect.height / 2)) / vh;
      const offset = rel * 18;
      svg.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : undefined,
        margin: "-1px 0",
        position: "relative",
        zIndex: 2,
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "90px", transition: "transform 0.1s linear" }}
      >
        <defs>
          <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#1A2540" stopOpacity="0" />
            <stop offset="15%"  stopColor="#4BA8D4" stopOpacity="0.08" />
            <stop offset="35%"  stopColor="#C0CAD6" stopOpacity="0.55" />
            <stop offset="50%"  stopColor="#E8F0F7" stopOpacity="0.85" />
            <stop offset="65%"  stopColor="#C0CAD6" stopOpacity="0.55" />
            <stop offset="85%"  stopColor="#3DBFA0" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1A2540" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chrome-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#1A2540" stopOpacity="0" />
            <stop offset="20%"  stopColor="#3DBFA0" stopOpacity="0.06" />
            <stop offset="45%"  stopColor="#C0CAD6" stopOpacity="0.25" />
            <stop offset="55%"  stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="80%"  stopColor="#4BA8D4" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#1A2540" stopOpacity="0" />
          </linearGradient>
          <filter id="blur-soft">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* Shadow/depth layer */}
        <path
          className="swoosh-path"
          d="M0,55 C180,90 360,20 540,48 C720,76 900,18 1080,44 C1260,70 1380,35 1440,45 L1440,90 L0,90 Z"
          fill="rgba(11,17,32,0.95)"
          style={{ animationDelay: "0s" }}
        />

        {/* Main chrome wave — thick */}
        <path
          className="swoosh-path"
          d="M0,58 C200,92 380,18 560,46 C740,74 920,16 1100,42 C1280,68 1380,32 1440,44"
          fill="none"
          stroke="url(#chrome-grad)"
          strokeWidth="3.5"
          filter="url(#blur-soft)"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Secondary highlight — thin, offset */}
        <path
          className="swoosh-path"
          d="M0,62 C220,95 400,22 580,50 C760,78 940,20 1120,46 C1300,72 1390,38 1440,48"
          fill="none"
          stroke="url(#chrome-grad-2)"
          strokeWidth="1.5"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Specular highlight — bright center flash */}
        <path
          className="swoosh-path"
          d="M380,42 C480,22 600,60 720,46 C840,32 960,54 1060,40"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="0.8"
          strokeLinecap="round"
          style={{ animationDelay: "1.2s" }}
        />
      </svg>
    </div>
  );
}
