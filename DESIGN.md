---
name: Danilo Pace Portfolio
description: A junior engineer set as a UK newspaper appointments advertisement — cool paper, near-black ink, hairline rules, one acid chartreuse.
colors:
  paper: "#f1f3f4"
  paper-raised: "#ffffff"
  paper-sunk: "#e7eae9"
  ink: "#101314"
  ink-2: "#454d50"
  ink-3: "#5e676a"
  rule: "#cdd5d5"
  rule-strong: "#101314"
  accent: "#c6ef3e"
  accent-deep: "#6b8a0d"
  on-accent: "#101314"
typography:
  display:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.375rem, 1.1rem + 6.6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.375rem, 1.15rem + 1.1vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.1875rem, 1.09rem + 0.5vw, 1.4375rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 88"
  subhead:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.1875rem, 1.09rem + 0.5vw, 1.4375rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 92"
  lede:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1rem, 0.965rem + 0.17vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.09em"
  label-micro:
    fontFamily: "{typography.label.fontFamily}"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.1em"
  action:
    fontFamily: "{typography.label.fontFamily}"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.07em"
rounded:
  none: "0px"
spacing:
  sp-1: "0.25rem"
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-5: "1.5rem"
  sp-6: "2rem"
  sp-7: "3rem"
  sp-8: "4rem"
  sp-9: "6rem"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.7em 1.25em"
  button-accent-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.accent}"
  button-plain:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.7em 1.25em"
  button-plain-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  stamp:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.3em 0.6em"
  chip-live:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  reference-badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.25em 0.5em"
  tag:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.2em 0.5em"
  link-inline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0 1px"
  link-inline-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label-micro}"
    rounded: "{rounded.none}"
    padding: "0.4em 0.55em"
  nav-link-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  pending-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-3}"
    typography: "{typography.label-micro}"
    rounded: "{rounded.none}"
    padding: "0.1em 0.4em"
---

# Design System: Danilo Pace Portfolio

## Overview

**Creative North Star: "The Appointments Page"**

This is a printed classifieds sheet rendered in a browser. A recruiter reading it is meant to recognise the format before they read a word: a heavy masthead rule with the name at the left and the sections listed as mono labels at the right, one bordered display advertisement carrying the candidate, then ruled listing sections with fixed-field rows underneath. Every convention comes from newsprint economics — hairline rules instead of containers, a reference code instead of a badge, a field label in the left column and its value in the right — and nothing comes from the developer-portfolio default of hero, tech pills and soft-shadowed cards.

The material is a cool grey-white stock, deliberately not cream, printed in near-black. There is no third material: no shadow, no gradient, no rounded corner, no card anywhere in the build. Depth is entirely a matter of line weight and paper tone. What separates a section from a section is a 3px rule; what separates the sheet from the browser is a 6px rule; what separates one entry from the next is a 1px hairline. One acid chartreuse breaks the greyscale, and it only ever appears as a fill behind near-black lettering — the availability stamp, the primary button, the active nav item, and the block that lights under the cursor.

Density is high and deliberately unpadded. Rows are close-set, columns are fixed, and the type ramp condenses as it gets bigger, so the largest thing on the page is also the narrowest. The one authored gesture is a hard 120ms two-step snap on background and colour: state changes land like a sprite swapping frames, not like a UI easing in. There is nothing else in motion, anywhere.

**Key Characteristics:**
- Cool paper ground, near-black ink, one acid chartreuse used only as a fill
- Hairline / section / masthead rule ladder at 1px, 3px, 6px
- Archivo's width axis carries the hierarchy: bigger type is narrower type
- Mono is a label material only — refs, field labels, dates, counts, button lettering
- Fixed-field rows (mono label left, value right) as the repeated structural unit
- Zero radius, zero shadow, zero gradient, no scroll animation
- One 120ms `steps(2, end)` snap is the entire motion vocabulary

## Colors

A greyscale newsprint palette — three papers, three inks, two rule weights — interrupted by exactly one saturated hue that appears in two values.

### Primary
- **Acid Chartreuse** (`accent`): The one saturated thing on the sheet. It is a *fill*, never lettering on paper: the availability stamp, the Download CV button, the live-status chip, the active nav item, the skip link, and the hover state of any full-width row or inline link. Near-black type sits on it (`on-accent`).
- **Deep Chartreuse** (`accent-deep`): The same hue dropped to a value that clears 3:1 against paper, which the bright accent does not. It has exactly two jobs: the pixel mark in every section header, and the 2px underline that is the only thing distinguishing an inline link from the prose around it. Because it is a non-text indicator, the darker value is the legitimate one.

