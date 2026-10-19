import { useRef, useState } from 'react'
import { profile, contact } from '../data/content.js'
import { useScrollAnim } from '../hooks/useScrollAnim.js'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  useScrollAnim(ref)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="contact-aura" aria-hidden="true" />
      <div className="contact-grid-lines" aria-hidden="true" />

      <div className="container contact-inner">
        <div className="section-label" data-anim="up">
          <span className="micro">
            <span className="no">04</span> — 联系我 / Contact
          </span>
        </div>

        <h2 className="contact-title" data-anim="title">
          让我们一起，
          <br />
          把增长做成<span className="hl">作品</span>。
        </h2>

        <p className="contact-sub" data-anim="up">
          目前正在寻找 <b>内容运营 / 用户运营 / 产品运营</b> 方向的实习与工作机会。
          如果你也想找一位能写会聊、懂数据、能落地的运营伙伴，期待与你聊聊。
        </p>

        <div className="contact-actions" data-anim="up">
          <a className="contact-mail-btn" href={`mailto:${contact.email}`}>
            <span className="micro">Say Hello</span>
            <b>{contact.email}</b>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button className={`copy-btn ${copied ? 'ok' : ''}`} onClick={copyEmail}>
            {copied ? '已复制到剪贴板 ✓' : '复制邮箱地址'}
          </button>
        </div>

        <div className="contact-meta" data-anim="up">
          <div className="meta-item">
            <span className="micro">Phone</span>
            <b>{contact.phone}</b>
          </div>
          <span className="meta-div" />
          <div className="meta-item">
            <span className="micro">WeChat</span>
            <b>{contact.wechat}</b>
          </div>
          <span className="meta-div" />
          <div className="meta-item">
            <span className="micro">City</span>
            <b>{contact.city}</b>
          </div>
          <span className="meta-div" />
          <div className="meta-item">
            <span className="micro">Status</span>
            <b className="ok">{profile.availability}</b>
          </div>
        </div>

        <footer className="footer">
          <span>© 2026 {profile.name} · {profile.nameEn}</span>
          <span className="footer-built">React + Vite 构建 · AI 辅助设计与开发</span>
        </footer>
      </div>
    </section>
  )
}
