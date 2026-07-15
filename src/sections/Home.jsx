import { useState } from 'react'

export default function Home({ data, t, u, goProjects }) {
  const p = data.profile
  const [imgOk, setImgOk] = useState(true)

  return (
    <div className="tp-view tp-home">
      <div>
        <div className="tp-home-cmd">$ whoami</div>
        <h1>{p.name}</h1>
        <div className="tp-home-role">
          <span>{t(p.role)}</span>
          <span className="tp-caret" />
        </div>
        <p className="tp-tagline">{t(p.tagline)}</p>
        <div className="tp-cta-row">
          <button className="tp-btn-primary" onClick={goProjects}>
            {u.viewProjects} →
          </button>
          <a className="tp-btn-ghost" href={p.cv} download>
            ↓ {u.downloadCv}
          </a>
        </div>
        <div className="tp-social">
          <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
          <span className="sep">/</span>
          <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="sep">/</span>
          <a href={`mailto:${p.email}`}>Email</a>
        </div>
      </div>

      <div className="tp-avatar-wrap">
        <div className="tp-ring-dashed" />
        <div className="tp-ring-solid" />
        <div className="tp-avatar">
          <span className="tp-avatar-initials">{p.initials}</span>
          {imgOk && (
            <img
              src={p.avatar}
              alt={p.name}
              referrerPolicy="no-referrer"
              onError={() => setImgOk(false)}
            />
          )}
        </div>
        <div className="tp-code-badge">
          <div><span className="kw">const</span> <span className="var">dev</span> = {'{'}</div>
          <div className="indent">stack: <span className="str">'full'</span>,</div>
          <div className="indent">loc: <span className="str">'Bamako'</span></div>
          <div>{'}'}</div>
        </div>
      </div>
    </div>
  )
}
