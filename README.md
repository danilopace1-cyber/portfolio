# Danilo Pace — portfolio

Personal portfolio site for Danilo Pace, software and IT professional in London. Built with React and
Vite, routed with React Router, styled with plain CSS and CSS modules. No Tailwind, no component
library, no UI dependencies. The site is meant to be a work sample as much as a description of one.

**Live at https://danilopace1-cyber.github.io/portfolio/**, deployed to GitHub Pages from the
`portfolio` repo on every push to `main`.

---

## Where we left off

_Last updated 1 August 2026._

**The site is built, deployed and live, and all four project entries now carry real content.**
Design, build, accessibility pass and deployment were finished earlier. Both project pages are now
populated. There is no placeholder copy left anywhere on the site.

**Every project link on the site is now live.** What is left is screenshots and housekeeping. PTgo
wants one once it has a settled screen, and OtherWorldly wants a reshoot.

### Done

- All five pages built: Home, Uni Projects, Personal Projects, About, Contact. Plus a 404 page.
- Deployed. GitHub Actions publishes on every push to `main`, and deep links survive a hard refresh.
- Workflow actions and the build's Node version are current as of July 2026.
- Real content in place: name, headline, availability, intro, the three About paragraphs, the full
  skills list, all three certifications, education, work dates, email, LinkedIn and GitHub.
- `public/cv.pdf` replaced with the real CV.
- SEO: title, description, Open Graph and canonical all point at the live URL.
- The GitHub contact row in the footer is live and points at a real profile.
- **Uni Projects is finished.** Two real entries, both with real screenshots:
  - `UNI-01 BorderBreak` — Unreal Engine 5, Blueprints, 2023. Final year project. Repository link is
    live at `danilopace1-cyber/BorderBreak-Showcase`, which is public.
  - `UNI-02 OtherWorldly` — Unity, C#, 2022. Coursework module CI5515. Repository link is live at
    `danilopace1-cyber/OtherWorldly-Showcase`, which is public. That is a showcase repo holding the
    gameplay source only, not the playable project. The original was on the Kingston GitLab, which
    is no longer accessible, and it could not be republished as-is regardless: it carries licensed
    asset pack content and PlayStation 5 build output, and two files in its history exceed GitHub's
    100MB limit. The title was also misspelled "OtherWordly" everywhere on this site, including the
    screenshot filename, and is now corrected. The entry now names PS5 as a target, which is a real
    differentiator for a games or engineering role and was previously missing.
  - The two leftover seeded uni entries were deleted. They were garbled guesses at these same two
    projects, so the page now shows two entries rather than three.
  - Page copy that described the uni work as "C++" was corrected to "C# and Blueprints" in three
    places: the Uni Projects intro, its meta description, and the Home index blurb. Neither real
    project is written in C++. C++ remains in the skills list and About prose, where it is a true
    claim about the degree rather than about these two projects.
- **Personal Projects is finished.** Two real entries, no placeholder copy:
  - `PER-01 PTgo` — React Native, Expo, TypeScript, Supabase, Postgres. In development. A workout
    tracker built around the trainer and client relationship. Written from the source and the
    migrations in `C:\Claude\Apps\PTgo`, not from that repo's README, which still claims "MVP step
    1" and is well behind the code. Repository link is live at `danilopace1-cyber/PTgo`, public.
    Still has no screenshot, so it keeps the placeholder well.
  - `PER-02 This Site` — the portfolio itself, listed as a project. It is the only browser React on
    the site now that PTgo is React Native, the repo is public so a recruiter can read the source of
    the page they are on, and PRODUCT.md already treats the site as its own second proof.
  - The seeded "Workout Tracker" and "Meta Front-End Course Project" entries were both replaced. The
    Meta one was deleted outright rather than rewritten: the course is on hold, the work done on it
    so far is basic HTML, and its old summary claimed form validation and screen reader work that
    does not exist. It stays a certification on About, which is what it actually is.
  - The Personal Projects intro and the Home index blurb both said "mostly React". They now say
    "React and React Native", because PTgo is a mobile app.
