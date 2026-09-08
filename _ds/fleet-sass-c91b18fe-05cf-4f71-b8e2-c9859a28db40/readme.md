# Fleet SaaS — Design System

A design system for **Fleet SaaS**, a multi-tenant Fleet & Delivery Management platform. The flagship surface is the **operations console** — a dark, dense-but-legible web command center where logistics dispatchers and fleet admins manage drivers, vehicles, fleets, and service areas on a live map, then dispatch and track orders.

The system keeps the product's existing **sky-on-night** identity but makes it intentional and consistent: a tightened accessible color scale, semantic tokens driving **both dark and light themes**, full **RTL (Arabic)** support, and **WCAG AA** accessibility throughout. Personality: a modern logistics command-center (Linear/Vercel-dashboard polish) — never a generic admin template.

## Products & surfaces

| Surface | Tech | Who | In this system |
|---|---|---|---|
| **Operations Console** | Angular 18 (standalone, signals) | Dispatchers, fleet admins | ✅ Full UI kit (`ui_kits/console`) |
| Vendor Portal | Angular | Vendors/store managers | Inherits the same tokens + components |
| Public Tracking | Angular | End customers | Inherits tokens |
| Driver App | Flutter | Drivers | Out of scope (native) |

The console is the priority and the only surface recreated as a UI kit; the others inherit the same tokens and component contracts.

## Sources

This system was derived from real product source, mounted read-only at build time:

- **`console/`** — the Angular 18 console frontend (`src/styles.css`, `src/app/**`). The existing dark theme tokens, app shell, map dashboard, drivers CRUD, and shared table/toolbar components were the ground truth.
- **`docs/`** — product + redesign documentation. Key files: `docs/UI_REDESIGN_BRIEF.md` (the token + component + per-screen spec this system implements), `docs/00-overview.md` (product/persona context), `docs/04-api-conventions.md` (the `{data, meta}` envelope and `public_id` addressing).

> These paths are not bundled — they are recorded so a future reader with access can trace decisions back to source.

## Constraints honored (from the brief)

- Angular 18 **standalone components + signals** (the React components here are faithful visual recreations, not the production implementation).
- API envelope is **`{ data, meta }`**; `Pagination` and `DataTable` are shaped to it.
- Resources are addressed by **`public_id`** (e.g. `drv_a1b2c3`) — rendered in tabular monospace.
- UI is **permission-gated** — compose visibility around your permission checks; components are presentational.

---

## Content fundamentals

How the product talks. Match this voice in any new copy.

- **Voice: calm, operational, precise.** It reads like a control room, not a marketing site. Short, declarative labels. No exclamation, no hype, no jokes.
- **Person:** address the operator as **you** ("Sign in to your console", "Add your first driver to start dispatching orders"). Refer to entities by their domain noun (driver, vehicle, fleet, order, service area).
- **Casing:** **Sentence case** for everything — buttons, titles, menu items, toasts ("New driver", "Save changes", "Delete driver?"). Reserve Title Case only for proper nouns and nav section labels. UPPERCASE (tracked) is used sparingly for tiny eyebrow/column labels only.
- **Buttons are verbs:** "New Driver", "Create Driver", "Save changes", "Confirm & Save", "Delete driver". Destructive confirms restate the object ("Delete driver?" → "Delete driver").
- **Toasts state the outcome + object:** title is the result ("Driver created", "Driver deleted", "Export started"); the message adds a specific detail ("Layla Hassan was added to the fleet.").
- **Empty states are directive, not cute:** title names what's missing, hint tells the operator the next action ("No drivers yet" / "Add your first driver to start dispatching orders."), and always offer the primary action.
- **Validation is plain and specific:** "Name is required.", "Enter a valid phone number." — full sentences, end with a period, never blame.
- **Numbers are first-class:** counts, coordinates, money, IDs, ETAs are rendered in tabular numerics so they align and don't jitter on live update. Money shows currency ("SAR 1,240.00").
- **No emoji.** The legacy console used emoji as avatars/markers; the system replaces them with the line-icon set and colored status markers. Do not introduce emoji.
- **Bilingual:** all copy must work in English **and** Arabic (RTL). Keep labels short so they mirror cleanly; never bake direction into a sentence.

---

## Visual foundations