### Neutral
- **Cool Paper** (`paper`): The page ground and the masthead and footer ground. A cool grey-white stock, deliberately not cream.
- **Raised Paper** (`paper-raised`): Pure white, used only inside bordered blocks — the display advertisement, the contact coupon — and behind stack tags, so a bordered block reads as pasted-on stock rather than as a card.
- **Sunk Paper** (`paper-sunk`): The well behind a project image, so a placeholder or a slow-loading image is a defined empty field rather than a hole.
- **Near-Black Ink** (`ink`): Body text, headings, borders on all bordered devices, and the focus outline.
- **Mid Ink** (`ink-2`): Running prose, summaries, ledes and blurbs. Everything set as sentences rather than as a heading sits here.
- **Quiet Ink** (`ink-3`): Mono field labels, dates, counts, issuers, and every placeholder/pending state.
- **Hairline** (`rule`): The 1px divider between rows and entries, and the border of quiet devices (tags, pending tags, the image well).
- **Strong Rule** (`rule-strong`): The same value as near-black ink, named separately because it means *structure*: the 6px masthead and footer rules, the 3px section head rule, the 3px border on a bordered block.

### Named Rules

**The Fill, Not The Ink Rule.** Bright accent is a background behind near-black text. It is never set as type on paper and never used as a border on its own. The single inversion in the build is the accent button's hover, where the pairing flips whole — accent lettering on near-black — which keeps the accent bound to a near-black partner in both directions.

**The Two Greens Rule.** `accent` fills, `accent-deep` marks. Any chartreuse that has to carry meaning without text behind it — the pixel mark, the link underline — uses the deep value, because it is the only one that clears 3:1 against paper.

**The Greyscale Default Rule.** At rest a page shows accent in at most three places: the availability stamp, the primary button, and the active nav item. Everything else earns colour only under the cursor.

## Typography

**Display Font:** Archivo (variable, `wdth` 62–125, `wght` 400–800), with system sans fallbacks
**Body Font:** Archivo, same family, at normal width
**Label/Mono Font:** JetBrains Mono (400–600), with `ui-monospace` fallbacks

**Character:** One condensed grotesque doing all the talking, with a monospace that only ever files, numbers and labels. The pairing reads as a printed page rather than as a UI: nothing is friendly, nothing is decorative, and the mono is there because a classified ad has reference codes, not because code is a mood.

### Hierarchy
- **Display** (800, `clamp(2.375rem, 1.1rem + 6.6vw, 5rem)`, 0.9, width 72%, uppercase): The name, once, at full width inside the display advertisement. Nothing else in the build uses this step.
- **Headline** (800, `clamp(1.375rem, 1.15rem + 1.1vw, 2rem)`, 1.05, width 80%, uppercase): Every section header and every section-index row title. The recurring loudest voice.
- **Title** (700, `clamp(1.1875rem, 1.09rem + 0.5vw, 1.4375rem)`, 1.15, width 88%): The title of a listing entry. Not uppercased — an entry title is a name, not a heading rule.
- **Subhead** (600, same step as Title, 1.25, width 92%): The advertisement's role headline, the one line that has to read as a sentence while still sitting above prose.
- **Lede** (400, `clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)`, 1.65, mid ink): The three-sentence intro, page ledes, About prose, and the primary value in a fixed-field row (at 600). Capped at 58–68ch.
- **Body** (400, `clamp(1rem, 0.965rem + 0.17vw, 1.0625rem)`, 1.6): Row values, entry summaries, index blurbs. Capped at 46–62ch by block.
- **Label** (mono 500, 0.75rem, 0.09em, uppercase, quiet ink): Field labels, reference lines, dates, counts, issuers, meta. The most-repeated type in the system.
- **Label micro** (mono 400–500, 0.6875rem, 0.09–0.1em, uppercase): Masthead nav items, the masthead role line, and pending tags. The only step below the label.
- **Action** (mono 600, 0.8125rem, 0.07em, uppercase): Button lettering, skip link, and entry links.

### Named Rules

**The Condensing Ladder Rule.** Archivo's width axis carries hierarchy alongside size. The bigger the type, the narrower it is set: 72% for the name, 78% for the masthead and footer wordmarks, 80% for section headers and index titles, 88% for entry titles, 92% for the advertisement headline, and normal width for everything set as sentences. Never set large type at normal width, and never condense running prose.

**The Mono Is A Label Rule.** Monospace is confined to reference codes, field labels, dates, counts, statuses and button lettering. It never sets a sentence, a summary or a lede. If it is prose, it is Archivo.

