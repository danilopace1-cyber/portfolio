import { asset } from '../lib/asset.js'
import { PLACEHOLDER_URL, PLACEHOLDER_IMAGE } from '../data/projects.js'
import styles from './ProjectEntry.module.css'

/**
 * One ruled listing entry. Identical markup for university and personal
 * projects so the two pages stay directly comparable, which is the whole point
 * of a classifieds section.
 */
export default function ProjectEntry({ project, index }) {
  const { ref, title, role, year, status, summary, tech, image, imageAlt, links } = project
  const isLive = status === 'In development'
  const isPlaceholderImage = image === PLACEHOLDER_IMAGE
  const titleId = `project-${ref}`

  return (
    <article className={styles.entry} aria-labelledby={titleId}>
      <div className={styles.media}>
        <img
          src={asset(image)}
          /* The placeholder graphic already reads PROJECT IMAGE on screen and
             carries no information, so it is decorative. Announcing the
             maintainer's "replace this" note to a screen reader would leak
             build scaffolding into the shipped site. */
          alt={isPlaceholderImage ? '' : imageAlt}
          width="800"
          height="500"
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className={styles.body}>
        <p className={styles.metaRow}>
          <span className={styles.ref}>{ref}</span>
          <span className={styles.metaBits}>
            <span>{year}</span>
            {role ? (
              <>
                <span aria-hidden="true">/</span>
                <span>{role}</span>
              </>
            ) : null}
          </span>
          <span className={`chip ${isLive ? 'chip--live' : ''}`}>{status}</span>
        </p>

        <h3 className={styles.title} id={titleId}>
          {title}
        </h3>

        <p className={styles.summary}>{summary}</p>

        <dl className={styles.fields}>
          <div className={styles.field}>
            <dt className={styles.fieldLabel}>Stack</dt>
            <dd className={styles.fieldValue}>
              <ul className={styles.tags}>
                {tech.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          {links && links.length > 0 ? (
            <div className={styles.field}>
              <dt className={styles.fieldLabel}>Links</dt>
              <dd className={styles.fieldValue}>
                <ul className={styles.linkList}>
                  {links.map((link) => {
                    /* A link that still points at the sentinel is not a link.
                       Rendering it as one sends a recruiter to a 404, which
                       costs more than showing an honest gap. */
                    if (link.href === PLACEHOLDER_URL) {
                      return (
                        <li key={link.label} className={styles.linkPending}>
                          {link.label}
                          <span className={styles.pendingTag}>To come</span>
                        </li>
                      )
                    }

                    return (
                      <li key={link.label}>
                        <a
                          className={styles.link}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <span className="visually-hidden"> for {title}, opens in a new tab</span>
                          <span className={styles.linkArrow} aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  )
}
