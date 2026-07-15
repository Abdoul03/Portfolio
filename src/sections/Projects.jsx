export default function Projects({ data, t, u, lang, accent }) {
  const p = data.profile
  const contribChart = `https://ghchart.rshah.org/${accent.replace('#', '')}/Abdoul03`
  const contribLabel = lang === 'fr' ? 'Voir mon profil GitHub' : 'View my GitHub profile'
  const contribTitle = lang === 'fr' ? 'Activité GitHub · année écoulée' : 'GitHub activity · past year'

  return (
    <div className="tp-view tp-section">
      <div className="tp-cmd">$ git log --projects</div>
      <h2 className="tp-h2">{u.projects}</h2>

      <a className="tp-contrib" href={p.github} target="_blank" rel="noreferrer">
        <div className="tp-contrib-head">
          <div className="tp-contrib-title">
            <span className="prompt">$</span> git log --graph ·{' '}
            <span className="name">{contribTitle}</span>
          </div>
          <span className="tp-contrib-label">{contribLabel} ↗</span>
        </div>
        <div className="tp-contrib-chart">
          <img src={contribChart} alt="GitHub contributions — Abdoul03" referrerPolicy="no-referrer" />
        </div>
      </a>

      <div className="tp-grid-2">
        {data.projects.map((pr) => (
          <a className="tp-project" href={pr.url} target="_blank" rel="noreferrer" key={pr.name}>
            <div className="tp-project-head">
              <div className="tp-project-meta">
                <span className="tp-project-lang">{pr.lang}</span>
                <span className="tp-project-stack">{pr.stack}</span>
              </div>
              <span className="tp-project-arrow">↗</span>
            </div>
            <h3>{pr.name}</h3>
            <p>{t(pr.desc)}</p>
            <div className="tp-project-tags">
              {pr.tags.map((tag) => (
                <span className="tp-project-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
