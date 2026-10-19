const fs = require('fs');
const path = require('path');

const buildDir = 'dist';
const standalone = '吴爽-作品集-双击打开.html';
const mediaDir = 'public/media';

const htmlPath = path.join(buildDir, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 找出所有 ./media/xxx 引用并内联为 base64
const refs = [...new Set([...html.matchAll(/\.\/media\/[^\s"'`)]+/g)].map((m) => m[0]))];
console.log('发现 media 引用:', refs);

for (const ref of refs) {
  const file = path.join(mediaDir, ref.replace('./media/', ''));
  if (!fs.existsSync(file)) {
    console.log('  缺失:', file);
    continue;
  }
  const ext = path.extname(file).slice(1).toLowerCase();
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'svg' ? 'image/svg+xml' : ext === 'mp4' ? 'video/mp4' : 'application/octet-stream';
  const b64 = fs.readFileSync(file).toString('base64');
  const dataUri = `data:${mime};base64,${b64}`;
  html = html.split(ref).join(dataUri);
  console.log('  内联:', ref, '->', (b64.length / 1024).toFixed(0) + 'KB');
}

fs.writeFileSync(standalone, html, 'utf8');
const left = [...html.matchAll(/\.\/media\//g)].length;
console.log('内联后剩余 ./media/ 引用:', left);
console.log('写入:', standalone, (fs.statSync(standalone).size / 1024).toFixed(0) + 'KB');
