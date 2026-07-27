# Danilo Pace — portfolio

Personal portfolio site for Danilo Pace, trainee software engineer in London. Built with React and
Vite, routed with React Router, styled with plain CSS and CSS modules. No Tailwind, no component
library, no UI dependencies. The site is meant to be a work sample as much as a description of one.

**Live at https://danilopace1-cyber.github.io/portfolio/**, deployed to GitHub Pages from the
`portfolio` repo on every push to `main`.

---

## Where we left off

_Last updated 27 July 2026._

**The site is built, deployed and live.** Design, build, accessibility pass and deployment are all
finished. The only thing left is real content.

### Done

- All five pages built: Home, Uni Projects, Personal Projects, About, Contact. Plus a 404 page.
- Deployed. GitHub Actions publishes on every push to `main`, and deep links survive a hard refresh.
- Workflow actions and the build's Node version are current as of July 2026.
- Real content in place: name, headline, availability, intro, the three About paragraphs, the full
  skills list, all three certifications, education, work dates, email, LinkedIn and GitHub.
- `public/cv.pdf` replaced with the real CV.
- SEO: title, description, Open Graph and canonical all point at the live URL.

### Outstanding, in priority order

**1. Real project content. This is the one that matters.** Everything else is optional polish.

Edit `src/data/projects.js`. Three entries under `uniProjects`, two under `personalProjects`. Each
one currently has a made-up title and summary marked `// PLACEHOLDER — replace with real content`.
For each project you need:

- `title` — the real project name
- `year`, `role` — as they actually were
- `summary` — two or three sentences. What it was, what you specifically built, one concrete
  technical detail. Plain and direct, no buzzwords. No em dashes and no semicolons anywhere.
- `tech` — the real stack
- `image` — a screenshot in `public/images/projects/`, about 1200px wide, 16:10
- `imageAlt` — describe what is actually in the screenshot
- `links` — see the warning below

The seeded entries were written from what you told me about your real work, so they are a starting
shape rather than fiction to delete wholesale. Correct them rather than starting from a blank file.

**Do not change the `PLACEHOLDER_URL` constant at the top of the file.** Replace the individual
`href: PLACEHOLDER_URL` values one at a time as each project gets a real repository. Change the
constant and every link on the site goes live at once, all pointing at the same address. While a
link still holds the sentinel it renders as greyed "To come" text instead of a clickable link, which
is deliberate: a recruiter who clicks "Repository" and lands on a 404 trusts the whole site less
than one who sees an honest gap.

**2. Link preview image.** Optional, but worth doing before the link goes on applications. Save a
1200x630 PNG as `public/og-image.png`, then uncomment the two commented-out lines in the head of
`index.html` and change `twitter:card` to `summary_large_image`. Right now a shared link shows text
only, which is fine but plain.

**3. Git identity mismatch.** Commits are authored as `danilopace99@gmail.com` while the GitHub
account is `danilopace1-cyber`. Unless that address is registered on the account, this work does not
show on the contribution graph or link to the profile. Add it under github.com → Settings → Emails,
or change it in GitHub Desktop under File → Options → Git.

**4. Local Node is v21.2.0**, an odd-numbered release that went end of life in June 2024. It builds
this project fine, so there is no rush, but odd-numbered Node releases never get long-term support.
Node 22 or 24 when convenient.

### Decisions already made, so they do not get relitigated

- **Skills and certifications live on the About page**, with a condensed "At a glance" block on Home.
  The brief allowed either that or a separate page. Home carries the stack because that is the actual
  screening filter and a recruiter should not have to navigate to find it.
- **Routing uses the `404.html` redirect, not `HashRouter`**, so URLs stay clean for job
  applications and for search indexing. Reasoning and the switch-back instructions are further down.
- **The visual direction is "The Appointment"**, a UK newspaper appointments page. This was chosen
  deliberately over a Risograph print treatment and an anime title-card treatment. The full design
  system is recorded in `DESIGN.md`, and the product context in `PRODUCT.md`. Read those before
  changing anything visual.

### To pick this back up

```bash
npm install     # only if node_modules is missing
npm run dev     # http://localhost:5173/portfolio/
```

Edit `src/data/projects.js`, check it at both a narrow and a wide window, then commit and push. The
site redeploys itself.

---

## Local setup

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL. Note that the site runs under `/portfolio/` locally too, so the
dev URL will look like `http://localhost:5173/portfolio/`. That is deliberate: local and production
behave identically, so nothing surprises you at deploy time.

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally to check it before pushing
```

---

## Project structure

```
public/
  cv.pdf                       the CV the Download button serves (PLACEHOLDER)
  favicon.svg
  404.html                     GitHub Pages deep-link fix, see "Routing" below
  images/projects/
    placeholder.svg            neutral placeholder used by every project entry
