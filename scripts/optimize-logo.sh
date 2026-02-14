#!/bin/bash
set -e

cd "$(dirname "$0")/.."

PUBLIC_DIR="public"
SOURCE_PNG="$PUBLIC_DIR/rondo-logo.png"

# Function to generate WebP with sips
generate_webp() {
    local size=$1
    local output_file=$2

    echo "Generating $output_file at ${size}x${size}..."

    # Create temp PNG at target size
    temp_file="${output_file%.webp}.png"
    sips -z "$size" "$size" "$SOURCE_PNG" --out "$temp_file" > /dev/null 2>&1

    # Convert to WebP with quality setting
    # Since sips doesn't support WebP, we'll use cwebp if available, otherwise keep as PNG and convert later
    if command -v cwebp &> /dev/null; then
        cwebp -q 75 -alpha_q 90 "$temp_file" -o "$output_file" > /dev/null 2>&1
        rm "$temp_file"
        file_size=$(stat -f%z "$output_file")
        echo "✓ $output_file - ${size}x${size} - $((file_size / 1024)) KB"
    else
        # Fallback: just create resized PNGs, then convert with sharp
        mv "$temp_file" "${output_file%.webp}_temp.png"
        echo "⚠ cwebp not found, created temp PNG: ${output_file%.webp}_temp.png"
    fi
}

# Check if cwebp is available
if ! command -v cwebp &> /dev/null; then
    echo "cwebp not found. Installing via npm..."
    npm install --no-save sharp
fi

# If sharp is available via npm, use Node.js instead
if [ -d "node_modules/sharp" ]; then
    echo "Using sharp to generate optimized variants..."
    cat > scripts/temp-optimize.mjs << 'EOF'
import sharp from 'sharp';
import { join } from 'path';

const publicDir = './public';
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
EOF
    node scripts/temp-optimize.mjs
    rm scripts/temp-optimize.mjs
    exit 0
fi

# Fallback to sips + cwebp
generate_webp 128 "$PUBLIC_DIR/rondo-logo-128.webp"
generate_webp 192 "$PUBLIC_DIR/rondo-logo-192.webp"
generate_webp 256 "$PUBLIC_DIR/rondo-logo-256.webp"
generate_webp 320 "$PUBLIC_DIR/rondo-logo-320.webp"
generate_webp 512 "$PUBLIC_DIR/rondo-logo.webp"

echo "✓ All variants generated successfully"
