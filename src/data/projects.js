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
    // PLACEHOLDER — replace with real content
    ref: 'UNI-01',
    title: 'Unity Team Project',
    role: 'Team leader',
    year: '2023',
    status: 'Completed',
    summary:
      'A Unity game built by a small team of student developers, with me leading the project. I ran the full development lifecycle from planning through to release, set up the branching strategy, and kept the team unblocked week to week. Version control ran across GitHub and GitLab.',
    tech: ['Unity', 'C#', 'GitHub', 'GitLab'],
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image. Replace with a screenshot of the Unity team project.',
    links: [
      // PLACEHOLDER — replace with real content, or delete the entries you do not have
      { label: 'Repository', href: PLACEHOLDER_URL },
      { label: 'Video', href: PLACEHOLDER_URL },
    ],
  },
  {
    // PLACEHOLDER — replace with real content
    ref: 'UNI-02',
    title: 'Unreal Engine AI Project',
    role: 'Solo project',
    year: '2023',
    status: 'Completed',
    summary:
      'An Unreal Engine project written in C++, focused on AI systems and how the player interacts with them. I built the decision logic driving the AI agents, then profiled the interaction code and cut the work it was doing each frame.',
    tech: ['Unreal Engine', 'C++'],
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image. Replace with a screenshot of the Unreal Engine project.',
    links: [
      // PLACEHOLDER — replace with real content
      { label: 'Repository', href: PLACEHOLDER_URL },
    ],
  },
  {
    // PLACEHOLDER — replace with real content
    ref: 'UNI-03',
    title: 'Unity Gameplay Prototype',
    role: 'Solo project',
    year: '2022',
    status: 'Completed',
    summary:
      'A smaller Unity project built on my own to take one gameplay mechanic from idea to something playable. I wrote the core systems in C# and kept iterating on the controls until the movement felt right.',
    tech: ['Unity', 'C#'],
    image: PLACEHOLDER_IMAGE,
    imageAlt: 'Placeholder image. Replace with a screenshot of the Unity gameplay prototype.',
    links: [
      // PLACEHOLDER — replace with real content
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
