# Design notes

Visual system for the portfolio. The goal was to move away from the generic
dark‑gradient / one‑blue‑accent template look toward something that reads as a
**realtime‑systems engineer's** site: precise, calm, control‑room, senior.

The organising idea is **railway signalling** — a genuine motif for Farid's rail
and transit work. Colour, the section‑header device, and the hero diagram all
lean on it without being literal or kitsch.

---

## Colour

Single dark theme (no light mode — the old `:root` light/dark vars were unused).

### Neutral ramp — `ink`

A cool, slightly desaturated blue‑grey. Defined in `tailwind.config.ts` as
`ink.50 … ink.950`.

| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#090d12` | page background |
| `ink-900` | `#0d131a` | raised section panels, cards |
| `ink-850` | `#121a23` | inputs, nested surfaces |
| `ink-800` | `#18222d` | hairline borders / dividers |
| `ink-700` | `#273545` | stronger borders, diagram strokes |
| `ink-500` | `#5a6f83` | de‑emphasised mono metadata |
| `ink-400` | `#8698a9` | secondary text, mono labels (AA on `ink-950`) |
| `ink-300` | `#a9b8c6` | body text |
| `ink-100` | `#e7edf2` | strong text |
| `ink-50`  | `#f4f7f9` | headings |

Body copy runs at `ink-300`/`ink-400`, headings at `ink-50`/`ink-100`. All text
pairings clear WCAG AA (`ink-400` on `ink-950` ≈ 6.6:1).

### Accents — `signal` (three, mapped to signal aspects)

| Token | Hex | Meaning | Where |
|---|---|---|---|
| `signal-amber` | `#e7a33e` | caution / wayfinding | primary buttons, active nav, section index, links‑on‑hover, focus ring |
| `signal-green` | `#43c08d` | clear / healthy | "live" indicators, diagram data‑flow, highlight markers, success state |
| `signal-red`   | `#e15656` | stop | challenge markers, the footer heart |

Amber is the one true interaction colour. Green is decoration + positive state.
Red is reserved for "problem" semantics only. Everything else is neutral.

The per‑project `color` gradients (kept in the `projects` data unchanged) are now
used only as a 1px accent line on each card and a 2px line on the modal header —
a quiet nod to the old colour coding, not a full‑bleed panel.

---

## Typography

Three families, but they read as two voices (Plex Sans + Plex Mono are siblings).
Loaded via `next/font/google` in `layout.tsx` as CSS variables.

| Role | Family | Tailwind | Notes |
|---|---|---|---|
| Display / headings | **Sora** | `font-display` | Geometric, engineered character; weights 500–700. Used for h1/h2/h3. |
| Body / UI | **IBM Plex Sans** | `font-sans` (default) | An engineering‑house typeface — humanist, quietly technical. Weights 400–600. |
| Labels / metadata / code | **IBM Plex Mono** | `font-mono` | Every eyebrow, section index, tech chip, key/value, nav item. This is the recognisable device. |

### The section‑header treatment

Replaces the old "centered h2 + one word in blue + `w-20 h-1` underline bar".
Implemented once in `SectionHeader.tsx`, left‑aligned:

```
01 ──  ABOUT  ───────────────────────────────   (mono index in amber · rule · mono label · hairline to edge)
About Me                                          (Sora, 2.5rem)
optional supporting line                          (Plex Sans, ink-400)
```

The trailing hairline reads as a track / timeline and ties every section to the
same horizontal rhythm.

### Scale

- h1: `clamp`‑ish via breakpoints, 2.25rem → 3.75rem, Sora 600, tight tracking
- h2 (section): 1.875rem → 2.5rem
- h3: ~1.15rem
- body: 0.95–1.0625rem, `leading-relaxed`
- mono labels: 0.75rem, `letter-spacing: 0.16em`, uppercase
- Prose measure capped at `max-w-prose` (68ch)

---

## Layout & spacing

- Container: `max-w-6xl` (1152px), `px-6`.
- Section rhythm: `py-24 md:py-32`, each section separated by a `border-t
  border-ink-800/70` hairline. Sections alternate `bg-transparent` /
  `bg-ink-900/60` (`<Section tint="raised">`) so they read as stacked panels
  rather than one flat wash.
- A single fixed, very faint 64px grid (`.signal-grid`) sits behind the whole
  page. The hero adds an anchored `.horizon-glow` (amber bottom‑left, green
  top‑right) instead of a centered blob.

