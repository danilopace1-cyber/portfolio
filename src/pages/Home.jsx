import { Link } from 'react-router-dom'
import SectionHead from '../components/SectionHead.jsx'
import { profile, skills, certifications, education, experience, cvPath } from '../data/profile.js'
import { uniProjects, personalProjects } from '../data/projects.js'
import { asset } from '../lib/asset.js'
import usePageMeta from '../lib/usePageMeta.js'
import styles from './Home.module.css'

const SECTIONS = [
  {
    to: '/uni-projects',
    title: 'Uni Projects',
    blurb: 'Work from my BSc in Computer Games Programming. Unity, Unreal Engine, C++ and C#.',
    count: uniProjects.length,
  },
  {
    to: '/personal-projects',
    title: 'Personal Projects',
    blurb: 'What I am building outside university, mostly in React.',
    count: personalProjects.length,
  },
]

export default function Home() {
  // Pass the real headline, not null. A null title collapses the tab, the
  // bookmark and the history entry to the bare name, losing the role and the
  // location on the one page every recruiter opens.
  usePageMeta(
    profile.headline,
    'Danilo Pace is a trainee software engineer in London. BSc Computer Games Programming, two years as an IT support technician, now building with C++, C# and React.'
  )

  const certsInProgress = certifications.filter((c) => c.status === 'In progress').length

  return (
    <>
      <h1 className="visually-hidden">
        {profile.name}, {profile.headline}
      </h1>

      {/* The display advertisement. Everything a recruiter needs in one box. */}
      <section className={styles.ad} aria-label="Introduction">
        <p className={styles.adStrip}>
          <span>{profile.reference}</span>
          <span>{profile.location}</span>
        </p>

        <p className={styles.name} aria-hidden="true">
          {profile.name}
        </p>

        <hr className={styles.adRule} />

        <div className={styles.adBody}>
          <div className={styles.adHead}>
            <p className={styles.headline}>{profile.headline}</p>
            <p className={styles.stampRow}>
              <span className="stamp">{profile.availability}</span>
            </p>
          </div>

          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.actions}>
            <a className="btn btn--accent" href={asset(cvPath)} download>
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
            <Link className="btn btn--plain" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* The screening filter, answered before anyone has to scroll twice. */}
      <section className={styles.section} aria-labelledby="glance-heading">
        <SectionHead title="At a glance" as="h2" id="glance-heading" />

        <dl className={styles.glance}>
          {skills.map((group) => (
            <div className={styles.row} key={group.label}>
              <dt className={styles.rowLabel}>{group.label}</dt>
              <dd className={styles.rowValue}>{group.items.join(', ')}</dd>
            </div>
          ))}

          <div className={styles.row}>
            <dt className={styles.rowLabel}>Education</dt>
            <dd className={styles.rowValue}>
              {education.qualification}, {education.institution}, {education.year}
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.rowLabel}>Experience</dt>
            <dd className={styles.rowValue}>
              {experience.role}, {experience.dates}
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.rowLabel}>Certifications</dt>
            <dd className={styles.rowValue}>
              {certifications.length} total, {certsInProgress} in progress.{' '}
              <Link className="link" to="/about">
                Full list on About
              </Link>
            </dd>
          </div>
        </dl>
      </section>

      {/* The listing sections, as a classifieds index. */}
      <section className={styles.section} aria-labelledby="index-heading">
        <SectionHead title="Projects" as="h2" id="index-heading" />

        <ul className={styles.index}>
          {SECTIONS.map((section) => (
            <li key={section.to}>
              <Link className={styles.indexRow} to={section.to}>
                <span className={styles.indexMain}>
                  <span className={styles.indexTitle}>{section.title}</span>
                  <span className={styles.indexBlurb}>{section.blurb}</span>
                </span>
                <span className={styles.indexMeta}>
                  <span className={styles.indexCount}>
                    {section.count} {section.count === 1 ? 'entry' : 'entries'}
                  </span>
                  <span className={styles.indexArrow} aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
