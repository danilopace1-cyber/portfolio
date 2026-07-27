import { NavLink, Link } from 'react-router-dom'
import { profile } from '../data/profile.js'
import styles from './Header.module.css'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/uni-projects', label: 'Uni Projects' },
  { to: '/personal-projects', label: 'Personal Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className={styles.masthead}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.wordmark}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.role}>{profile.headline}</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
