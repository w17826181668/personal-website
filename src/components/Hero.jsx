import { profile, contact, collage } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* 拼贴海报卡 */}
      <div className="hero-collage" aria-hidden="true">
        {collage.map((c, i) => (
          <div
            key={i}
            className={`c-card c-${c.variant} c-${c.kind}`}
            style={{
              left: c.x,
              top: c.y,
              width: c.w,
              '--r': `${c.r}deg`,
              '--d': `${c.d}s`,
              animationDelay: `${i * 0.09}s`,
            }}
          >
            {c.kind === 'photo' && (
              <>
                <div className="c-card-bar">
                  <i className="c-dot" />
                  <span>{c.tag}</span>
                  <em>✦ ✦ ✦</em>
                </div>
                <div className="c-photo-wrap">
                  <img src={c.img} alt="" loading="eager" />
                </div>
                <b className="c-title">{c.title}</b>
              </>
            )}
            {c.kind === 'word' && (
              <div className="c-word">
                <b>{c.text}</b>
                {c.sub && <span>{c.sub}</span>}
              </div>
            )}
            {c.kind === 'stat' && (
              <div className="c-stat">
                <b>{c.num}</b>
                <span>{c.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 居中主内容 */}
      <div className="hero-center">
        <p className="hero-kicker micro">{profile.heroKicker}</p>

        <h1 className="hero-title">
          <span className="line"><span className="line-inner">{profile.heroLines[0]}</span></span>
          <span className="line"><span className="line-inner">{profile.heroLines[1]}</span></span>
        </h1>

        <p className="hero-sub">{profile.heroSub}</p>

        <a className="hero-enter" href="#about" aria-label="向下了解我">
          <span className="enter-txt">
            <i className="micro">Enter</i>
            <b>了解我</b>
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </a>
      </div>

      {/* 底部信息条 */}
      <div className="hero-foot container">
        <a className="hero-mail" href={`mailto:${contact.email}`}>
          <span className="micro">Email</span>
          <b>{contact.email}</b>
        </a>
        <p className="hero-caption micro">{profile.heroCaption}</p>
        <div className="hero-phone">
          <span className="micro">Phone</span>
          <b>{contact.phone}</b>
        </div>
      </div>
    </section>
  )
}
