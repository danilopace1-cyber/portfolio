import PixelMark from './PixelMark.jsx'
import styles from './SectionHead.module.css'

/**
 * The classifieds section header: a heavy rule, the section name, and an
 * optional count or note aligned right in the fixed field position.
 *
 * `as` lets a page use it as its h1 while inner sections use h2.
 */
export default function SectionHead({ title, meta, as: Tag = 'h1', id }) {
  return (
    <div className={styles.head}>
      <div className={styles.row}>
        <Tag className={styles.title} id={id}>
          <PixelMark className={styles.mark} />
          {title}
        </Tag>
        {meta ? <p className={styles.meta}>{meta}</p> : null}
      </div>
    </div>
  )
}
