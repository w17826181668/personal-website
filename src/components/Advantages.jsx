import { useRef } from 'react'
import { advantages } from '../data/content.js'
import Icon from './Icon.jsx'
import { useScrollAnim } from '../hooks/useScrollAnim.js'
import './Advantages.css'

export default function Advantages() {
  const ref = useRef(null)
  useScrollAnim(ref)

  return (
    <section className="section advantages" id="advantages" ref={ref}>
      <div className="container">
        <div className="adv-head">
          <div className="section-label">
            <span className="micro">
              <span className="no">03</span> — 个人优势 / Advantages
            </span>
          </div>
          <h2 className="h2" data-anim="title">
            懂数据，懂用户，<span className="grad">更懂落地</span>
          </h2>
          <p className="lead head-lead" data-anim="up">
            技术背景 × 内容实操 × 调研实战——让我能从选题、发布到复盘，完整地对增长结果负责。
          </p>
        </div>

        <div className="adv-grid" data-anim="stagger">
          {advantages.map((a) => (
            <div className="adv-card glass" key={a.no}>
              <span className="adv-no micro">{a.no}</span>
              <span className="adv-icon">
                <Icon name={a.icon} />
              </span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <span className="adv-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
