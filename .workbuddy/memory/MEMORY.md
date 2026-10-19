# 项目记忆 · test3 个人作品集网站

## 技术约定
- React 18 + Vite 5，原生 CSS（按组件分 .css），无 UI 框架；`base: './'`；dev 端口 5173（host 127.0.0.1）。
- 设计令牌集中在 `src/index.css`（:root），组件样式与组件同名 .css。
- 所有文案/数据集中在 `src/data/content.js`（含 Hero 拼贴卡 collage 数组）——迭代时改内容优先动这里，不动组件。
- 媒体资源放 `public/media/`，引用写相对路径 `./media/xxx`。

## 视觉规范（2026-10-14 起：橙色海报拼贴风）
- 主底海报橙 #F04E23，浅区奶油纸 #F4EFE4，深区海报黑 #161311；撞色蓝 #2B3FE0 / 红 #C7331F 作卡片变体。
- 海报语言：1.5px 墨色描边 + 硬偏移投影（6px 6px 0）；卡片微旋转、交错布局；全局印刷颗粒。
- 标题 Archivo Black + Noto Sans SC 900 + skewX(-6deg) 斜体感；标签 JetBrains Mono。
- 区块节奏：Hero 橙 → Marquee 黑条 → About 纸 → Projects 黑 → Advantages 纸 → Contact 橙整屏。
- 版心 1700px，PC 优先；Hero 拼贴 <1180px 隐藏，标题/按钮有小屏兜底。

## 内容定位（2026-10-14 更新）
- 求职方向：内容运营 / 用户运营 / 产品运营（用户主动转向，此前"AI 设计师"定位已废弃）。
- heroLines：'用内容连接用户，/ 用数据驱动增长。'；优势卡 6 张运营能力模型；项目 role 标签均为运营向。
- 紫色暗色影院风为旧版本，仅存于 git 之前的文件状态；当前不要再引入紫色。
- 用户明确要求移除所有抖音漫画账号相关内容（2026-10-14）：时间线条目、优势卡 01 描述、1000+ 最高赞数据均已替换/删除，此后文案不要再引用抖音账号。

## 项目配图（2026-10-14 更新）
- 三个项目卡与 Hero 拼贴使用真实网站截图（非 AI 抽象图）：project-rain/restore/daily.png，由 puppeteer-core + 系统 Chrome 对本地 HTML 截图生成（headless 1440x900）。
- 截图源：① 天气 D:/Desktop/创意/天气/全国十五天降雨查询.html（需等 ~25s 数据加载完成再截）；② 画质修复 D:/Desktop/创意/画质修复/photo-restorer/static/index.html（截前 remove #engineBadge 提示条）；③ AI 日报 D:/Desktop/人机交互/test1/index.html。
- 若用户更新了这些网站，重跑截图脚本覆盖 public/media/ 对应文件即可。

## 迭代方式
- 用户会持续提供截图与参考站点，按反馈迭代视觉/层次；保持数据结构与类命名稳定的偏好。

## 待办
- 联系方式为简历占位（156-000-000@qq.com / 178-0000-0000），等用户给真实信息后替换 content.js 的 contact。
- hero-bg.mp4 已不再被引用（Hero 改纯色拼贴），素材仍在 public/media/ 可随时删除或复用。
