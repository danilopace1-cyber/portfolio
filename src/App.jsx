import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import UniProjects from './pages/UniProjects.jsx'
import PersonalProjects from './pages/PersonalProjects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import styles from './App.module.css'

export default function App() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const firstRender = useRef(true)

  // A client-side route change does not move the viewport or the screen reader's
  // position on its own, so a visitor navigating from the foot of a long page
  // would land halfway down the next one. Reset both, but not on first paint,
  // where stealing focus would be wrong.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus()
  }, [pathname])

  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" ref={mainRef} tabIndex={-1} className={`container ${styles.main}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uni-projects" element={<UniProjects />} />
          <Route path="/personal-projects" element={<PersonalProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
