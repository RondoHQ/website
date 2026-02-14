import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const sizes = [
  { width: 128, output: 'rondo-logo-128.webp' },
  { width: 192, output: 'rondo-logo-192.webp' },
  { width: 256, output: 'rondo-logo-256.webp' },
  { width: 320, output: 'rondo-logo-320.webp' },
  { width: 512, output: 'rondo-logo.webp' },
];

const quality = 75;

console.log('Generating optimized logo variants...');

for (const { width, output } of sizes) {
  const inputPath = join(publicDir, 'rondo-logo.png');
  const outputPath = join(publicDir, output);

  await sharp(inputPath)
    .resize(width, width, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality, alphaQuality: 90 })
    .toFile(outputPath);

  const fileSize = (await import('fs')).statSync(outputPath).size;

  console.log(`✓ ${output} - ${width}x${width} - ${(fileSize / 1024).toFixed(1)} KB`);
}

console.log('✓ All variants generated successfully');
