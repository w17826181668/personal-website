/* ============================================================
   站点内容数据 — 全部文案集中于此，便于后续迭代维护
   定位：求职运营岗位（内容运营 / 用户运营 / 产品运营）
   ============================================================ */

export const profile = {
  name: '吴爽',
  nameEn: 'WU SHUANG',
  roles: ['内容运营', '用户运营', '产品运营'],
  availability: '求职运营实习 · 随时到岗',
  city: '中国 · 南京',
  heroLines: ['用内容连接用户，', '用数据驱动增长。'],
  heroKicker: 'PORTFOLIO 2026 — 吴爽 · 运营求职作品集',
  heroCaption: '求职方向：内容运营 / 用户运营 / 产品运营',
  heroSub:
    '我是吴爽，一名计算机背景的运营求职者。既能写 SQL 看数据，也能做内容聊用户——擅长把每一次发布与活动，变成可被度量的增长。',
  aboutTitle: ['计算机背景的运营人，', '让每一步增长有据可依。'],
  aboutParas: [
    '南京财经大学计算机科学与技术专业本科在读。技术训练让我习惯用数据说话：Excel、SQL、Python 是我的日常工具，让每一个运营动作都不靠"感觉"，而有据可查。',
    '过去一年，我以「内容 + 产品」的双重身份完成了三个从 0 到 1 的项目：全国 15 天降雨查询工具、AI 画质修复工具、AI 行业每日简报——独立走完选题策划、内容生产、发布运营到数据复盘的完整闭环。',
    '我相信好的运营是真诚的：懂用户要什么，说人话，给价值，然后用数据验证每一次判断。',
  ],
}

export const contact = {
  email: '156-000-000@qq.com',
  phone: '178-0000-0000',
  wechat: '同手机号',
  city: '南京',
}

/* —— 项目数据（个人经历模块） —— */
export const stats = [
  { value: '3', suffix: '+', label: '从 0 到 1 的完整项目' },
  { value: '300', suffix: '+', label: '城市数据实战处理' },
  { value: '223', suffix: ' 份', label: '调研有效样本' },
  { value: '5', suffix: ' 条', label: 'AI 日报每日精选' },
]

/* —— 经历时间线 —— */
export const timeline = [
  {
    period: '2024.09 — 2028.06',
    title: '南京财经大学 · 计算机科学与技术',
    tag: '教育背景',
  },
  {
    period: '2026.09 — 至今',
    title: '三个 0 → 1 独立项目 · 运营全流程闭环',
    tag: '核心项目经历',
  },
  {
    period: '2025.02 — 2025.06',
    title: '正大杯市场调研大赛 · 校级三等奖',
    tag: '调研实战',
  },
  {
    period: '2024.10 — 2025.06',
    title: '爱心小站志愿者 · 南京婷婷聋童幼儿园',
    tag: '志愿',
  },
]

/* —— 精选项目 —— */
export const projects = [
  {
    no: '01',
    name: '全国 15 天降雨查询工具',
    nameEn: 'Rain Scout',
    year: '2026.09',
    role: '产品运营与数据分析',
    desc: '面向出行人群的降雨决策工具。从「找不下雨的城市」这一真实痛点出发，设计地图、表格、清单三种视图；覆盖全国 300+ 城市 15 天降雨数据，以本地缓存与分级配色让信息一目了然。',
    tags: ['用户洞察', '数据可视化', '前端联调', '迭代优化'],
    image: './media/project-rain.png',
  },
  {
    no: '02',
    name: 'AI 画质修复工具',
    nameEn: 'Photo Restorer',
    year: '2026.09',
    role: '用户调研与体验优化',
    desc: '让老照片修复零门槛。设计「上传 – 模式选择 – 一键修复 – 前后对比 – 批量下载」的极简流程，划分三种修复模式，以拖拽上传与进度反馈降低用户等待焦虑。',
    tags: ['需求分析', '交互设计', '体验优化', '流程设计'],
    image: './media/project-restore.png',
  },
  {
    no: '03',
    name: 'AI 行业每日简报',
    nameEn: 'AI Daily Brief',
    year: '2026.10',
    role: '内容运营与用户增长',
    desc: '5 分钟看懂今天 AI 圈发生了什么。每日精选 5 条前沿资讯，以「今日速览 – 时间轴 – 详情弹窗」三层结构降低阅读负担；阅读进度点与已读标记，显著提升读完率与回访。',
    tags: ['内容策划', '用户增长', '编辑视角', '数据复盘'],
    image: './media/project-daily.png',
  },
]