**The Caps Are Structural Rule.** Uppercase marks a field or a heading, never a sentence. Mono labels, section headers, index titles and buttons are uppercased; entry titles, ledes and body copy are not.

## Layout

A single centred column, max 70rem, with a fluid gutter of `clamp(1.25rem, 5vw, 3rem)`. The shell is a flex column pinned to `100vh` so the footer rule always lands at the foot of the sheet; main content pads `2rem/4rem` on narrow and `3rem/6rem` from 46rem up.

The system has one major breakpoint at **46rem**, where every fixed-field row goes from stacked to two columns and every bordered block widens its inline padding from `1rem` to `2rem`. Column widths at that breakpoint are fixed, not fractional: `9rem` for the label column in at-a-glance and About record rows, `6rem` for the label column inside a project entry, `17rem` for the media column of a listing entry, `5–5.5rem` for the contact label column. Fixed labels are what make the rows read as a printed table rather than as a responsive grid. A second, narrower breakpoint at **40rem** exists only for the masthead: below it the nav drops to its own full-width line under a hairline and its items take visible hairline borders so they read as tappable.

Vertical rhythm runs on the 0.25rem-based spacing scale: `0.75–1rem` inside a row, `1.5rem` between a section header and its first row, `2–3rem` inside a bordered block, `4rem` between major page sections. Measure is capped per block rather than globally — 68ch for long prose, 62ch for an entry summary, 58ch for the advertisement intro and page ledes, 46ch for an index blurb, 42ch for a certification name.

**The Fixed Field Rule.** The repeated structural unit across the whole site is a fixed-field row: a mono uppercase label in the left column, its value in the right, a 1px hairline beneath, and the group opened by a hairline above. At-a-glance, the About record, About skills, project stack and links, footer contacts and the contact coupon are all the same row. New content types adopt the row rather than inventing a container.

## Elevation & Depth

**There are no shadows in this build.** No `box-shadow`, no `filter: drop-shadow`, no gradient, no blur, anywhere in any stylesheet. The system is print-flat by construction and depth is expressed entirely through line weight and paper tone.

The line-weight ladder is the elevation scale:
- **1px hairline** (`rule`) — a divider between rows and entries, and the border of quiet devices.
- **2px** (`ink`) — a device edge, not a rule: the availability stamp, buttons, the inline-link underline.
- **3px** (`rule-strong`) — a section head rule, and the border of a bordered block.
- **6px** (`rule-strong`) — the masthead top edge and the footer top edge. The frame of the sheet.

Paper tone is the only other depth cue: white `paper-raised` inside a bordered block, `paper-sunk` in an image well, `paper` everywhere else.

**The Print-Flat Rule.** Nothing lifts. If an element needs to separate from its neighbour, it takes a rule or a paper tone, never a shadow and never a radius.

**The Snap Rule.** The site has one authored motion token: `120ms steps(2, end)`, applied only to `background-color`, `color` and `border-color`. State lands in two hard frames like a sprite swapping, never as an ease. The only transform in the build is a 4px horizontal nudge on the index-row arrow. There are no scroll animations, reveals, parallax or entrance transitions, and a `prefers-reduced-motion` block collapses all durations to 0.01ms.

## Shapes

Every corner is square. `border-radius` is zero across the entire build, on every button, chip, stamp, tag, image well and bordered block — the form language is rectangular cut stock. Silhouettes come from borders and rules only: full-bleed horizontal rules inside the column, and closed rectangles for the two bordered devices (the display advertisement and the contact coupon), each a 3px near-black frame on white with a hairline-divided strip at the top.

The single non-rectangular form in the system is the **pixel mark**: a five-square 12×12 glyph in deep chartreuse that opens every section header. It is drawn from squares, so it does not break the form language, and it is the one game-dev flourish on the sheet. It inherits `currentColor`, so it can invert inside a filled block.

## Components

### Buttons
- **Shape:** Square (0 radius), 2px near-black border, mono uppercase lettering, `0.7em 1.25em` padding.
- **Accent (primary):** Chartreuse fill with near-black lettering. One per view — the Download CV action, or the recovery action on the 404 page.
- **Plain (secondary):** Transparent on paper with the same 2px near-black border.
- **Hover:** Accent inverts to near-black ground with chartreuse lettering; plain fills near-black with paper lettering. Both snap in 120ms, two steps.
- **Focus:** The global 3px near-black outline at 2px offset, which stays visible on paper and on the accent fill alike.

