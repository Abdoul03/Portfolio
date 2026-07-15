export default function Education({ data, t, u }) {
  return (
    <div className="tp-view tp-section">
      <div className="tp-cmd">$ cat education.json</div>
      <h2 className="tp-h2">{u.edu}</h2>
      <div className="tp-edu-list">
        {data.education.map((ed, i) => (
          <div className="tp-edu" key={i}>
            <div className="tp-edu-icon">🎓</div>
            <div>
              <div className="tp-edu-period">{t(ed.period)}</div>
              <h3>{t(ed.title)}</h3>
              <div className="tp-edu-school">{ed.school} · {ed.place}</div>
              {t(ed.note) && <div className="tp-edu-note">{t(ed.note)}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
