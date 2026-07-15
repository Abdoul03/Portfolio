import { useState } from 'react'

export default function Contact({ data, u }) {
  const p = data.profile
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Build a pre-filled mailto so the message is genuinely ready to send.
    const subject = encodeURIComponent(`Portfolio — ${form.name || 'Contact'}`)
    const body = encodeURIComponent(
      `${form.msg}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    )
    window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <div className="tp-view tp-section">
      <div className="tp-cmd">$ ./contact --send</div>
      <h2 className="tp-h2">{u.contact}</h2>
      <div className="tp-contact-grid">
        <div>
          <p className="tp-contact-lead">{u.contactLead}</p>
          <div className="tp-contact-list">
            <a className="tp-contact-item" href={`mailto:${p.email}`}>
              <span className="tp-contact-icon">✉</span>
              <span><span className="tp-contact-label">EMAIL</span>{p.email}</span>
            </a>
            <div className="tp-contact-item">
              <span className="tp-contact-icon">☎</span>
              <span><span className="tp-contact-label">TÉL</span>{p.phone}</span>
            </div>
            <a className="tp-contact-item" href={p.github} target="_blank" rel="noreferrer">
              <span className="tp-contact-icon mono">GH</span>
              <span><span className="tp-contact-label">GITHUB</span>github.com/Abdoul03</span>
            </a>
            <a className="tp-contact-item" href={p.linkedin} target="_blank" rel="noreferrer">
              <span className="tp-contact-icon mono">in</span>
              <span><span className="tp-contact-label">LINKEDIN</span>linkedin.com/in/doul</span>
            </a>
          </div>
        </div>
        <form className="tp-form" onSubmit={onSubmit}>
          <input
            className="tp-input"
            placeholder={u.formName}
            value={form.name}
            onChange={update('name')}
          />
          <input
            className="tp-input"
            type="email"
            placeholder={u.formEmail}
            value={form.email}
            onChange={update('email')}
          />
          <textarea
            className="tp-textarea"
            placeholder={u.formMsg}
            rows={4}
            value={form.msg}
            onChange={update('msg')}
          />
          <button className="tp-form-btn" type="submit">{u.formSend} →</button>
          {sent && <div className="tp-form-sent">✓ {u.formSent}</div>}
        </form>
      </div>
    </div>
  )
}
