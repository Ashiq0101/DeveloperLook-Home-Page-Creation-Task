import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadImages() {
    console.log("Fetching live site HTML...");
    const res = await fetch("https://riseatseven.com/");
    const html = await res.text();

    // Extract all svdcdn URLs from the HTML
    const regex = /https:\/\/rise-atseven\.transforms\.svdcdn\.com\/production\/images\/[^"'\s]+/g;
    const matches = [...html.matchAll(regex)].map(m => m[0]);
    console.log(`Found ${matches.length} image URLs on the live site.`);

    // Read all JSX and JS files in components
    const componentsDir = path.join(__dirname, 'src', 'components');
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
    
    const uniqueTargets = new Set();
    
    // Find all hardcoded svdcdn URLs in our codebase
    for (const file of files) {
        const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
        const fileMatches = [...content.matchAll(regex)].map(m => m[0]);
        for (const url of fileMatches) {
            // Extract just the filename without query params
            const filename = url.split('?')[0].split('/').pop();
            if (filename) uniqueTargets.add(filename);
        }
    }
    
    console.log(`Found ${uniqueTargets.size} unique target filenames in components:`, [...uniqueTargets]);

    const publicImagesDir = path.join(__dirname, 'public', 'images');
    if (!fs.existsSync(publicImagesDir)) {
        fs.mkdirSync(publicImagesDir, { recursive: true });
    }

    // For each target filename, find a fresh URL from the live site matches and download it
    for (const target of uniqueTargets) {
        const freshUrl = matches.find(url => url.includes(target));
        if (freshUrl) {
            console.log(`Downloading ${target} from ${freshUrl}...`);
            try {
                // Ensure the URL is clean (decode HTML entities like &amp;)
                const cleanUrl = freshUrl.replace(/&amp;/g, '&');
                const imageRes = await fetch(cleanUrl);
                if (!imageRes.ok) {
                    console.error(`Failed to download ${target}: ${imageRes.statusText}`);
                    continue;
                }
                const buffer = await imageRes.arrayBuffer();
                fs.writeFileSync(path.join(publicImagesDir, target), Buffer.from(buffer));
                console.log(`Saved ${target}`);
            } catch (err) {
                console.error(`Error downloading ${target}:`, err.message);
            }
        } else {
            console.warn(`Could not find fresh URL for ${target} on live site!`);
        }
    }
}

downloadImages().catch(console.error);
