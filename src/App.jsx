import { useLayoutEffect } from 'react'
import { gsap, ScrollTrigger, prefersReduced } from './lib/gsap.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Advantages from './components/Advantages.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useLayoutEffect(() => {
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      // —— 开场遮罩：品牌字标淡入 → 撤去 → 橙色幕布上掀 ——
      tl.from('.intro-mark', { autoAlpha: 0, scale: 0.84, duration: 0.9 }, 0.15)
      tl.to('.intro-mark', { autoAlpha: 0, duration: 0.5 }, 1.0)
      tl.to('.intro-veil', { yPercent: -100, duration: 1.15, ease: 'expo.inOut' }, 1.0)
      tl.set('.intro-veil', { display: 'none' })

      // —— 导航栏沉降 ——
      tl.from('.nav', { autoAlpha: 0, y: -30, duration: 1.0 }, 0.7)

      // —— 拼贴海报卡 stagger 进场 ——
      tl.from(
        '.c-card',
        {
          autoAlpha: 0,
          scale: 0.7,
          y: 52,
          duration: 1.15,
          ease: 'power4.out',
          stagger: 0.05,
          clearProps: 'transform',
        },
        1.05
      )

      // —— 主标题：逐行遮罩揭开 + 压缩后归位 ——
      tl.from(
        '.hero-title .line-inner',
        {
          yPercent: 130,
          scaleY: 1.16,
          skewY: 5,
          transformOrigin: 'top center',
          duration: 1.3,
          stagger: 0.16,
          ease: 'expo.out',
        },
        1.15
      )

      // —— 其余主内容依次浮现 ——
      tl.from('.hero-kicker', { autoAlpha: 0, y: 24, duration: 0.9 }, 0.95)
      tl.from('.hero-sub', { autoAlpha: 0, y: 34, duration: 1.0 }, 1.55)
      tl.from('.hero-enter', { autoAlpha: 0, y: 38, scale: 0.9, duration: 1.0 }, 1.75)
      tl.from('.hero-foot > *', { autoAlpha: 0, y: 30, stagger: 0.12, duration: 0.9 }, 1.65)
    })

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => {
      cancelAnimationFrame(raf)
      ctx.revert()
    }
  }, [])

  return (
    <>
      <div className="intro-veil" aria-hidden="true">
        <div className="intro-mark">
          <span className="intro-monogram">WS</span>
          <span className="intro-name">吴爽 · WU SHUANG</span>
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Advantages />
        <Contact />
      </main>
    </>
  )
}