- **`ProjectEntry` now supports an entry with no media well.** Omit `image` entirely and the media
  column is dropped and the text runs full width. This is for an entry that will never have a
  screenshot, which is `This Site`. An entry still waiting on a screenshot should keep
  `image: PLACEHOLDER_IMAGE`, because the empty well is the honest signal that one is coming.
- **The email address is no longer a `mailto:` link.** It rendered as one and did nothing when
  clicked, because a mailto only opens something if the machine has a mail client configured, and
  plenty do not. Nothing happening reads as a broken site, on the one row that matters most. Both
  the contact coupon and the footer now show the address as plain selectable text with a Copy
  button beside it, so the fallback is always a manual copy. The behaviour is driven by `copy: true`
  on the email row in `src/data/profile.js`. Putting an `href` back and dropping `copy` restores
  the link in both places at once.
- The Meta certificate lost its "Expected 2026" date on About. The "In progress" chip already says
  it is ongoing, and a published target date is a deadline that can be caught out when it slips.

### Outstanding, in priority order

**1. A PTgo screenshot.** The only content gap left. It has no settled UI worth photographing yet,
so `image` stays `PLACEHOLDER_IMAGE` and the entry renders a neutral grey well. Once a screen is
worth showing, follow the sizing recipe below, drop the file into `public/images/projects/`, point
`image` at it and write a real `imageAlt`. Nothing else needs touching.

**2. Reshoot the OtherWorldly screenshot.** The only weak asset on the site. The source image was
579x277, so after cropping to 8:5 it is 443x277, against 1200x750 for BorderBreak. At the desktop
listing width of 272px it is fine, but the entry stacks on a phone and the image goes close to full
width, where it looks visibly soft next to the other entry. The crop also cost 136px of width and
clipped the left edge of the health bar. A fresh 1920x1080 grab from the Unity editor fixes both.

**3. Link preview image.** Optional, but worth doing before the link goes on applications. Save a
1200x630 PNG as `public/og-image.png`, then uncomment the two commented-out lines in the head of
`index.html` and change `twitter:card` to `summary_large_image`. Right now a shared link shows text
only, which is fine but plain.

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
- **The commit author address is fine, so it does not need changing.** Commits are authored as
  `danilopace99@gmail.com` rather than the account name `danilopace1-cyber`, which looks like a
  mismatch and was listed as an outstanding job for a while. It is not one. That address is a
  registered email on the GitHub account, so GitHub resolves every commit to the profile and the
  work counts on the contribution graph. Verified against the commits API on 1 August 2026, which
  reports `author.login: danilopace1-cyber` for all three commits of that day.

### To pick this back up

```bash
npm install     # only if node_modules is missing
npm run dev     # http://localhost:5173/portfolio/
```

Edit the `personalProjects` array in `src/data/projects.js`, check it at both a narrow and a wide
window, then commit and push. The site redeploys itself.

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
  cv.pdf                       the CV the Download button serves
  favicon.svg
  404.html                     GitHub Pages deep-link fix, see "Routing" below
  images/projects/
    placeholder.svg            neutral placeholder, still used by PTgo
    borderbreak.jpg            UNI-01, 1200x750
    otherworldly.jpg            UNI-02, 443x277, wants reshooting
src/
  data/
    profile.js                 name, headline, intro, About text, skills, certs, contact links
    projects.js                every project entry, for both project pages
  components/
    Header.jsx                 masthead and nav
    Footer.jsx                 title block and contact links
    CopyButton.jsx             copies a value to the clipboard, used by the email row
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

All four project entries are real now, and every repository link is live, so this section is
reference for editing them later rather than a to-do list. Searching the project for `PLACEHOLDER`
finds one remaining gap, the PTgo screenshot.

### 1. Projects

