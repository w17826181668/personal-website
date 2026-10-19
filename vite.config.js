import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// 单文件模式：把所有 JS / CSS / 图片内联进一个 index.html，可双击本地打开
const USE_SINGLE_FILE = process.env.BUILD_SINGLE === '1'

export default defineConfig({
  plugins: [react(), USE_SINGLE_FILE && viteSingleFile()].filter(Boolean),
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
