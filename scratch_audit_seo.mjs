import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'));

console.log('=== SEO & PAGEMETA AUDIT ===');
files.forEach(f => {
  const content = fs.readFileSync(path.join(pagesDir, f), 'utf8');
  const hasMeta = content.includes('<PageMeta');
  const titleMatch = content.match(/title=\{?([`"'][^`"']+[`"'])\}?/);
  const descMatch = content.match(/description=\{?([`"'][^`"']+[`"'])\}?/);
  const pathMatch = content.match(/path=\{?([`"'][^`"']+[`"'])\}?/);
  console.log(`Page: ${f}`);
  console.log(`  PageMeta: ${hasMeta ? 'YES' : 'NO'}`);
  if (hasMeta) {
    console.log(`  Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
    console.log(`  Path: ${pathMatch ? pathMatch[1] : 'MISSING'}`);
  }
});