Open `src/data/projects.js`. It exports two arrays, `uniProjects` and `personalProjects`. Each entry
looks like this:

```js
{
  ref: 'UNI-02',                    // shown as the reference code, must be unique
  title: 'OtherWorldly',
  role: 'Solo project',             // optional, omit the line if not useful
  year: '2022',
  status: 'Completed',              // 'In development' gets the green chip instead
  summary: 'Two or three sentences.',
  tech: ['Unity', 'C#'],            // shown as the STACK row
  image: 'images/projects/otherworldly.jpg',
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
greyed text with a "To come" tag instead of a clickable link. That is deliberate: a recruiter who
clicks "Repository" and lands on a GitHub 404 trusts the whole site less than one who sees an honest
gap. Put a real URL in and it becomes a working link automatically.

The GitHub row in `contactLinks` works the same way in reverse. It is currently live. Adding
`pending: true` back to it takes it offline and renders it as plain text again.

**Check a repository is public before you link it.** A private repo serves a 404 to anyone not
signed in as you, which is exactly the failure the sentinel exists to prevent, and it looks
identical to a working link from your own browser. From a terminal:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -L https://github.com/danilopace1-cyber/REPO-NAME
```

`200` means public. `404` means private or missing.

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

Paths are relative to `public/`, with no leading slash. Always write a real `imageAlt` describing
what is in the picture.

**Target: 1200x750, JPEG, under about 250KB.** The media well is 8:5 and uses `object-fit: cover`,
so anything wider gets cropped at the sides and anything smaller gets upscaled and looks soft. Raw
screenshots are usually the wrong shape and far too heavy. A 3.3MB PNG would have been the single
heaviest thing on a site whose whole point is loading instantly on a phone on mobile data.

There is no image tooling in this project and none is needed. Windows can do it from PowerShell with
no installs, which is how `borderbreak.jpg` was made (3.3MB PNG down to 212KB):

```powershell
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile("C:\path\to\raw-screenshot.png")
$cropW = [int]([math]::Round($src.Height * 8 / 5))     # crop to 8:5, centred
$cropX = [int](($src.Width - $cropW) / 2)
$bmp = New-Object System.Drawing.Bitmap 1200, 750
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, (New-Object System.Drawing.Rectangle 0,0,1200,750), `
             $cropX, 0, $cropW, $src.Height, [System.Drawing.GraphicsUnit]::Pixel)
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
         Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter `
               ([System.Drawing.Imaging.Encoder]::Quality), 84
$bmp.Save("D:\Claude\Web\public\images\projects\NAME.jpg", $codec, $ep)
$g.Dispose(); $bmp.Dispose(); $src.Dispose()
```

Look at the result before shipping it. A centred crop can cut something that matters, such as a HUD
element at the edge of a game screenshot, and it is quicker to change `$cropX` than to notice it
later on the live site.

### 3. The CV

Done, the real CV is in place. To swap it again later, replace `public/cv.pdf` and keep the
filename. Both Download CV buttons pick it up with no code change. If you would rather name it
something else, change `cvPath` at the bottom of `src/data/profile.js` to match.

### 4. Your GitHub username and the live URL

Done already: `src/data/profile.js` (the GitHub contact row, now a live link) and `index.html`
(`og:url` and `canonical`, both pointing at the live URL).

Nothing left to do in `src/data/projects.js`. **No link on the site points at `PLACEHOLDER_URL` any
more**, so the "To come" state is not currently visible anywhere. Keep the constant and the
sentinel behaviour in place regardless, because the next project added will need it.

**Every linked repository was verified public before its link went in**, with the `curl` check
above. `danilopace1-cyber/BorderBreak-Showcase`, `OtherWorldly-Showcase`, `PTgo` and `portfolio`
all return `200`. If you ever make one private again, put its `href` back to `PLACEHOLDER_URL` in
the same commit, or the site sends a recruiter to a 404.

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
