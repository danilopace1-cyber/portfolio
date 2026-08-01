import CopyButton from '../components/CopyButton.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { contactLinks, profile, cvPath } from '../data/profile.js'
import { asset } from '../lib/asset.js'
import usePageMeta from '../lib/usePageMeta.js'
import styles from './Contact.module.css'

export default function Contact() {
  usePageMeta(
    'Contact',
    'Get in touch with Danilo Pace, software and IT professional in London. Email, LinkedIn and GitHub.'
  )

  return (
    <>
      <SectionHead title="Contact" meta={profile.location} as="h1" />

      <p className={styles.lede}>
        Email is the fastest way to reach me and I reply to everything. I am open to junior and
        graduate roles in software, support and project work in London, and happy to talk about
        anything on this site.
      </p>

      {/* The response coupon at the foot of the advertisement. */}
      <div className={styles.coupon}>
        <p className={styles.couponStrip}>Reply to</p>

        <ul className={styles.links}>
          {contactLinks.map((item) => {
            const isExternal = Boolean(item.href) && item.href.startsWith('http')

            /* A copy row is not a link, so the row does not fill on hover and
               carries no arrow. The value stays selectable text and the button
               is the shortcut. See the note in profile.js. */
            if (item.copy) {
              return (
                <li key={item.label}>
                  <div className={`${styles.link} ${styles.linkStatic}`}>
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkValue}>{item.value}</span>
                    <CopyButton value={item.value} label="email address" />
                  </div>
                </li>
              )
            }

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