src/
  data/
    profile.js                 name, headline, intro, About text, skills, certs, contact links
    projects.js                every project entry, for both project pages
  components/
    Header.jsx                 masthead and nav
    Footer.jsx                 title block and contact links
    SectionHead.jsx            the ruled section header used on every page
    ProjectEntry.jsx           one listing entry
    ProjectListPage.jsx        shared layout for both project pages
    PixelMark.jsx              the small pixel glyph on section headers
  pages/
    Home.jsx  UniProjects.jsx  PersonalProjects.jsx  About.jsx  Contact.jsx  NotFound.jsx
  lib/
    asset.js                   builds correct URLs for files in /public
    usePageMeta.js             sets per-page title and meta description
  styles/
    global.css                 design tokens, reset, shared classes
  App.jsx                      layout shell and routes
  main.jsx                     entry point
```

**Everything you will want to edit regularly lives in `src/data/`.** Components read from those two
files, so you can rewrite all the content without touching a single component.

---

## Replacing the placeholder content

Search the project for `PLACEHOLDER` to find every spot that needs real content. There are four
things to do.

### 1. Projects

Open `src/data/projects.js`. It exports two arrays, `uniProjects` and `personalProjects`. Each entry
looks like this:

```js
{
  ref: 'UNI-01',                    // shown as the reference code, must be unique
  title: 'Unity Team Project',
  role: 'Team leader',              // optional, omit the line if not useful
  year: '2023',
  status: 'Completed',              // 'In development' gets the green chip instead
  summary: 'Two or three sentences.',
  tech: ['Unity', 'C#'],            // shown as the STACK row
  image: 'images/projects/placeholder.svg',
  imageAlt: 'Describe what the image shows.',
  links: [                          // optional, delete the ones you do not have
    { label: 'Repository', href: 'https://github.com/...' },
    { label: 'Live demo',  href: 'https://...' },
    { label: 'Video',      href: 'https://...' },
  ],
}
```

Add or remove entries freely. The page headings, entry counts and layout all follow the data.

**Placeholder links do not render as links.** Any `href` still set to `PLACEHOLDER_URL` shows up as
greyed text with a "To come" tag instead of a clickable link, and the same applies to the GitHub row
in `contactLinks` while it has `pending: true`. That is deliberate: a recruiter who clicks
"Repository" and lands on a GitHub 404 trusts the whole site less than one who sees an honest gap.
Put a real URL in and it becomes a working link automatically. For the GitHub contact row, also
delete the `pending: true` line.

Placeholder images behave the same way. While `image` is still `PLACEHOLDER_IMAGE`, the entry renders
it as a decorative graphic with an empty `alt`, so a screen reader is not read a note written for
you. Point `image` at a real file and your `imageAlt` is used.

House style for the copy: short sentences, plain words, no buzzwords. Do not use em dashes or
semicolons anywhere on the site. En dashes are fine inside a date range, like `Mar 2023 – Jul 2025`.

### 2. Project images

Drop your screenshots into `public/images/projects/`, then point each entry's `image` field at them:

```js
image: 'images/projects/workout-tracker.png',
```

Paths are relative to `public/`, with no leading slash. A 16:10 image around 1200px wide fits the
layout without cropping oddly. Always write a real `imageAlt` describing what is in the picture.

### 3. The CV

Done, the real CV is in place. To swap it again later, replace `public/cv.pdf` and keep the
filename. Both Download CV buttons pick it up with no code change. If you would rather name it
something else, change `cvPath` at the bottom of `src/data/profile.js` to match.

### 4. Your GitHub username and the live URL

Done already: `src/data/profile.js` (the GitHub contact row) and `index.html` (`og:url` and
`canonical`, both now pointing at the live URL).

Still to do: `src/data/projects.js`, where every project link still points at `PLACEHOLDER_URL`.
Replace the individual `href: PLACEHOLDER_URL` values as each project gets a real repository. Do not
change the `PLACEHOLDER_URL` constant itself, or every link goes live at once pointing at the same
address.

Everything else on the About page, the skills list and the certifications is already real content.

### Optional: the link preview image

`index.html` deliberately ships without an `og:image`, because a tag pointing at a file that does not
exist makes LinkedIn and Slack render a broken card, which is worse than no card. When you have one,
save a 1200x630 PNG as `public/og-image.png`, then uncomment the two commented-out lines in the head
of `index.html` and change `twitter:card` back to `summary_large_image`. Worth doing before you start
sharing the link on applications.

---

## Deploying

**This is already set up and live.** To publish a change, commit it and push to `main`. The workflow
in `.github/workflows/deploy.yml` builds the site and publishes it, usually within two minutes. You
can watch it on the repo's Actions tab, or trigger a rebuild by hand there without pushing.

Nothing else needs doing. The rest of this section is only for rebuilding the setup from scratch.

<details>
<summary>Setting it up again from zero</summary>

1. **Name the repository `portfolio`, lowercase.** The Vite `base` in `vite.config.js` is
   `/portfolio/` and GitHub Pages paths are case-sensitive. A repo called `Portfolio` serves the
   page but 404s every stylesheet and script, so you get an unstyled wall of text.
2. **The repository must be public.** GitHub Pages does not run on private repos on the free plan.
3. **Push the code to `main`.**
4. **Repo → Settings → Pages → Build and deployment → Source → GitHub Actions.** Not "Deploy from a
   branch", which is the older mechanism and does not run the workflow. There is no save button.
5. The site appears at `https://<your-username>.github.io/portfolio/`.