### Chips
- **Style:** 1px near-black border, mono uppercase at 0.75rem, `0.3em 0.6em`, transparent by default. Carries a project's status.
- **Live variant:** Chartreuse fill with near-black lettering, same border. The only chip that takes colour, reserved for in-development work.
- **Availability stamp:** The heavier sibling — 2px border, chartreuse fill, 0.11em tracking, `0.5rem 1rem`. Used once per site, directly under the name.

### Cards / Containers
There are no cards. The only closed containers are the two **bordered blocks** (the home display advertisement and the contact coupon), which share one recipe:
- **Corner style:** Square (0 radius).
- **Border:** 3px near-black on all sides.
- **Background:** White `paper-raised` against the cool paper page.
- **Shadow strategy:** None. See Elevation & Depth.
- **Internal padding:** `0.75–1rem` on narrow, `2rem` inline from 46rem up; a mono strip at the top divided by a hairline.
- **Rule:** at most one bordered block per route. It is the page's headline device, not a layout wrapper.

### Navigation
- **Style:** Mono micro caps (0.6875rem, 0.1em) in mid ink, `0.4em 0.55em`, transparent 1px border reserved so hover does not shift layout.
- **Hover:** Ink lettering plus a near-black 1px border appears.
- **Active:** Stamped, not underlined — chartreuse fill, near-black lettering, near-black border, weight 600. Hover does not change an active item.
- **Mobile (below 40rem):** The nav drops to a full-width row under a hairline, items take visible hairline borders and slightly larger padding.

### Ruled Listing Entry (signature)
A project as a classified listing. A media well (1px hairline border, sunk paper, 8:5 image) at 17rem in the left column from 46rem up; in the right column a meta row (near-black reference badge in reversed mono, then year / role in quiet mono, then the status chip), the entry title, the summary at 62ch, and a fixed-field group for Stack and Links. Entries are separated by a 1px hairline drawn on the *top* of each entry, with the first entry's rule suppressed; the last field in a group drops its bottom rule so it does not double up against the next entry's.

### Section Header (signature)
A 3px near-black rule, then a row holding the deep-chartreuse pixel mark and the section name in condensed uppercase, with an optional mono meta value (a count, a location, an error code) aligned right in the fixed-field position.

### Placeholder / Pending State (signature)
Unresolved content is shown as an honest gap, never as a working control:
- A link whose href is still the sentinel renders as **quiet mono text with a dotted hairline underline** and a bordered "To come" tag, not as an anchor.
- A pending contact row renders as a non-hoverable span with `cursor: default` and no accent fill.
- A placeholder image renders with an empty `alt`, because the graphic already reads as a placeholder on screen and the maintainer's note is not content.

### Inline Links
Ink-coloured, no `text-decoration`, distinguished from prose by a 2px deep-chartreuse bottom border with 1px of breathing room. On hover the ground fills chartreuse and the underline goes near-black. Full-width rows (the section index, footer contacts, coupon rows) use the same idea at block scale: the entire row fills chartreuse on hover and its quiet mono label goes near-black with it.

## Do's and Don'ts

### Do:
- **Do** use the accent as a fill behind near-black lettering, and `accent-deep` for any chartreuse that has to carry meaning without text on it (3:1 minimum against paper).
- **Do** build new content as fixed-field rows: mono uppercase label left, value right, 1px hairline beneath, fixed label column (`6rem` or `9rem`) from 46rem up.
- **Do** separate with the rule ladder — 1px between rows, 3px for a section head, 6px for the sheet's top and bottom edge.
- **Do** condense large type on Archivo's width axis (72–92%) and leave prose at normal width.
- **Do** transition only `background-color`, `color` and `border-color`, and only with `120ms steps(2, end)`.
- **Do** render unresolved content as a greyed mono row with a bordered "To come" tag rather than as a link that 404s.
- **Do** keep the focus ring as the global 3px near-black outline at 2px offset on every interactive element.

### Don't:
- **Don't** add `border-radius`, `box-shadow` or a gradient. The build has none of the three and the flatness is the format.
- **Don't** set the bright accent as type on paper, or as a standalone border. It fills, it does not letter.
- **Don't** introduce a card, a panel or a wrapper with its own background to group content. Group with a rule, or with the one bordered block a route is allowed.
- **Don't** use monospace for a sentence, a summary or a lede.
- **Don't** ease a transition or add a scroll animation, reveal or parallax. The only transform in the system is the 4px arrow nudge.
- **Don't** add a second bordered block to a route, or a second display-scale name to a page. The name is set once, on Home.
- **Don't** let a fixed-field label column go fluid at desktop width. Fixed labels are what makes the sheet read as print.
