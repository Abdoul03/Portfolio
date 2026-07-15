export default function Skills({ data, t, u }) {
  return (
    <div className="tp-view tp-section">
      <div className="tp-cmd">$ ls ./skills</div>
      <h2 className="tp-h2">{u.skills}</h2>
      <div className="tp-grid-2">
        {data.skills.map((g) => (
          <div className="tp-skill-card" key={g.key}>
            <div className="tp-skill-head">
              <span className="tp-skill-dot" />
              <span className="tp-skill-title">{t(g.title)}</span>
            </div>
            <div className="tp-skill-tags">
              {g.items.map((it) => (
                <span className="tp-tag" key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
