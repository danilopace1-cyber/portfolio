/**
 * ============================================================================
 * ALL PROJECT CONTENT LIVES HERE.
 * ============================================================================
 *
 * Nothing in src/components or src/pages needs to change when you edit this
 * file. Add, remove or reorder entries freely and the pages follow.
 *
 * Every field:
 *
 *   ref      Short reference code shown in the listing, like 'UNI-01'. Keep them
 *            unique, they are used as React keys.
 *   title    The project name.
 *   role     Optional. Your role, shown next to the year. Leave out if not useful.
 *   year     Shown in the meta column. A string, so '2023' or '2024 – 2025' both work.
 *   status   'Completed', 'In development' or 'On hold'. Anything set to
 *            'In development' gets the accent chip, everything else gets a
 *            plain outline chip, which is what a paused project should read as.
 *   summary  Two or three sentences. Plain and direct. No em dashes, no semicolons.
 *   tech     Array of tech tags, shown as a ruled STACK row.
 *   image    Path relative to /public. Swap the placeholder for a real screenshot.
 *   imageAlt Describe what the screenshot actually shows. Do not write 'screenshot of'.
 *   links    Array of { label, href }. Omit the array or leave it empty for none.
 *            Typical labels: 'Repository', 'Live demo', 'Video'.
 *
 * TO REPLACE A SCREENSHOT: drop the file into public/images/projects/ and point
 * `image` at it, for example 'images/projects/workout-tracker.png'. A 16:10 image
 * around 1200px wide looks right.
 */

/**
 * Two sentinels. While a link or an image still points at one of these, the UI
 * renders it as a visibly unfinished placeholder rather than as a working link
 * or a described screenshot. That stops the site from sending a recruiter to a
 * GitHub 404, which costs more credibility than showing nothing at all.
 *
 * Replace the value on an entry and it becomes a real link automatically. There
 * is no flag to remember to flip.
 */
export const PLACEHOLDER_URL = 'https://github.com/your-username'
export const PLACEHOLDER_IMAGE = 'images/projects/placeholder.svg'

export const uniProjects = [
  {
    ref: 'UNI-01',
    title: 'BorderBreak',
    role: 'Solo project',
    year: '2023',
    status: 'Completed',
    summary:
      'An open world action RPG built in Unreal Engine 5 for my final year project at Kingston. I built the combat, progression, equipment, dialogue and quest systems, and wired them so that levelling unlocks an ability but an NPC still has to teach it, which gives the player a reason to travel. The enemy spawner hides AI actors when the player leaves a zone rather than destroying them, so enemies never appear out of thin air.',
    tech: ['Unreal Engine 5', 'Blueprints', 'Git LFS'],
    image: 'images/projects/borderbreak.jpg',
    imageAlt:
      'A knight in gold trimmed plate armour stands in a misty graveyard beside a second armoured figure, with a quest prompt titled Head of the Empire open along the bottom of the screen.',
    links: [{ label: 'Repository', href: 'https://github.com/danilopace1-cyber/BorderBreak-Showcase' }],
  },
  {
    ref: 'UNI-02',
    title: 'OtherWorldly',
    role: 'Solo project',
    year: '2022',
    status: 'Completed',
    summary:
      'A first person RPG built in Unity for a coursework module at Kingston, and later built to run on PlayStation 5. I wrote the quest, inventory, equipment, dialogue and enemy AI systems myself, and kept each script generic so one chest prefab could be placed all over the map and configured to drop different items. Enemies are triggered by game events rather than spawned on a timer, so the first skeletons only appear once the player has opened the opening chest.',
    tech: ['Unity', 'C#', 'PlayStation 5'],
    image: 'images/projects/otherworldly.jpg',
    imageAlt:
      'A first person view across a grass field towards a stone castle, holding a sword, with two skeleton enemies ahead and a health bar and item hotbar along the bottom of the screen.',
    // Showcase repository, not the full Unity project. The working project
    // carries licensed asset pack content and console build output, neither of
    // which can be republished, so the repo holds the gameplay code, which is
    // the part worth reading anyway.
    links: [{ label: 'Repository', href: 'https://github.com/danilopace1-cyber/OtherWorldly-Showcase' }],
  },
]

