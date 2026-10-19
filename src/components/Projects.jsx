import { useRef } from 'react'
import { projects } from '../data/content.js'
import { useScrollAnim } from '../hooks/useScrollAnim.js'
import './Projects.css'

export default function Projects() {
  const ref = useRef(null)
  useScrollAnim(ref)

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="projects-head">
          <div className="section-label">
            <span className="micro">
              <span className="no">02</span> — 精选项目 / Selected Works
            </span>
          </div>
          <h2 className="h2" data-anim="title">
            项目是最好的<span className="grad">运营证明</span>
          </h2>
          <p className="lead head-lead" data-anim="up">
            三个从 0 到 1 的完整项目，覆盖内容运营、数据分析、用户增长与体验优化。
          </p>
        </div>

        <div className="project-list" data-anim="stagger">
          {projects.map((p, i) => (
            <article className={`project ${i % 2 ? 'reverse' : ''}`} key={p.no}>
              {/* 图像卡 */}
              <a className="project-visual" href="#contact" aria-label={`了解 ${p.name} 详情`}>
                <div className="visual-inner">
                  <img src={p.image} alt={`${p.name} 项目主视觉`} loading="lazy" data-anim="img" />
                  <span className="visual-glow" />
                  <span className="visual-no micro">{p.no}</span>
                  <span className="visual-year micro">{p.year}</span>
                </div>
              </a>

              {/* 文字区 */}
              <div className="project-info">
                <p className="micro project-role">{p.role}</p>
                <h3 className="project-name">
                  {p.name}
                  <i>{p.nameEn}</i>
                </h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a className="project-link" href="#contact">
                  <span>聊聊这个项目</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
