/* GSAP 单例与插件注册 —— 全站动效统一入口 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 全局缓动与性能偏好
gsap.defaults({ ease: 'expo.out', duration: 1.1 })
gsap.config({ force3D: true })
ScrollTrigger.config({ ignoreMobileResize: true })

export const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger }
