---
version: 1
slug: "src-pages-home-jsx"
primary_target: "src/pages/Home.jsx"
related_targets: ["src/pages/UniProjects.jsx","src/pages/PersonalProjects.jsx","src/pages/About.jsx","src/pages/Contact.jsx"]
---

# Surface brief: portfolio site (all routes)

## Scope and mode

The whole five-route site: Home, Uni Projects, Personal Projects, About, Contact. Visitor mode is
**Persuade**. It is not Experience despite being a portfolio, because the projects are text records
with placeholder imagery rather than a body of visual work that can lead. Nothing here can carry the
first viewport on its own, so the surface has to make the case and expose the action.

## Audience and job

A recruiter or hiring manager triaging junior and graduate applications, usually on a phone, usually
under a minute, often with the CV PDF already open in another tab. Their job is a yes or no on
whether to spend an interview slot.

## Action

Primary: download the CV. Secondary: open a project page. Tertiary: email. The primary action sits
inside the home advertisement box, above the fold on desktop and within the first screen on mobile.

## Proof and content

The only real proof available is the degree, the two-year support role, the language and tool list,
and three certifications. Project entries are placeholders and are marked as such in the data file.
No metrics, employers, testimonials or live URLs exist, and none may be invented. The site's second
proof is itself: hand-built React with plain CSS, stated once in the footer colophon.

## Chosen direction

**The Appointment.** The UK newspaper appointments and classifieds page. Home is a bordered display
advertisement, the project pages are ruled listing sections with fixed-field rows, About is the long
copy plus data columns, Contact is the response coupon. Candidate 5 of the grounded list, seed key
755b3533. Staging is the display advertisement above ruled listing sections, not the dealt
miniature-glide staging, which needs scroll-linked camera motion the brief rules out.

## Memorable moment

The availability stamp: black type on acid chartreuse, bordered, sitting directly under the name at
full width. It is the one saturated thing on an otherwise ink-and-paper page, and it answers the
recruiter's first question before they have read a sentence.

## Constraints that shape this surface

- No scroll animations, no reveals, no dark mode toggle, no filters. Static and fast.
- One accent colour only, and only ever as a fill behind near-black text or as a small mark.
- Both project pages must share one entry layout so the two sets stay comparable.
- Copy never uses em dashes or semicolons. En dashes allowed in date ranges.
- All content is data. Components must not need editing to change what the site says.

## Unresolved

- Real GitHub username, live URL, OG image, and real project content are pending from the user.
- Whether a dedicated Skills page is ever wanted. Skills currently live on About with a condensed
  at-a-glance block on Home, which suits the under-a-minute scan.
