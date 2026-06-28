const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const results = [];

async function processImage(inputPath, opts = {}) {
  const beforeBytes = fs.statSync(inputPath).size;
  const beforeKB = Math.round(beforeBytes / 1024);
  const ext = path.extname(inputPath);
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, ext);

  let outExt = opts.format || ext.slice(1);
  const isJpeg = outExt === 'jpg' || outExt === 'jpeg';
  if (isJpeg) outExt = 'jpg';
  const outPath = path.join(dir, base + '.' + outExt);

  let pipeline = sharp(inputPath);
  if (opts.resize) {
    pipeline = pipeline.resize(opts.resize, null, { fit: 'inside', withoutEnlargement: true });
  }

  if (isJpeg) {
    pipeline = pipeline.jpeg({ quality: opts.quality || 80, mozjpeg: true });
  } else if (outExt === 'webp') {
    pipeline = pipeline.webp({ quality: opts.quality || 80 });
  } else {
    pipeline = pipeline.png({ compressionLevel: 9, palette: false });
  }

  // Write to temp then rename to avoid input=output conflict
  const tmpPath = outPath + '.tmp';
  await pipeline.toFile(tmpPath);
  fs.renameSync(tmpPath, outPath);

  const afterBytes = fs.statSync(outPath).size;
  const afterKB = Math.round(afterBytes / 1024);
  const pct = Math.round((1 - afterBytes / beforeBytes) * 100);
  const renamed = ext !== '.' + outExt;

  if (renamed) fs.unlinkSync(inputPath);

  results.push({
    file: inputPath,
    beforeKB,
    afterKB,
    pct,
    renamed,
    outPath
  });
}

async function tryProcess(file, opts) {
  if (!fs.existsSync(file)) {
    console.log('SKIP  ' + file + ' (not found)');
    return;
  }
  await processImage(file, opts);
}

async function main() {
  // Hero full-bleed scenes (3200×2000 PNG → JPG, 1600px wide)
  await tryProcess('public/hero/scene1.png', { format: 'jpg', quality: 80, resize: 1600 });
  await tryProcess('public/hero/scene2.png', { format: 'jpg', quality: 80, resize: 1600 });
  await tryProcess('public/hero/scene3.png', { format: 'jpg', quality: 80, resize: 1600 });

  // Phone mockups (keep PNG for transparency)
  await tryProcess('public/hero/phone1.png', { format: 'png' });
  await tryProcess('public/hero/phone2.png', { format: 'png' });
  await tryProcess('public/hero/phone3.png', { format: 'png' });
  await tryProcess('public/hero/phone4.png', { format: 'png' });

  // Work covers → JPG, 1200px wide
  await tryProcess('public/work/sitelog/cover.png', { format: 'jpg', quality: 80, resize: 1200 });
  await tryProcess('public/work/paylio/cover.png', { format: 'jpg', quality: 80, resize: 1200 });
  await tryProcess('public/work/mailmint/cover.png', { format: 'jpg', quality: 80, resize: 1200 });

  // Headshot → JPG, under 200KB target
  await tryProcess('public/about/headshot.png', { format: 'jpg', quality: 80 });

  // Background (already JPG, just recompress)
  await tryProcess('public/background/solid.jpg', { format: 'jpg', quality: 80 });

  // Print table
  console.log('\nImage Optimization Results\n');
  console.log('File'.padEnd(48), 'Before'.padEnd(8), 'After'.padEnd(8), 'Saved');
  console.log('-'.repeat(74));
  for (const r of results) {
    const label = r.renamed ? r.file + ' → .jpg' : r.file;
    console.log(
      label.padEnd(48),
      (r.beforeKB + 'KB').padEnd(8),
      (r.afterKB + 'KB').padEnd(8),
      r.pct + '%'
    );
  }

  const totalB = results.reduce((s, r) => s + r.beforeKB, 0);
  const totalA = results.reduce((s, r) => s + r.afterKB, 0);
  console.log('-'.repeat(74));
  console.log(
    'TOTAL'.padEnd(48),
    (totalB + 'KB').padEnd(8),
    (totalA + 'KB').padEnd(8),
    Math.round((1 - totalA / totalB) * 100) + '%'
  );
}

main().catch(console.error);
