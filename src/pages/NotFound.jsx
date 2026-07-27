import { Link } from 'react-router-dom'
import SectionHead from '../components/SectionHead.jsx'
import usePageMeta from '../lib/usePageMeta.js'
import styles from './NotFound.module.css'

export default function NotFound() {
  usePageMeta('Page not found', 'That page does not exist on Danilo Pace’s portfolio.')

  return (
    <>
      <SectionHead title="Page not found" meta="Error 404" as="h1" />

      <p className={styles.lede}>
        That page does not exist. It may have been renamed, or the link that brought you here may be
        out of date.
      </p>

      <div className={styles.actions}>
        <Link className="btn btn--accent" to="/">
          Back to home
        </Link>
        <Link className="btn btn--plain" to="/contact">
          Contact
        </Link>
      </div>
    </>
  )
}