---

## Motion

Framer Motion, kept deliberate:

- **Hero**: one staggered load‑in (opacity + 16px rise), ~60ms steps.
- **Section headers & blocks**: a single `whileInView` opacity+rise, `once: true`.
  No per‑item fan‑out except a capped 3‑column stagger on project cards
  (≤0.15s total).
- **Hover**: border‑colour and colour transitions only — no `scale(1.05)` card
  zoom, no bounce springs.
- `useReducedMotion()` is checked in every animated component; `globals.css`
  also blanket‑neutralises animation/transition/scroll under
  `prefers-reduced-motion`.
- The hero diagram's data‑flow dash animation and the nav cursor blink both stop
  under reduced motion.

---

## Components changed

| File | What |
|---|---|
| `globals.css` | Rewrote: ink background, amber focus ring, `.mono-label` (components layer), `.signal-grid`, `.horizon-glow`, reduced‑motion block, quieter scrollbar. |
| `tailwind.config.ts` | `ink` ramp, `signal` accents, `font-display/sans/mono` → CSS vars, `tracking-label`, `max-w-prose`, `blink` keyframe. |
| `layout.tsx` | Swapped Inter → Sora + IBM Plex Sans + IBM Plex Mono (next/font vars). `theme-color` → `#090d12`. Metadata object untouched. |
| `page.tsx` | `<main>` background → `bg-ink-950` + fixed grid overlay. JSON‑LD untouched. |
| `Section.tsx` *(new)* | Shared section wrapper: id, `scroll-mt`, tint, rhythm, container. |
| `SectionHeader.tsx` *(new)* | The mono‑index + rule + Sora heading device. |
| `SystemDiagram.tsx` *(new)* | Hero SVG motif — four field devices → control centre over MQTT/WS/GPS. `aria-hidden`, decorative. |
| `Navbar.tsx` | Mono nav, `IntersectionObserver` scroll‑spy active state, blinking cursor wordmark `fs▍`, hairline‑on‑scroll. |
| `Hero.tsx` | Left‑aligned. Sora headline, mono social links with `↗`, amber/ghost buttons, diagram panel on `lg`. Copy + microdata unchanged. |
| `About.tsx` | Section header; prose in a measured column; the three highlights as a mono‑numbered hairline list (no coloured 4xl icons). Copy unchanged. |
| `Skills.tsx` | Capability sheet: mono category label + count, skills as bordered mono chips with small monochrome icons (amber on hover). No per‑skill brand colours. Names + trailing line unchanged. |
| `Projects.tsx` | **`projects` array byte‑for‑byte unchanged.** Fake `FaAndroid` "screenshot" cards → typographic spec cards (`P-01`, date, title, company, clamped description, role/duration key‑values, 4 tech chips + `+N`). Modal restyled to ink + mono, plus Escape‑to‑close, body‑scroll lock, `role="dialog"` / `aria-modal`, focus move to close button and restore on close. |
| `Contact.tsx` | Ink form, mono labels, amber focus border, `aria-live` status, hairline contact list. Copy unchanged. |
| `Footer.tsx` | Ink, mono metadata. Copy unchanged. |
| `opengraph-image.tsx` | Ink bg + grid + horizon glow, left‑aligned, mono kicker, solid‑white name (no gradient text), red/amber/green aspect dots. `alt`/`size` unchanged. |
| `icon.tsx`, `apple-icon.tsx`, `public/favicon.svg` | New mark: `fs` in mono on an ink tile with an amber cursor block and a green baseline. |

---

## Maintaining it

- **New section?** `<Section id="…" tint="raised|base">` + `<SectionHeader index="0N" label="…" title="…" />`.
- **New accent need?** Don't add a colour. Use amber for "do this", green for
  "this is fine", red for "this is a problem", `ink-*` for everything else.
- **Eyebrow / label anywhere?** `className="mono-label"` (add a `text-ink-*` or
  `text-signal-amber` to recolour — it's in the components layer so utilities win).
- **Fonts**: `font-display` (Sora) for headings only; body inherits Plex Sans;
  `font-mono` for anything data‑like.
- Keep motion to a single reveal per block and colour‑only hovers.
- Re‑generate `og-image` / icons by editing the `.tsx` files — they render at
  build time on the edge runtime.
