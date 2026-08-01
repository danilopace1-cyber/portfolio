import CopyButton from './CopyButton.jsx'
import { contactLinks, profile } from '../data/profile.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.block}>
          <p className={styles.name}>{profile.name}</p>
          <p className="mono">{profile.headline}</p>
        </div>

        <div className={styles.block}>
          <h2 className="mono mono--ink">Contact</h2>
          <ul className={styles.links}>
            {contactLinks.map((item) => (
              <li key={item.label}>
                {item.copy ? (
                  /* Not a link. See the note on the email row in profile.js. */
                  <div className={`${styles.link} ${styles.linkStatic}`}>
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkValue}>{item.value}</span>
                    <CopyButton value={item.value} label="email address" />
                  </div>
                ) : item.pending ? (
                  <span className={`${styles.link} ${styles.linkPending}`}>
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkValue}>{item.value}</span>
                  </span>
                ) : (
                  <a
                    className={styles.link}
                    href={item.href}
                    {...(item.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkValue}>{item.value}</span>
                    {item.href.startsWith('http') ? (
                      <span className="visually-hidden"> opens in a new tab</span>
                    ) : null}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.colophon}`}>
        <p className="mono">Built with React and plain CSS. No UI framework.</p>
        <p className="mono">© {new Date().getFullYear()} Danilo Pace</p>
      </div>
    </footer>
  )
}
