import { useLayoutEffect } from 'react'
import { gsap, prefersReduced } from '../lib/gsap.js'

/*
 * 滚动进场动效 hook —— 在 scoped 容器内扫描 data-anim 标记：
 *   data-anim="title"   大标题：遮罩揭开 + 位移（clip-path + yPercent）
 *   data-anim="stagger" 容器的直接子元素：依次 stagger 上浮进场
 *   data-anim="up"      单个元素：上浮淡入
 *   data-anim="img"     图片：reveal（轻微缩放）+ 滚动视差 parallax
 * 全部使用 transform / opacity / clip-path，GPU 友好，无廉价弹跳。
 */
export function useScrollAnim(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope || prefersReduced) return

    const ctx = gsap.context(() => {
      // —— 大标题：遮罩揭开 + 位移 ——
      gsap.utils.toArray('[data-anim="title"]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 60, autoAlpha: 0, clipPath: 'inset(0% 0% 100% 0%)' },
          {
            yPercent: 0,
            autoAlpha: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.25,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          }
        )
      })

      // —— 卡片 / 列表：依次 stagger 进场 ——
      gsap.utils.toArray('[data-anim="stagger"]').forEach((g) => {
        gsap.from(g.children, {
          y: 70,
          autoAlpha: 0,
          duration: 1.0,
          ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: { trigger: g, start: 'top 82%' },
        })
      })

      // —— 单个元素：上浮淡入 ——
      gsap.utils.toArray('[data-anim="up"]').forEach((el) => {
        gsap.from(el, {
          y: 56,
          autoAlpha: 0,
          duration: 1.05,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 86%' },
        })
      })

      // —— 图片：reveal（轻微缩放）+ 滚动视差 parallax ——
      // 终点保留 1.15 基础缩放，为视差预留溢出门头，避免露底
      gsap.utils.toArray('[data-anim="img"]').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.32, autoAlpha: 0 },
          {
            scale: 1.15,
            autoAlpha: 1,
            duration: 1.3,
            ease: 'expo.out',
            scrollTrigger: { trigger: img, start: 'top 90%' },
          }
        )
        gsap.fromTo(
          img,
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    }, scope)

    return () => ctx.revert()
  }, [])
}
