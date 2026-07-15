import { useState, useCallback, useMemo } from 'react'
import PORTFOLIO from './data/portfolio.js'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'

const NAV_ORDER = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

const ACCENTS = ['#f78166', '#4fd1c5', '#7ee787', '#a78bfa']

const VIEWS = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  education: Education,
  contact: Contact,
}

export default function App() {
  const [view, setView] = useState('home')
  const [lang, setLang] = useState('fr')
  const [accent, setAccent] = useState('#f78166')

  // Bilingual picker: returns the value for the current language, falling back to fr.
  const t = useCallback(
    (o) => (o ? (o[lang] != null ? o[lang] : o.fr) : ''),
    [lang],
  )

  const toggleLang = useCallback(
    () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
    [],
  )

  const d = PORTFOLIO
  const u = useMemo(
    () => ({
      viewProjects: t(d.ui.viewProjects),
      downloadCv: t(d.ui.downloadCv),
      viewCode: t(d.ui.viewCode),
      about: t(d.ui.sectionAbout),
      skills: t(d.ui.sectionSkills),
      projects: t(d.ui.sectionProjects),
      exp: t(d.ui.sectionExp),
      edu: t(d.ui.sectionEdu),
      contact: t(d.ui.sectionContact),
      contactLead: t(d.ui.contactLead),
      formName: t(d.ui.formName),
      formEmail: t(d.ui.formEmail),
      formMsg: t(d.ui.formMsg),
      formSend: t(d.ui.formSend),
      formSent: t(d.ui.formSent),
      languagesTitle: t(d.ui.languagesTitle),
      scrollHint: t(d.ui.scrollHint),
      available: t(d.profile.available),
    }),
    [t, d],
  )

  const ViewComponent = VIEWS[view]

  return (
    <div className="terminal" style={{ '--acc': accent }}>
      {/* terminal top bar */}
      <div className="tp-topbar">
        <div className="tp-dots">
          <span className="tp-dot red" />
          <span className="tp-dot yellow" />
          <span className="tp-dot green" />
        </div>
        <div className="tp-prompt">abdoul@portfolio:~$ ./run</div>
        <div className="tp-topbar-right">
          <div className="tp-available">
            <span className="tp-available-dot" />
            {u.available}
          </div>
          <button className="tp-lang-btn" onClick={toggleLang}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>

      {/* nav */}
      <nav className="tp-nav">
        {NAV_ORDER.map((id) => (
          <button
            key={id}
            className={`tp-nav-btn${view === id ? ' active' : ''}`}
            onClick={() => setView(id)}
          >
            <span className="tp-nav-slash">./</span>
            {t(d.ui.nav[id])}
            {view === id && <span className="tp-nav-underline" />}
          </button>
        ))}
      </nav>

      {/* content */}
      <div className="tp-content tp-scroll">
        <div className="tp-grid-bg" />
        <div className="tp-glow-blob" />
        <ViewComponent
          key={view}
          data={d}
          t={t}
          u={u}
          lang={lang}
          accent={accent}
          goProjects={() => setView('projects')}
        />
      </div>

      {/* accent theme switcher */}
      <div className="tp-theme" role="group" aria-label="Accent color">
        {ACCENTS.map((c) => (
          <button
            key={c}
            className={`tp-swatch${accent === c ? ' active' : ''}`}
            style={{ background: c }}
            onClick={() => setAccent(c)}
            aria-label={`Accent ${c}`}
          />
        ))}
      </div>
    </div>
  )
}