</details>

### Keeping the workflow current

GitHub retires the Node version its actions run on every so often, and warns on the Actions tab when
your pinned versions are behind. When that happens, bump the `uses:` versions in
`.github/workflows/deploy.yml` and the `node-version` under `setup-node`. It is a warning rather than
a failure, so the site keeps deploying until you get to it.

### Moving to a custom domain later

Set `base` to `'/'` in `vite.config.js`, change `pathSegmentsToKeep` to `0` in `public/404.html`, and
add a `public/CNAME` file containing your domain. Nothing else changes.

---

## Routing: why `404.html` and not `HashRouter`

GitHub Pages is a static file host with no server-side routing. Ask it for `/portfolio/about` and it
looks for a file at that path, does not find one, and serves `404.html`. That breaks any client-side
router on a hard refresh or a pasted deep link, which is exactly what happens when someone opens a
link you put on a job application.

There are two standard fixes.

**HashRouter** puts the route after a `#`, giving URLs like `/portfolio/#/about`. The fragment never
reaches the server, so refreshes always work. It is bulletproof and needs no extra files. The cost is
that every URL on the site carries a `#`, which looks dated on a CV, and search engines treat
fragment URLs as one page rather than five.

**The `404.html` redirect** is what this project uses. `public/404.html` catches the failed request,
rewrites `/portfolio/about` into `/portfolio/?/about`, and redirects to the site root. A small inline
script in `index.html` reads that query string and restores the real URL with `history.replaceState`
before React Router boots. The redirect is instant and nothing flashes.

I chose the redirect because this site's whole job is to be linked from applications and a LinkedIn
profile. Clean URLs like `/portfolio/uni-projects` are what you want a recruiter to see and what you
want indexed. The only real cost is one extra file and a few lines of script, both commented in
place.

If you ever want to switch, replace `BrowserRouter` with `HashRouter` in `src/main.jsx`, drop the
`basename` prop, and delete `public/404.html` along with the inline script in `index.html`.

---

## Design notes

The visual world is the newspaper appointments page: ruled listing entries, fixed-field label and
value rows, one bordered display advertisement on the home page, hairline rules, and no cards or
shadows anywhere. The idea is that instead of a developer showing off, the site lists Danilo in the
format the people hiring him have read for a century.

- **Type.** Archivo, a grotesque designed for newsprint, condensed for headings. JetBrains Mono for
  reference codes, field labels and dates, never for prose.
- **Colour.** A cool paper ground, near-black ink, and one acid chartreuse. The accent only ever
  appears as a fill behind near-black text or as a small mark, which keeps contrast high and stops it
  turning into decoration.
- **The game-dev accent** lives in exactly two places: the five-square pixel glyph on every section
  header, and hover states that snap in hard steps rather than fading, like a sprite frame swap.
- **Motion** is deliberately almost absent. No scroll animations, no reveals. The site is static and
  fast, and `prefers-reduced-motion` is respected.

### Accessibility

- Semantic landmarks, one `h1` per page and a correct heading order.
- A skip link, visible focus rings on every interactive element, and full keyboard operability.
- Focus and scroll position reset on route change, which client-side routers do not do by default.
- Body text contrast is above 4.5:1 throughout, and the accent is only used behind near-black text.
- Real `alt` text on every image, driven by the `imageAlt` field in the project data.
- Mobile first, laid out from 320px up.
