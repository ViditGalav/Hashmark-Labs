# Brand & Design System

Derived from the decks by pulling fonts and colours from the PDFs with PyMuPDF (not eyeballed). The website extends the deck language; it must feel like the same company.

## Typography (exact deck fonts, all free on Google Fonts)
| Role | Font | Usage |
|---|---|---|
| Display | **Instrument Serif** (regular + italic) | H1–H3, big numbers (70+, 6.5+), case names, closing lines. Italic + pink for the emphasised phrase ("*others can't.*", "*what's next.*"). Never bold. |
| Body/UI | **Inter** | Paragraphs, card titles (500–600 weight), buttons, nav. |
| Label | **JetBrains Mono** | Eyebrows ("02 — AT A GLANCE"), uppercase, letter-spacing 0.18–0.28em; tags/chips; metrics lists; footers; page counters. |

Fluid scale (clamp): display-xl `clamp(3rem, 7.2vw, 6.75rem)` lh 0.98 · display-l `clamp(2.5rem, 5vw, 4.5rem)` lh 1.02 · display-m `clamp(2rem, 3.4vw, 3rem)` lh 1.08 · display-s `clamp(1.5rem, 2.2vw, 2rem)` · body-l 1.125–1.25rem lh 1.6 · body 1rem lh 1.65 · small .875rem · label .72–.78rem mono tracking .22em. Letter-spacing on display: -0.01em.

## Colour tokens (from PDF)
| Token | Hex | Source |
|---|---|---|
| `--bg` | #0a0b14 | page background |
| `--bg-2` | #0e0f1c | alt band |
| `--surface` | #13152a | cards |
| `--surface-2` | #1a1d38 | chips / raised |
| `--line` | rgba(154,156,184,.16) | hairlines |
| `--text` | #f4f1fa | primary text |
| `--text-2` | #c9c7de | body text |
| `--muted` | #9a9cb8 | secondary |
| `--faint` | #6e7196 | mono labels, footers |
| `--pink` | #ff5e8e | primary accent, eyebrows, CTA |
| `--pink-soft` | #ff9cb9 | chip text |
| `--violet` | #b98cff | secondary accent |
| `--indigo` | #8b7bff | gradient end (stat 4–5) |
| `--teal` | #3fe0c5 | "LIVE IN PRODUCTION", success, third avatar |
| Cream (light sections) | bg #f1ece3, text #1a1822, crimson #c8285a | TECH p8 principles slide |
Gradient: `linear-gradient(135deg,#ff5e8e,#b98cff)` (logo tile, avatars, key numbers pink→violet across a row). Ambient: radial violet glow top-right (`#2a1f5c` @ ~40%) and plum glow bottom-left — as on deck backgrounds.

## Visual motifs
- `#` hashmark glyph: logo tile; oversized faint watermark in closing CTA; the hero constellation (network of nodes around a central #, pink glowing nodes, violet lines, concentric dashed circles).
- Numbered everything: sections "01 —", lists "01…06", principles "A–D", with a big serif "0" for the "zero" principle.
- Architecture diagrams inside bordered surfaces: stacked layer cards with violet→plum tint progression and pink down-arrows.
- Mono chips for stack/tags: surface-2 bg, 1px line, rounded-full.
- Two-column "What goes wrong → What we do instead" table with hairline rows.
- Horizontal framework timeline with pink square nodes, "WE DO / WE MEASURE" stacks, measures in pink mono.
- Live pill: teal dot + "LIVE IN PRODUCTION" mono in teal-tinted outlined pill.

## Layout
- Container max 1240px, gutters 24px mobile / 40px tablet / 64px desktop. 12-col grid.
- Section rhythm: 120–160px vertical desktop, 80px mobile. Section header = eyebrow + serif headline (+ optional lead), left-aligned (as decks).
- Radius: cards 16px, chips 999px, buttons 999px (pill) or 12px.
- Borders over shadows. Hover: border brightens to pink/violet at 35%, subtle lift 2px, glow.

## Motion
- Tasteful only: fade+rise 16px on scroll-in (600ms, ease-out-expo, stagger 60ms), count-up on stats once, constellation slow drift/pulse, marquee for tech stack. All disabled under `prefers-reduced-motion`.
- No scroll-jacking, no cursor gimmicks that hurt usability.

## Voice
British spelling as in decks (decentralised, optimise, programme, sceptics). Short declaratives. Contrasts ("Proof, not promises.", "Deliverables, not decks.", "Evidence, not adjectives."). No hype words (revolutionary, cutting-edge, 10x), no price predictions, no guaranteed outcomes.
