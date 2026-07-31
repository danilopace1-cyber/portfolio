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
 *   status   'Completed' or 'In development'. Anything set to 'In development'
 *            gets the accent chip, everything else gets a plain outline chip.
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
    title: 'OtherWordly',
    role: 'Solo project',
    year: '2022',
    status: 'Completed',
    summary:
      'A first person RPG built in Unity for a coursework module at Kingston. I wrote the quest, inventory, equipment, dialogue and enemy AI systems myself, and kept each script generic so one chest prefab could be placed all over the map and configured to drop different items. Enemies are triggered by game events rather than spawned on a timer, so the first skeletons only appear once the player has opened the opening chest.',
    tech: ['Unity', 'C#'],
    image: 'images/projects/otherwordly.jpg',
    imageAlt:
      'A first person view across a grass field towards a stone castle, holding a sword, with two skeleton enemies ahead and a health bar and item hotbar along the bottom of the screen.',
    links: [
      // Repository pending. The project is still tied to the old university Git
      // remote, so this renders as an honest "To come" until it is rehosted.
      { label: 'Repository', href: PLACEHOLDER_URL },
    ],
  },
]

export const personalProjects = [
  {
    // PLACEHOLDER — replace with real content
    ref: 'PER-01',
    title: 'Workout Tracker',
    role: 'Solo project',
    year: '2025',
    status: 'In development',
    summary:
      'A React app for planning training sessions and tracking progress over time. It comes out of my own training, where I got tired of managing everything in a spreadsheet. I am building the exercise library and the progress views now.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image. Replace with a screenshot of the workout tracker.',
    links: [
      // PLACEHOLDER — replace with real content
      { label: 'Repository', href: PLACEHOLDER_URL },
    ],
  },
  {
    // PLACEHOLDER — replace with real content
    ref: 'PER-02',
    title: 'Meta Front-End Course Project',
    role: 'Solo project',
    year: '2025',
    status: 'Completed',
    summary:
      'A React front end built as part of the Meta Front-End Developer Professional Certificate. It covers component structure, form handling and validation, responsive layout, and writing markup that works for screen readers.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image. Replace with a screenshot of the Meta course project.',
    links: [
      // PLACEHOLDER — replace with real content
      { label: 'Repository', href: PLACEHOLDER_URL },
      { label: 'Live demo', href: PLACEHOLDER_URL },
    ],
  },
]
