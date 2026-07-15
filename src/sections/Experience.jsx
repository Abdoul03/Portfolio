export default function Experience({ data, t, u }) {
  return (
    <div className="tp-view tp-section">
      <div className="tp-cmd">$ history --work</div>
      <h2 className="tp-h2">{u.exp}</h2>
      <div className="tp-timeline">
        <div className="tp-timeline-line" />
        {data.experience.map((e, i) => (
          <div className="tp-exp" key={i}>
            <span className="tp-exp-dot" />
            <div className="tp-exp-card">
              <div className="tp-exp-head">
                <h3>{t(e.role)}</h3>
                <span className="tp-exp-period">{t(e.period)}</span>
              </div>
              <div className="tp-exp-org">{e.org} · {e.place}</div>
              <p>{t(e.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
