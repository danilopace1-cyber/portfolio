import SectionHead from '../components/SectionHead.jsx'
import { contactLinks, profile, cvPath } from '../data/profile.js'
import { asset } from '../lib/asset.js'
import usePageMeta from '../lib/usePageMeta.js'
import styles from './Contact.module.css'

export default function Contact() {
  usePageMeta(
    'Contact',
    'Get in touch with Danilo Pace, trainee software engineer in London. Email, LinkedIn and GitHub.'
  )

  return (
    <>
      <SectionHead title="Contact" meta={profile.location} as="h1" />

      <p className={styles.lede}>
        Email is the fastest way to reach me and I reply to everything. I am open to junior and
        graduate software engineering roles in London, and happy to talk about anything on this
        site.
      </p>

      {/* The response coupon at the foot of the advertisement. */}
      <div className={styles.coupon}>
        <p className={styles.couponStrip}>Reply to</p>

        <ul className={styles.links}>
          {contactLinks.map((item) => {
            const isExternal = item.href.startsWith('http')

            /* A pending address is rendered as plain text. Making it clickable
               would send a recruiter to a page that does not exist. */
            if (item.pending) {
              return (
                <li key={item.label}>
                  <span className={`${styles.link} ${styles.linkPending}`}>
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkValue}>{item.value}</span>
                    <span className={styles.pendingTag}>To come</span>
                  </span>
                </li>
              )
            }

            return (
              <li key={item.label}>
                <a
                  className={styles.link}
                  href={item.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.linkLabel}>{item.label}</span>
                  <span className={styles.linkValue}>{item.value}</span>
                  {isExternal ? (
                    <span className="visually-hidden"> opens in a new tab</span>
                  ) : null}
                  <span className={styles.linkArrow} aria-hidden="true">
                    {isExternal ? '↗' : '→'}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className={styles.couponFoot}>
          <a className="btn btn--accent" href={asset(cvPath)} download>
            Download CV
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </>
  )
}