/* —— 个人优势（运营能力模型） —— */
export const advantages = [
  {
    no: '01',
    icon: 'play',
    title: '内容运营',
    desc: '独立主理「AI 行业每日简报」内容栏目：选题策划、内容编辑、发布节奏与读者反馈复盘全流程闭环，让每期内容既专业又易读。',
  },
  {
    no: '02',
    icon: 'chart',
    title: '数据驱动',
    desc: 'Excel 熟练、SQL 与 Python 基础扎实，习惯用播放量、点赞率、完播率复盘每一次内容决策，让优化有方向。',
  },
  {
    no: '03',
    icon: 'heart',
    title: '用户运营',
    desc: '223 份市场调研有效样本的实战经验，擅长从用户反馈中提炼洞察，把需求转化为内容与产品的具体改进。',
  },
  {
    no: '04',
    icon: 'spark',
    title: 'AI 提效',
    desc: 'ChatGPT / Claude / 豆包深度使用者，擅长编写有效提示词，让选题、素材与数据整理的效率成倍提升。',
  },
  {
    no: '05',
    icon: 'compass',
    title: '产品思维',
    desc: '三个从 0 到 1 项目的完整闭环经历，懂需求分析、功能规划与上线验证，能与产品和开发无缝协作。',
  },
  {
    no: '06',
    icon: 'code',
    title: '技术理解力',
    desc: '计算机专业背景，读得懂数据口径与实现逻辑，提需求不跑偏，与开发协作不打折扣。',
  },
]

/* —— Hero 拼贴海报卡（kind: photo / word / stat） —— */
export const collage = [
  { kind: 'photo', variant: 'white', img: './media/project-rain.png', tag: 'WORK 01', title: '降雨查询工具', x: '2%', y: '9%', w: 235, r: -7, d: 7 },
  { kind: 'word', variant: 'black', text: '内容运营', sub: 'CONTENT OPS', x: '21%', y: '3%', w: 165, r: 4, d: 9 },
  { kind: 'word', variant: 'white', text: 'DATA DRIVEN', x: '43%', y: '0.5%', w: 150, r: -3, d: 10 },
  { kind: 'photo', variant: 'blue', img: './media/project-restore.png', tag: 'WORK 02', title: 'AI 画质修复', x: '73%', y: '6%', w: 240, r: 6, d: 8 },
  { kind: 'stat', variant: 'orange2', num: '223 份', label: '调研有效样本', x: '88%', y: '30%', w: 185, r: 5, d: 12 },
  { kind: 'word', variant: 'white', text: 'WHO IS WS', sub: 'WS · 运营人', x: '3%', y: '52%', w: 230, r: 4, d: 11 },
  { kind: 'stat', variant: 'red', num: '5 条', label: 'AI 日报每日精选', x: '81%', y: '56%', w: 205, r: -6, d: 9 },
  { kind: 'photo', variant: 'black', img: './media/project-daily.png', tag: 'WORK 03', title: 'AI 行业日报', x: '7%', y: '73%', w: 230, r: -5, d: 8 },
  { kind: 'word', variant: 'blue', text: 'USER FIRST', x: '33%', y: '80%', w: 160, r: -4, d: 9 },
  { kind: 'word', variant: 'white', text: '用户增长', sub: 'GROWTH', x: '70%', y: '80%', w: 175, r: 3, d: 10 },
]

export const navLinks = [
  { label: '关于', href: '#about', no: '01' },
  { label: '项目', href: '#projects', no: '02' },
  { label: '优势', href: '#advantages', no: '03' },
  { label: '联系', href: '#contact', no: '04' },
]

export const marqueeWords = [
  'Content Operation',
  'User Growth',
  'Data Driven',
  'Community',
  'AI Powered',
  'Execution',
]
