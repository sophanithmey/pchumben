# Pchum Ben Companion — Workspace Rules

Guidelines and architectural principles for AI agents working in this repository.

---

## 1. Cultural & Linguistic Guidelines

- **No Khmer Khan Punctuation (`។`)**:
  - Never use the Khmer full stop mark `។` (khan) in any Khmer user-facing strings, metadata, translations (`src/i18n/`), descriptions, or UI text.
- **Buddhist Era (B.E.) Dating**:
  - Use the Buddhist Era year in user-facing UI:
    - Khmer: `ព.ស. ២៥៧០` (using Khmer numerals `២៥៧០`).
    - English: `B.E. 2570`.
  - Avoid raw Gregorian year `2026` in UI displays, certificates, and badges. Use `formatBuddhistEraYear(gregorianYear, locale)` from `src/domain/services/calendar-service`.
- **Authentic Cultural Tone**:
  - Maintain reverence and respect for Khmer Theravada Buddhist customs, ancestral dedication rituals (*Bos Bay Ben*, *Chroch Teuk* libation), and pagoda traditions.
  - Avoid superficial placeholders; provide culturally accurate details (e.g. ingredients for *Num Ansom*, monastic etiquette, traditional dates).

---

## 2. Layout, Mobile Responsiveness & Design System

- **Container Constraint**:
  - All main pages must have a top-level container with `max-w-7xl mx-auto` and appropriate padding (`p-4 sm:p-6 lg:p-8`).
- **Mobile First & Responsive**:
  - Every component, section, and modal must be tested and fully responsive on mobile viewports (minimum 360px–390px width).
  - Use `min-h-svh` rather than static heights where full-height layouts are required to prevent mobile address bar jumping.
  - Flexible button rows: wrap or stack full-width (`w-full sm:w-auto`) on mobile with finger-friendly tap targets (`min-h-[44px]`).
  - Use flex-wrap and horizontal scrolling containers with `scrollbar-thin` to prevent horizontal viewport clipping.
- **Visual Aesthetics**:
  - Palette: Warm parchment backgrounds (`#faf7f2`), sacred lotus crimson (`#a52549` / `lotus-700`), warm amber/gold accents (`amber-500` / `amber-600`), and dark warm text (`#2e211b` / `warmth-950`).
  - Avoid generic plain colors; use curated gradients, subtle borders, and smooth transitions.

---

## 3. Clean Architecture & Code Modularity

- **File Length Limit (150–200 Lines Max)**:
  - Each code file should ideally contain **150–200 lines of code**.
  - Avoid monolithic files. When a file approaches or exceeds 200 lines, refactor by extracting:
    - Sub-components into focused files (e.g., card parts, list items, modal sub-views).
    - Business and interaction logic into custom React hooks (`use-*.ts`).
    - Cultural copy, recipes, mock fixtures, and config into dedicated `*.constants.ts` or `src/data/` files.
    - Pure helper functions into domain services or utility files (`*-utils.ts`).
- **Clean Architecture Layering**:
  - **`src/domain/`**: Pure business rules, calendar calculations, lunar algorithms, and core entity types. Zero React, DOM, or UI framework dependencies.
  - **`src/features/`**: Feature modules organized by domain capability (`home`, `journey`, `activities`, `libation`, `pagodas`, `memories`, `family`, `stories`). Contains components, feature hooks, and view models.
  - **`src/infrastructure/`**: Storage mechanisms (e.g. `localStorage`), repository implementations, and external adapter integrations.
  - **`src/components/`**: Shared reusable UI primitives (`ui/`) and structural layout elements (`layout/`).
- **Separate Constants & Data from Components**:
  - Keep cultural narratives, food recipes, checklist definitions, and static activity structures in dedicated `*.constants.ts` or `src/data/` files.
  - Components should focus on rendering and user interaction, not multi-hundred-line inline data declarations.
- **Complete Labels in Selectors**:
  - Always render readable, meaningful labels and icons in selector pills and tabs; never truncate strings to single characters.
- **Type Safety & Testing**:
  - Ensure zero TypeScript compiler errors (`npm run typecheck`).
  - Maintain passing test suite (`npm run test:run`) for domain logic, calendar calculations, and schema validations.
