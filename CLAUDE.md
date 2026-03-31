@AGENTS.md

# PatterNAIQ — Estate Agents Landing Page

## Business Context
PatterNAIQ is the founder's own B2B AI company (not a client).
Target: Estate agents in South Africa.
Offer: AI lead generation delivering 10–20 qualified buyer/seller leads per month directly to WhatsApp. Exclusive per agent — no shared leads.
Scale path: SMB lead gen → dashboard upsell → voice AI agents → white-label SaaS.

## Repo & Deploy
GitHub: `HUMO-collab/patternaiq-estates` (branch: `master`)
Deploy: Vercel auto-deploys on push. Live: `patternaiq-estates.vercel.app`

## Tech Stack
- Next.js 16.2.1 (App Router) — READ `node_modules/next/dist/docs/` before touching routing or data fetching
- React 19.2.4 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`) — imported but rarely used directly in components
- Fonts: `Inter` (body) + `Space_Grotesk` (headings) via `next/font/google` — CSS vars `--font-inter` / `--font-space`
- No external UI library — inline styles + custom CSS classes only
- No backend — pure static marketing page

## Brand Tokens (app/globals.css :root)
```
--bg:      #0B1120   deep navy background
--bg-2:    #0F1628
--blue:    #4BA8D4   logo left node — primary accent
--teal:    #3DBFA0   logo bottom-left node
--orange:  #E8803A   logo top-right + right nodes
--chrome:  #C0CAD6   logo chrome silver text
--border:  rgba(192,202,214,0.1)
```

## Logo
Real PNG at `public/logo.png`. Use `next/image` with `mixBlendMode: "screen"` — removes the dark background seamlessly against the navy page.
Do NOT rebuild the logo as SVG. The PNG is the source of truth.
Logo visual: 3 crossing chrome curves (neural knot motif), 6 animated nodes (blue, teal, orange), chrome wordmark, tagline "WHERE DATA THINKS FOR YOU".

## File Structure
```
app/
  layout.tsx           fonts, global metadata (title/OG)
  page.tsx             section order — Swoosh between every section
  globals.css          all CSS: tokens, keyframes, .reveal, .btn-primary, .glass-card, .section-label
  components/
    Navbar.tsx         fixed nav — logo PNG + "Get Started" WA CTA
    Hero.tsx           full-height — NeuralBg animated SVG bg, parallax, stats bar
    Swoosh.tsx         chrome wave divider — 3D perspective scroll effect
    Pain.tsx           3-card pain points grid
    Solution.tsx       2-col: headline + ROI callout / 4 feature cards
    HowItWorks.tsx     4-step grid (01 Audit → 02 Build → 03 Leads → 04 Scale)
    Offer.tsx          2-col: copy + "What's included" glass card
    FAQ.tsx            accordion, 4 FAQs, first item open by default
    FinalCTA.tsx       final CTA + footer (MiniMark SVG, chrome wordmark, tagline)
public/
  logo.png             actual PatterNAIQ PNG
```

## Page Layout (app/page.tsx)
```
Navbar
Hero → Swoosh → Pain → Swoosh flip → Solution → Swoosh →
HowItWorks → Swoosh flip → Offer → Swoosh → FAQ → Swoosh flip → FinalCTA
```
`flip` prop on Swoosh = `scaleY(-1)` for alternating wave direction.

## Key CSS Patterns

**Scroll entrance** — add `className="reveal"` + optional `reveal-delay-1` to `reveal-delay-4`.
Each section uses a `ref` + `IntersectionObserver` that adds `.visible`. Defined in globals.css.

**Gradient text:**
```tsx
style={{
  background: "linear-gradient(135deg, #4BA8D4 0%, #3DBFA0 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}
```

**Glass card:** `className="glass-card"` — semi-transparent dark panel, hover blue-border glow.
**Section label:** `className="reveal section-label"` — small ALL-CAPS blue label with line prefix.

## Swoosh 3D Scroll Effect
Each Swoosh runs a scroll listener computing position relative to viewport centre (rel: -1 to +1):
```
perspective(700px) rotateX(rel * -18deg) translateY(rel * 24px) scaleX(1 + |rel| * 0.03)
```
`willChange: "transform"` + `transformOrigin: "50% 50%"` for GPU-smooth rendering.
CSS `swoosh-drift` keyframe adds a 6s horizontal float animation on the wave paths.

## WhatsApp CTAs
Format: `https://wa.me/${WA_NUMBER}?text={url-encoded message}`
Current placeholder: `WA_NUMBER = "27000000000"`

**Replace in ALL 4 files when real number is ready:**
- `app/components/Navbar.tsx`
- `app/components/Hero.tsx`
- `app/components/Offer.tsx`
- `app/components/FinalCTA.tsx`

Real format: `27` + number without leading zero (e.g. `27821234567` for +27 82 123 4567)

## Pending TODO
1. Replace WA_NUMBER placeholder with real WhatsApp Business number
2. Add `og:image` to `layout.tsx` metadata once a preview image exists
3. Connect custom domain when ready
4. Add analytics (Vercel Analytics or Plausible) when tracking needed
5. Testimonials section — add once first client results are in

## Hard Rules
- Read `node_modules/next/dist/docs/` before any routing or data fetching changes
- Styling only via inline styles or globals.css — no Tailwind utility classes inside components
- Never add a backend. Static only.
- Never break the `.reveal` / IntersectionObserver entrance pattern
- NEVER write CSS transform via JSX `style` prop on an element that a scroll listener also transforms — pick one channel only
