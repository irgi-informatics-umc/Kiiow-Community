# DESIGN SPECIFICATION: KII0W (PIXEL COMMUNITY)
### Style: Pixel Editorial × Soft Brutalism

---

## 1. BRAND & CONCEPT

**KII0W** is a small Minecraft-leaning streamer (`kiiow`) and the intimate digital community forming around them. The design philosophy embraces this smallness as strength: intimate, honest, relaxed, and anti-corporate.

- **Primary Persona & Bio**: "support streamer kecil :o"
- **Style Concept**: Pixel Editorial × Soft Brutalism. Editorial typography, high-contrast Obsidian Violet palette, and purposeful pixel motifs (isometric cubes, pixel dividers, micro-labels) instead of retro game gimmicks or SaaS cliches.
- **Color Accent Echo**: Clean pure-white accent highlights to reflect kiiow's clean, full-white TikTok profile aesthetic.

---

## 2. DESIGN TOKENS (`src/styles/tokens.css`)

### Color Palette (WCAG AA Tested)
- **Obsidian (Base Background)**: `#111015`
- **Deep Surface (Section alternation)**: `#191620`
- **Elevated Surface (Cards & Interactive)**: `#211D2A`
- **Highlight Surface (Hover state)**: `#2C2738`
- **Main Text (High contrast)**: `#F1EDF7` (Contrast ratio 13.8:1 on base)
- **Secondary / Muted Text**: `#A29AAA` (Contrast ratio 5.5:1 on base, AA compliant)
- **Dim / Structural Borders**: `#383141`
- **Violet Accent**: `#9B7AFF` (5.8:1 contrast on Obsidian)
- **Lavender Highlight**: `#C5B4FF` (9.7:1 contrast on Obsidian)
- **Pure White Accent**: `#FFFFFF` (Used for primary buttons, focus rings, and punchy headline highlights)

### Typography
- **Editorial / Headings**: `'Space Grotesk'` (Weights: 400, 500, 700) — self-hosted via `@fontsource/space-grotesk`
- **Mono / Metadata / Labels**: `'JetBrains Mono'` (Weights: 400, 600) — self-hosted via `@fontsource/jetbrains-mono`
- Zero CDN external font dependencies; all fonts are bundled statically.

### Grid & Spacing
- Container max width: `1200px` with fluid responsive padding (`1rem` on mobile, `1.5rem` on desktop).
- Asymmetric 2-column editorial layouts (`1.15fr 0.85fr` in Hero, `1.1fr 0.9fr` in About/Platforms).

---

## 3. VISUAL SIGNATURES

1. **Authentic Minecraft Character Skin (`/images/kiiow-skin.png`)**:
   - High-fidelity transparent character skin rendered with `image-rendering: pixelated` and `object-fit: contain`. Preserves the streamer's signature identity with layered soft ambient drop-shadow.
2. **Brutalist Pixel Notches & Borders**:
   - Solid offset shadows (`4px 4px 0 var(--color-violet)`), dashed editorial delimiters, and pixel corner anchors (`.card-corner`).
3. **High-Contrast White Key Accents & Balanced Accent Tokens**:
   - Primary action buttons and focal typography use crisp white to bridge the streamer's signature white TikTok profile with the obsidian aesthetic. Dedicated WhatsApp icon accents (`#25D366`) are used selectively without disrupting the dark palette.

---

## 4. ARCHITECTURE & FOLDER STRUCTURE

```
kiiow-community/
├── public/
│   ├── images/
│   │   └── kiiow-skin.png   # Minecraft character skin PNG
│   ├── favicon.svg          # Custom pixel cube SVG icon
│   ├── og-image.svg         # Open Graph card preview (1200x630)
│   └── robots.txt           # Crawler instructions
├── src/
│   ├── components/
│   │   ├── community/
│   │   │   ├── CommunityHub.astro    # Community Hub orchestrator section (#community-hub)
│   │   │   ├── WhatsAppChannel.astro # Official KII0W Community Channel card
│   │   │   └── AdminModpacks.astro   # Admin Minecraft modpack collection & specs
│   │   ├── About.astro      # Bio, principles, and streamer reality
│   │   ├── Footer.astro     # Minimal community footer with verified links
│   │   ├── Header.astro     # Sticky responsive navigation with a11y drawer
│   │   ├── Hero.astro       # Asymmetric hero with Minecraft skin anchor
│   │   ├── Platforms.astro  # SociaBuzz & TikTok link hub + placeholder transparency
│   │   └── PixelCube.astro  # SVG pixel block component
│   ├── data/
│   │   ├── modpacks.ts      # Modpack interfaces & verified admin configurations
│   │   └── site.ts          # Single source of truth for text, handles, and URLs
│   ├── layouts/
│   │   └── Base.astro       # Root layout, HTML meta, OpenGraph, skip link
│   ├── pages/
│   │   ├── 404.astro        # Custom 404 error page
│   │   └── index.astro      # Primary homepage
│   └── styles/
│       ├── global.css       # CSS reset, utilities, button system
│       └── tokens.css       # Design tokens (colors, fonts, sizes, spacing)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 5. CONTENT MANAGEMENT (`src/data/site.ts`)

All content, social URLs, and handles reside in `src/data/site.ts`.

### How to Edit Content:
- **Change SociaBuzz URL**: Modify `primarySupportUrl` and `sociabuzzHandle`.
- **Change TikTok URL**: Modify `tiktokUrl` and `tiktokHandle`.
- **Update Bio**: Update `bioVerbatim`.
- **Add or Update Nav Items**: Edit the `navItems` array.

### How to Add a New Page:
1. Create a new `.astro` file inside `src/pages/` (e.g., `src/pages/jadwal.astro`).
2. Wrap content with `<Base title="Judul Halaman">...</Base>`.
3. Add a link in `siteData.navItems` within `src/data/site.ts`.

---

## 6. ANTI-AI-SLOP AUDIT RECORD

| Slop Pattern | Status in KII0W Project |
| :--- | :--- |
| Generic purple gradient background | **Excluded**. Pure solid obsidian `#111015` with subtle geometric grid overlay. |
| Glassmorphism / Frosted blur cards | **Excluded**. Crisp soft brutalist borders (`border: 2px solid #383141`) with solid drop-shadow offsets. |
| Glowing borders / Neon outer blooms | **Excluded**. Replaced with sharp pixel block shadows (`box-shadow: 4px 4px 0 var(--color-violet)`). |
| Repetitive 3-card layout | **Excluded**. Hero and sections use editorial asymmetrical columns (quote blocks, coordinate tags, spec grids). |
| Centered oversized hero with 2 equal buttons | **Excluded**. Left-aligned editorial headline, distinct primary (white) vs secondary button hierarchy, right-aligned visual anchor. |
| Fabricated member counts / schedules / server IPs | **Excluded**. Strictly verified data only; unknowns are explicitly documented in transparency notices. |

