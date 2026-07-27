import SectionHead from './SectionHead.jsx'
import ProjectEntry from './ProjectEntry.jsx'
import usePageMeta from '../lib/usePageMeta.js'
import styles from './ProjectListPage.module.css'

/**
 * Both project pages render through this, so the university and personal
 * listings are laid out identically and stay comparable at a glance.
 */
export default function ProjectListPage({ title, intro, projects, documentTitle, description }) {
  usePageMeta(documentTitle, description)

  const count = projects.length

  return (
    <>
      <SectionHead
        title={title}
        meta={`${count} ${count === 1 ? 'entry' : 'entries'}`}
        as="h1"
      />

      <p className={styles.intro}>{intro}</p>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <ProjectEntry key={project.ref} project={project} index={index} />
        ))}
      </div>
    </>
  )
}
