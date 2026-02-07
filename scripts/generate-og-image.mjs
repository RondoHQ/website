import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const logoPath = join(projectRoot, 'public', 'rondo-logo.png');
const outputPath = join(projectRoot, 'public', 'og-image.png');

// Create 1200x630 obsidian background
const width = 1200;
const height = 630;
const obsidian = '#0F172A';

// Read logo to get dimensions
const logoBuffer = readFileSync(logoPath);
const logoMeta = await sharp(logoBuffer).metadata();

// Calculate logo size (max 400px width, maintain aspect ratio)
const maxLogoWidth = 400;
const logoScale = Math.min(maxLogoWidth / logoMeta.width, 1);
const logoWidth = Math.round(logoMeta.width * logoScale);
const logoHeight = Math.round(logoMeta.height * logoScale);

// Position logo centered horizontally, in upper portion vertically
const logoX = Math.round((width - logoWidth) / 2);
const logoY = Math.round(height * 0.3 - logoHeight / 2);

// Create SVG with text
const svg = `
<svg width="${width}" height="${height}">
  <text
    x="50%"
    y="${height * 0.65}"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="48"
    font-weight="600"
    fill="white"
    text-anchor="middle"
  >Ledenadministratie voor sportverenigingen</text>
</svg>
`;

// Create base image with obsidian background
await sharp({
  create: {
    width,
    height,
    channels: 3,
    background: obsidian
  }
})
.composite([
  {
    input: await sharp(logoBuffer).resize(logoWidth, logoHeight).toBuffer(),
    top: logoY,
    left: logoX
  },
  {
    input: Buffer.from(svg),
    top: 0,
    left: 0
  }
])
.png()
.toFile(outputPath);

console.log(`✓ OG image generated at ${outputPath}`);
