import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

const regex = /https:\/\/rise-atseven\.transforms\.svdcdn\.com\/production\/images\/[^"'\s`)]+/g;

for (const file of files) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Use replace callback to construct the local path
    content = content.replace(regex, (match) => {
        // Extract the filename
        const filename = match.split('?')[0].split('/').pop();
        if (filename) {
            modified = true;
            return `/images/${filename}`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated URLs in ${file}`);
    }
}