- **Identity — sky on night.** A sky-blue accent (`--primary`, sky-500 on dark / sky-600 on light) over deep desaturated navy surfaces (`--bg #0c1424`, `--surface #1b2535`). The blue is used with restraint — for the primary action, active nav, focus, and selection — not as decoration.
- **Two themes, one token set.** Components reference only semantic tokens (`--bg`, `--surface`, `--text`, `--primary`, `--status-*`). Dark is the hero; light (`[data-theme="light"]`) is a full peer. No hard-coded colors anywhere.
- **Status as a color language.** Operational status maps to a fixed palette used identically everywhere: online/active = green, busy/en-route = blue, offline/idle = muted grey, pending = amber, error/cancelled = red. Always rendered as a dot + cased label via `StatusBadge`.
- **Typography:** native `system-ui` stack (offline-first, instant render — dispatcher machines). 14px base; ramp 12/13/14/16/20/24/30; weights 400/500/600/700. Tabular monospace (`--font-mono`) for IDs, coordinates, money, timestamps.
- **Spacing:** 4px base grid (`--space-*`), expressed with logical properties so RTL mirrors automatically.
- **Corners:** 8px default radius (`--radius`), 6px for tight controls, 12px for modals/large panels, full pills for badges/avatars/segmented controls. Nothing sharp; nothing very round except pills.
- **Cards & surfaces:** flat, 1px `--border`, `--radius`, a barely-there resting shadow (`--shadow-sm`). Depth is communicated by surface step (bg → surface → surface-2 → surface-3), not heavy shadow. Three shadow levels total: resting card, dropdown/popover, modal.
- **Borders over shadows.** The UI leans on hairline borders and surface steps for structure. Shadows appear only on things that truly float (popovers, drawers, modals, toasts).
- **Backgrounds:** solid surfaces, no photography or texture in-app. The two atmospheric exceptions are the **login brand panel** and the **map canvas**, which use subtle layered radial gradients + faint road-line patterns to evoke a night map — cool-toned, low-contrast, never loud. No purple gradients, ever.
- **Motion:** quick and purposeful. 120ms hover/color, 200ms enter, 300ms overlay (drawers/modals/scope drawer), all `ease-out`. The only loop is a soft pulse on live "online" map markers. Everything degrades under `prefers-reduced-motion`.
- **Hover:** fills lighten by one surface step or take a translucent `--primary-soft` tint; text muted → full. **Press/active:** the primary steps one shade darker (`--primary-active`). No scale/bounce on buttons.
- **Focus:** a visible 2px `--focus-ring` outline (offset 2px) on every interactive element — non-negotiable for AA + keyboard nav.
- **Transparency/blur:** used only for scrims (`--overlay`) and soft status-tint fills (`*-soft` tokens). No glassmorphism.
- **Density:** information-dense by intent. Tables support a dense mode; the map maximizes canvas and floats its controls. Legible at a glance is the bar — a dispatcher scans, not reads.

---

## Iconography

- **One icon system: Lucide-style line icons**, delivered through the `Icon` component (`components/core/Icon.jsx`). 24px grid, **1.8 stroke**, round caps/joins — chosen to match the console's existing hand-authored inline SVG set (`console/src/app/app-nav.config.ts` used exactly this style at stroke-width 1.8).
- **Why a built-in set, not a CDN font:** the console is offline-first and CSP-tight; icons ship as inline SVG paths inside the bundle so there's no network dependency and color follows `currentColor`. The curated set covers navigation, actions, feedback, and map/ops glyphs (see the **Icons** card in the Design System tab for the full list).
- **Substitution flag:** the original console embedded a handful of bespoke inline SVGs (grid, user, truck, map, users, shield). Those exact six are reproduced; the rest of the set is **drawn in the same Lucide/Feather idiom** to fill out the vocabulary. If you have an official icon set, drop the SVGs into `assets/` and extend `Icon.jsx`'s path map — the API stays the same.
- **No emoji, no unicode glyphs as icons.** The legacy UI used emoji for driver avatars and map controls; this system deliberately replaces them with line icons and colored markers. Avatars fall back to initials (`Avatar`), not emoji.
- **Logo:** `assets/logo-wordmark.svg` (mark + "Fleet**SaaS**" wordmark) and `assets/logo-mark.svg` (square app mark) — a route/pin glyph in a sky-gradient rounded square, matching the in-product brand badge.

---

## Index / manifest

**Foundations**
- `styles.css` — the single stylesheet consumers link (imports everything below).
- `tokens/` — `palette.css` (raw ramps), `theme.css` (semantic dark+light), `typography.css`, `spacing.css`, `elevation.css` (shadows + motion), `base.css` (reset, focus, scrollbars, RTL).
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing) shown in the Design System tab.
- `assets/` — `logo-wordmark.svg`, `logo-mark.svg`.

**Components** (`window.FleetSass_c91b18.<Name>` via the compiled bundle)
- `core/` — **Icon**
- `forms/` — **Button, IconButton, Input, Select, Textarea, Checkbox, Switch, FormField**
- `feedback/` — **Badge, StatusBadge, Toast, ToastRegion, Skeleton, Spinner, EmptyState**
- `data/` — **Card, KpiChip, DataTable, Pagination**
- `overlay/` — **Drawer, Modal, ConfirmDialog**
- `navigation/` — **Tabs, SegmentedControl, Avatar**

Each component directory carries one `@dsCard` HTML thumbnail; each component has a `.d.ts` (props contract) and `.prompt.md` (usage).

**UI kit**
- `ui_kits/console/` — the interactive console: `index.html` (auth → shell → routing → toasts), `Login.jsx`, `AppShell.jsx` (collapsible sidebar, theme + RTL toggles, org switcher), `Dashboard.jsx` (map operations hero), `Drivers.jsx` (the reusable CRUD template), `data.js`, `kit.css`.

**Other**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.
