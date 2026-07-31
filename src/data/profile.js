/**
 * ============================================================================
 * PROFILE CONTENT: name, headline, intro, skills, certifications, contact.
 * ============================================================================
 *
 * Everything the site says about Danilo rather than about a project lives here.
 * Project entries live in src/data/projects.js.
 *
 * House style for all copy in this file: short sentences, plain words, no
 * buzzwords. Never use an em dash or a semicolon. En dashes are fine inside a
 * date range, for example 'Mar 2023 – Jul 2025'.
 */

export const profile = {
  name: 'Danilo Pace',
  headline: 'Trainee Software Engineer, London (UK)',
  reference: 'REF DP-2026',
  location: 'London, UK',
  availability: 'Open to junior and graduate roles',

  intro:
    'I build software with C++, C# and JavaScript. My degree is in computer games programming, and after it I spent over two years as an IT support technician solving real problems for real people. I am now moving into software engineering full time.',

  // The three paragraphs on the About page.
  about: [
    'I studied Computer Games Programming at Kingston University London and graduated in 2023. Games programming is a demanding way to learn software. You work close to the hardware, performance is never optional, and the thing you build has to hold a steady frame rate while a person is using it. That gave me strong fundamentals in C++ and C#, and the habit of profiling before guessing.',
    'From March 2023 to July 2025 I worked as an IT Support Technician. That is over two years of fixing things for people who needed them working, documenting what I did so the next person could follow it, and learning how technology actually behaves inside an organisation. It taught me to debug calmly under pressure and to explain a technical problem to someone who does not want a technical answer. Both matter as much in engineering as they do at a service desk.',
    'I am now moving into software engineering full time. I am working through the Meta Front-End Developer certificate and building projects in React alongside the C++ and C# I already know. I am bilingual in Italian and English, and I am based in London.',
  ],
}

// Shown as ruled label-and-value rows. Add or remove rows freely.
export const skills = [
  { label: 'Strongest', items: ['C++', 'C#', 'Unity'] },
  { label: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { label: 'Also', items: ['Python', 'C', 'PHP', 'Swift', 'PowerShell'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Unity', 'Unreal Engine', 'Xcode'] },
]

export const certifications = [
  {
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    status: 'In progress',
    date: 'Expected 2026',
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    status: 'Completed',
    date: '',
  },
  {
    name: 'CompTIA A+ Core 1',
    issuer: 'CompTIA',
    status: 'Completed',
    date: '',
  },
]

export const education = {
  qualification: 'BSc Computer Games Programming',
  institution: 'Kingston University London',
  year: '2023',
}

export const experience = {
  role: 'IT Support Technician',
  dates: 'Mar 2023 – Jul 2025',
}

export const contactLinks = [
  {
    label: 'Email',
    value: 'danilopace1@gmail.com',
    href: 'mailto:danilopace1@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/danilo-pace',
    href: 'https://www.linkedin.com/in/danilo-pace',
  },
  {
    // Live. To take this row offline again, add `pending: true` and it renders
    // as plain text instead of a link, so nobody clicks through to a 404.
    label: 'GitHub',
    value: 'github.com/danilopace1-cyber',
    href: 'https://github.com/danilopace1-cyber',
  },
]

// Path relative to /public. Replace public/cv.pdf with the real file and keep the name,
// or change the name here if you prefer something like 'danilo-pace-cv.pdf'.
export const cvPath = 'cv.pdf'
