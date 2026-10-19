import { marqueeWords } from '../data/content.js'
import './Marquee.css'

/* 滚动字幕分隔带：Hero 与正文之间的过渡节奏 */
export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((w, i) => (
          <span className="marquee-item" key={i}>
            {w}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
