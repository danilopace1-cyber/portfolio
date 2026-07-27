import SectionHead from '../components/SectionHead.jsx'
import { profile, skills, certifications, education, experience } from '../data/profile.js'
import usePageMeta from '../lib/usePageMeta.js'
import styles from './About.module.css'

export default function About() {
  usePageMeta(
    'About',
    'Danilo Pace: BSc Computer Games Programming at Kingston University London, two years as an IT support technician, now moving into software engineering full time.'
  )

  return (
    <>
      <SectionHead title="About" as="h1" />

      <div className={`prose ${styles.story}`}>
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <section className={styles.section} aria-labelledby="record-heading">
        <SectionHead title="Record" as="h2" id="record-heading" />

        <dl className={styles.rows}>
          <div className={styles.row}>
            <dt className={styles.rowLabel}>Education</dt>
            <dd className={styles.rowValue}>
              <span className={styles.rowPrimary}>{education.qualification}</span>
              <span className={styles.rowSecondary}>
                {education.institution}, {education.year}
              </span>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.rowLabel}>Experience</dt>
            <dd className={styles.rowValue}>
              <span className={styles.rowPrimary}>{experience.role}</span>
              <span className={styles.rowSecondary}>{experience.dates}</span>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.rowLabel}>Languages</dt>
            <dd className={styles.rowValue}>
              <span className={styles.rowPrimary}>Italian and English</span>
              <span className={styles.rowSecondary}>Bilingual</span>
            </dd>
          </div>

          <div className={styles.row}>
            <dt className={styles.rowLabel}>Based in</dt>
            <dd className={styles.rowValue}>
              <span className={styles.rowPrimary}>London, UK</span>
            </dd>
          </div>
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="skills-heading">
        <SectionHead title="Skills" as="h2" id="skills-heading" />

        <dl className={styles.rows}>
          {skills.map((group) => (
            <div className={styles.row} key={group.label}>
              <dt className={styles.rowLabel}>{group.label}</dt>
              <dd className={styles.rowValue}>
                <ul className={styles.tags}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="certs-heading">
        <SectionHead title="Certifications" as="h2" id="certs-heading" />

        <ul className={styles.certs}>
          {certifications.map((cert) => (
            <li className={styles.cert} key={cert.name}>
              <div className={styles.certMain}>
                <p className={styles.certName}>{cert.name}</p>
                <p className={styles.certIssuer}>
                  {cert.issuer}
                  {cert.date ? `, ${cert.date}` : ''}
                </p>
              </div>
              <span className={`chip ${cert.status === 'In progress' ? 'chip--live' : ''}`}>
                {cert.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
