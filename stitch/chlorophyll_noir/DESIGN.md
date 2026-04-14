```markdown
# Design System Document: NutriSnap Premium AI

## 1. Overview & Creative North Star: "The Living Lab"
The Creative North Star for this design system is **"The Living Lab."** This concept blends the clinical precision of health AI with the organic, vibrant energy of high-end wellness. 

To move beyond a "template" feel, we reject the rigid, boxed-in layouts of traditional apps. Instead, we use **Intentional Asymmetry** and **Tonal Depth**. The UI should feel like a high-end editorial magazine—spacious, authoritative, and sophisticated. We prioritize breathing room over information density, ensuring every data point feels curated rather than cluttered.

---

## 2. Colors: Tonal Depth & Vibrancy
Our palette moves from the void of deep space into the lushness of a forest, punctuated by high-frequency neon highlights.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` against `surface` to create definition.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#0d0f0e) for the primary background.
- **Sectional Layer:** `surface-container-low` (#121413) for large grouping areas.
- **Interactive Layer:** `surface-container-high` (#1e201f) for cards and modular elements.
- **Nesting:** An inner data point should use a higher or lower tier than its parent to define importance without adding visual noise.

### The "Glass & Gradient" Rule
To achieve a "futuristic" feel, use **Glassmorphism** for floating elements (like Navigation Bars or Quick-Action Modals). 
- **Effect:** Apply `surface-variant` at 60% opacity with a `24px` backdrop blur.
- **Signature Textures:** Use a subtle linear gradient (45deg) from `primary` (#a0ffc3) to `primary-container` (#00fc9b) for primary CTAs to provide "visual soul."

---

## 3. Typography: Editorial Authority
We utilize a dual-font system to balance tech-driven utility with premium editorial style.

*   **Display & Headlines (Manrope):** Bold, wide, and authoritative. Use `display-lg` for hero metrics (e.g., daily calorie totals) to create a clear focal point.
*   **Body & Labels (Inter):** Highly legible and modern. Used for all functional text and data descriptions.

**Hierarchy Strategy:**
- **Asymmetric Headers:** Don't feel the need to center everything. Use left-aligned `headline-lg` with generous top-padding (32px+) to create an "Editorial" layout.
- **High Contrast:** Pair a `headline-sm` in `on-surface` with a `label-sm` in `primary` for a tech-forward metadata look.

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines. We use light and shadow to imply existence.

### The Layering Principle
Depth is achieved by "stacking" the surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural inset effect.

### Ambient Shadows
For floating elements (FABs or Pop-overs):
- **Blur:** 32px to 48px.
- **Opacity:** 6% - 10%.
- **Color:** Use a tinted shadow derived from `primary` (#a0ffc3) at low opacity rather than pure black to simulate a light-emitting "glow" from the AI.

### The "Ghost Border" Fallback
If accessibility demands a border, use a **Ghost Border**: `outline-variant` (#474847) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Precision & Softness

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text, `lg` (16px) corner radius. No border.
- **Secondary:** `secondary-container` fill with `on-secondary-container` text.
- **Tertiary:** Ghost style. Transparent background, `primary` text, no border.

### Cards & Lists
- **Rule:** **No divider lines.**
- Separate items using 12px or 16px of vertical whitespace. 
- For list items, use a subtle `surface-container-highest` background on hover/tap states only.
- **Corner Radius:** All cards must use `xl` (24px) or `lg` (16px) rounding to maintain the "Healthy/Soft" vibe.

### Input Fields
- **Style:** Inset look. Use `surface-container-lowest` with a 1px `outline-variant` at 10% opacity. 
- **Active State:** The border transitions to `primary` (#a0ffc3) with a soft 4px outer glow.

### Specialized AI Components
- **The "Insight" Chip:** A glassmorphic pill using `tertiary-container` at 20% opacity with `tertiary` text. Use this for AI-generated health tips.
- **The Glow-Bar:** For progress bars (e.g., macro-nutrients), use `primary` with a 8px blur layer underneath to simulate a neon tube.

---

## 6. Do's and Don'ts

### Do:
- **Use generous whitespace:** If you think there is enough space, add 8px more.
- **Mix weights:** Pair `display-md` (Bold) with `body-sm` (Regular) for high-end contrast.
- **Layer surfaces:** Use the `surface-container` tokens to create "zones" of information.

### Don't:
- **Don't use 1px solid dividers:** It breaks the "premium" immersion and makes the app look like a spreadsheet.
- **Don't use pure white (#FFFFFF):** Use `on-surface` (#f7f6f4) to prevent eye strain in dark mode.
- **Don't crowd the corners:** Ensure content is inset at least 24px from the edge of `lg` rounded containers.
- **Don't use standard shadows:** Avoid the "dirty" look of grey shadows; always tint them toward the background or primary brand colors.```