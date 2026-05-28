import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = 'c:/Users/SHIVAM/Desktop/Juntoz/public';

const images = [
  'about-desk.png',
  'about-laptop.png',
  'innovation-team.png',
  'team-meeting.png',
  'satellite_map_placeholder.png'
];

async function convert() {
  console.log("Starting image compression & conversion to WebP...");
  for (const img of images) {
    const srcPath = path.join(publicDir, img);
    const destName = img.replace(/\.png$/, '.webp');
    const destPath = path.join(publicDir, destName);
    
    if (fs.existsSync(srcPath)) {
      console.log(`Processing: ${img} -> ${destName}`);
      try {
        await sharp(srcPath)
          .resize({ width: 1200, withoutEnlargement: true }) // Downscale if too large
          .webp({ quality: 75, effort: 6 }) // High compression WebP
          .toFile(destPath);
        
        const srcStats = fs.statSync(srcPath);
        const destStats = fs.statSync(destPath);
        const savings = ((srcStats.size - destStats.size) / 1024).toFixed(1);
        console.log(`Success! Saved ${savings} KB (${((destStats.size/srcStats.size)*100).toFixed(1)}% of original)`);
      } catch (err) {
        console.error(`Failed to convert ${img}:`, err);
      }
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }
  console.log("All conversions complete.");
}

convert();
