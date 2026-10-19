import { useRef } from 'react'
import { profile, contact, stats, timeline } from '../data/content.js'
import { useScrollAnim } from '../hooks/useScrollAnim.js'
import './About.css'

export default function About() {
  const ref = useRef(null)
  useScrollAnim(ref)

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="about-grid container">
        {/* —— 左列：联系卡 —— */}
        <div className="about-side" data-anim="stagger">
          <div className="contact-card glass">
            <p className="micro contact-card-title">Contact · 联系方式</p>
            <ul>
              <li>
                <span className="micro">邮箱</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="micro">电话</span>
                <b>{contact.phone}</b>
              </li>
              <li>
                <span className="micro">微信</span>
                <b>{contact.wechat}</b>
              </li>
              <li>
                <span className="micro">城市</span>
                <b>{contact.city}</b>
              </li>
            </ul>
          </div>
        </div>

        {/* —— 右列：介绍 + 数据 + 经历 —— */}
        <div className="about-main">
          <div className="section-label" data-anim="up">
            <span className="micro">
              <span className="no">01</span> — 关于我 / About
            </span>
          </div>

          <h2 className="h2" data-anim="title">
            {profile.aboutTitle[0]}
            <br />
            <span className="grad">{profile.aboutTitle[1]}</span>
          </h2>

          <div className="about-paras" data-anim="up">
            {profile.aboutParas.map((p, i) => (
              <p key={i} className="lead">{p}</p>
            ))}
          </div>

          {/* 项目数据 */}
          <div className="stats" data-anim="stagger">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>
                  {s.value}
                  <i>{s.suffix}</i>
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* 经历时间线 */}
          <div className="timeline" data-anim="up">
            <p className="micro timeline-title">Experience · 经历</p>
            <ul>
              {timeline.map((t) => (
                <li key={t.title}>
                  <span className="period micro">{t.period}</span>
                  <span className="dot" aria-hidden="true" />
                  <div className="tl-body">
                    <b>{t.title}</b>
                    <em>{t.tag}</em>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
