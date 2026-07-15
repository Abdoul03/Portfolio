export default function About({ data, t, u, lang }) {
  const paras = data.about[lang] || data.about.fr

  return (
    <div className="tp-view tp-section">
      <div className="tp-cmd">$ cat about.md</div>
      <h2 className="tp-h2">{u.about}</h2>
      <div className="tp-about-grid">
        <div>
          {paras.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="tp-stats">
            {data.stats.map((s, i) => (
              <div className="tp-stat" key={i}>
                <div className="tp-stat-value">{s.value}</div>
                <div className="tp-stat-label">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="tp-langs-card">
          <div className="tp-langs-title">{u.languagesTitle}</div>
          {data.languages.map((l, i) => (
            <div className="tp-lang-row" key={i}>
              <div className="tp-lang-head">
                <span className="tp-lang-name">{t(l.name)}</span>
                <span className="tp-lang-level">{t(l.level)}</span>
              </div>
              <div className="tp-lang-bar">
                <div className="tp-lang-fill" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