export const personalProjects = [
  {
    ref: 'PER-01',
    title: 'Tally',
    role: 'Solo project',
    year: '2026',
    status: 'In development',
    // Danilo's own copy, used as written. It leads on what the thing does for
    // the person reading off it rather than on how it is built, which is the
    // right call for this entry: the stack row below already says JavaScript
    // and Web Speech API, so the summary does not need to.
    summary:
      'Tally scrolls your script as you speak, so you never lose your place or have to rush to keep up. You can use a set speed, voice-follow, or both together for the smoothest read. It’s built for tablets and kept deliberately simple, and your scripts stay on your device. It’s being tested in real filming sessions, with a native app on the way.',
    tech: ['JavaScript', 'Web Speech API', 'HTML', 'CSS', 'GitHub Pages'],
    // The logo, not a screenshot, and deliberately so for now. The real capture
    // is still in the repo at images/projects/tally.jpg and shows the app's
    // status bar, which currently carries an older working name for the
    // project. Rather than ship a screenshot that disagrees with the heading
    // above it, the entry runs the symbol until the name is settled. Point
    // `image` back at tally.jpg to restore the screenshot.
    image: 'images/projects/tally-logo.svg',
    // Describes the mark, because that is what is actually on screen. The old
    // alt described the screenshot and would have been a lie about this file.
    imageAlt:
      'The Tally logo. A bold letter T whose upright doubles as the left edge of three stacked bars suggesting lines of script, with a play triangle at the end of the bottom bar.',
    links: [
      { label: 'Live demo', href: 'https://danilopace1-cyber.github.io/Tally/' },
      { label: 'Repository', href: 'https://github.com/danilopace1-cyber/Tally' },
    ],
  },
  {
    ref: 'PER-02',
    title: 'PTgo',
    role: 'Solo project',
    year: '2026',
    status: 'On hold',
    summary:
      'A workout tracker built around the personal trainer and client relationship, written in React Native with a Postgres backend where the trainer and client permissions are enforced by row level security. Trainers keep a library of reusable workouts and assign them to a client as a weekly schedule, and the client logs their sets against it. Assigning copies the workout instead of linking to it, so editing one in the library never changes a plan a client is already following.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
    // PLACEHOLDER — the app has no settled UI to photograph yet. Once a screen
    // is worth showing, drop a 1200x750 JPEG into public/images/projects/ and
    // write a real imageAlt. Until then the sentinel renders a neutral graphic
    // with an empty alt, which is honest.
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image. Replace with a screenshot of PTgo.',
    links: [{ label: 'Repository', href: 'https://github.com/danilopace1-cyber/PTgo' }],
  },
  {
    ref: 'PER-03',
    title: 'This Site',
    role: 'Solo project',
    year: '2026',
    status: 'Completed',
    summary:
      'The portfolio you are reading. I built it in React with plain CSS, no Tailwind and no component library, so the site is a sample of the work as well as a description of it. GitHub Pages is a static host with no server side routing, so a redirect file catches deep links and hands the path back to the router, which means a pasted link survives a hard refresh instead of landing on a 404.',
    tech: ['React', 'Vite', 'React Router', 'CSS', 'GitHub Actions'],
    // No `image` on purpose, which drops the media well and runs the text full
    // width. A screenshot of this page, on this page, is a joke the reader has
    // to work out, and a placeholder well would claim a screenshot is missing
    // when it is not. The repository link is the proof for this one.
    //
    // Repository only. A "Live demo" link would point at the page they are
    // already standing on.
    links: [{ label: 'Repository', href: 'https://github.com/danilopace1-cyber/portfolio' }],
  },
]
