# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, in-house talent partners, and hiring managers screening applicants for
junior and graduate roles across software engineering, project management and IT, in London and
the wider UK. They arrive from a
job application, a CV link, or LinkedIn. They are triaging a stack of candidates, usually give
a site well under a minute, and frequently open it on a phone between other tasks. Their job is
a fast yes or no on whether this candidate is worth an interview slot.

Secondary: Danilo Pace himself, as the maintainer, replacing placeholder project content and
the CV file over time without touching component code.

## Product Purpose

A personal portfolio site for Danilo Pace whose single job is to get him past CV screening and
into interviews for junior and graduate roles across software engineering, project management and
IT. Success is a recruiter
understanding, in under a minute, who he is, what he can build, and how to contact him, then
downloading his CV or clicking through to a project.

## Positioning

Danilo is a career changer, not a bootcamp graduate and not a traditional CS graduate. The site
has to do two jobs a generic template cannot: reframe a games programming degree as real
engineering fundamentals, and reframe two years of IT support as real professional technical
experience rather than a gap.

The site is also itself the work sample. It is hand built in React with plain CSS, no Tailwind
and no component library, so the artifact is evidence for the claim it makes.

## Operating Context

- Scanned in under a minute, often on a phone, often alongside a CV PDF already open.
- Reached from an application form field, an email signature, or a LinkedIn profile link.
- The recruiter's next action is either downloading the CV, opening a project, or leaving.
- Projects need to be comparable at a glance, so both project pages share one layout.
- Content changes often at first. Project entries live in one data file, separate from components.

## Capabilities and Constraints

Confirmed technical constraints, all binding:

- React with Vite. JavaScript, not TypeScript.
- React Router for multi page navigation.
- Plain CSS or CSS modules only. No Tailwind, no UI component library, no heavy dependencies.
- Deploys to GitHub Pages as a project page from a repo named `portfolio`, so the Vite base path
  is `/portfolio/` and client side routing must survive a hard refresh on a deep link.
- A GitHub Actions workflow builds and deploys on push to `main`.
- All project content lives in `src/data/projects.js` and is swappable without editing components.
- The CV is a static file at `public/cv.pdf`, shipped as a placeholder.
- No backend, no contact form, no database, no analytics.
- No dark mode toggle, no project filters, no scroll animations.
- No headshot photo. The hero leads with type.
- Every placeholder entry is marked in code so real content is easy to find and replace.

## Brand Commitments

- Name: Danilo Pace.
- Headline, fixed wording: "Software and IT Professional, London (UK)". Changed from "Trainee
  Software Engineer" in August 2026. Danilo applies for software engineering, project management
  and IT roles, so the masthead cannot name one of the three. Software stays in first position so
  the developer applications keep their anchor, and "professional" replaces "trainee" because two
  years of paid technical work is not a traineeship.
- Status line: he is openly looking for junior and graduate roles across software, support and
  project work in London. Avoid the phrasing "moving into IT". After two years in IT support it
  reads as sideways rather than forward, and it undercuts the software claim.
- Voice: plain and direct. Short sentences. No buzzwords. No "passionate about crafting
  delightful experiences" register. Claims stay proportionate to a junior candidate.
- Punctuation rule, binding on all site copy: never use em dashes, never use semicolons. Use
  commas or split the sentence. En dashes are allowed in date ranges, for example "Mar 2023 – Jul 2025".
- Bilingual Italian and English.
- Contact points: danilopace1@gmail.com, www.linkedin.com/in/danilo-pace, and a GitHub profile
  link that ships as a clearly marked placeholder.

## Evidence on Hand

Real and usable:

- BSc Computer Games Programming, Kingston University London, 2023.
- IT Support Technician, Mar 2023 – Jul 2025, two years and more of professional experience.
- Strongest languages: C++, C# with Unity.
- Web: HTML, CSS, JavaScript, React. Also Python, C, PHP, Swift, PowerShell.
- Tools: Git, GitHub, GitLab, Unity, Unreal Engine, Xcode.
- Certifications: Meta Front-End Developer Professional Certificate (in progress, expected 2026),
  Google AI Essentials, CompTIA A+ Core 1.
- True shape of the university work: a Unity team project where he was team leader and owned the
  full development lifecycle with GitHub and GitLab, and an Unreal Engine project in C++ covering
  AI systems and player interaction optimisation.
- True shape of the personal work: Tally, a voice following teleprompter for a phone, one dependency
  free HTML file using the Web Speech API, in development and live at
  `danilopace1-cyber.github.io/Tally/`. Then PTgo, a workout tracker built around the trainer and
  client relationship, in React Native with a Supabase Postgres backend, public at
  `danilopace1-cyber/PTgo` and on hold since November 2026. Plus this site itself, which is listed
  as a project on its own merits.
- The Meta Front-End course work is on hold and produced nothing worth showing, so it is a
  certification on About and not a project entry. Do not list it as one.

Absent, and never to be fabricated:

- Real project titles, full descriptions, screenshots, live demo URLs, and repository URLs.
- The real CV PDF.
- His GitHub username and profile URL.
- Any employer name, client name, testimonial, user count, performance metric, award, or grade.

## Product Principles

1. **Screenable in under a minute.** Every page answers its question above the fold. Nothing
   important hides behind an interaction.
2. **The artifact is the argument.** The site is hand built evidence of front end skill, so
   execution quality is not decoration, it is the claim.
3. **Honest framing, no inflation.** A career changer is credible when the story is specific and
   proportionate. Never dress a student project as production software.
4. **Content is data, not markup.** Projects, skills, and certifications live in data files so
   real content replaces placeholders without a component edit.
5. **Static and fast.** No runtime the content does not need. The site loads instantly on a phone
   on mobile data.

## Accessibility & Inclusion

No formal standard was specified, so the working target is WCAG 2.1 AA on the things this site
actually contains: semantic landmarks and heading order, alt text on every image, visible focus
states on every interactive element, colour contrast at or above 4.5:1 for body text and 3:1 for
large text and UI boundaries, full keyboard operability, and a layout that works mobile first
from 320px upward.
