const fs = require('fs');

const html = fs.readFileSync('rise.html', 'utf8');

const imgRegex = /<img[^>]+src="([^">]+)"/g;
const videoRegex = /<video[^>]+src="([^">]+)"/g;
const sourceRegex = /<source[^>]+src="([^">]+)"/g;
const bgImageRegex = /background-image:\s*url\([^)]+\)/g;

let match;
const urls = new Set();

while ((match = imgRegex.exec(html)) !== null) {
  urls.add(match[1]);
}

while ((match = videoRegex.exec(html)) !== null) {
  urls.add(match[1]);
}

while ((match = sourceRegex.exec(html)) !== null) {
  urls.add(match[1]);
}

while ((match = bgImageRegex.exec(html)) !== null) {
  urls.add(match[0]);
}

const urlArray = Array.from(urls).filter(url => 
  url.includes('.mp4') || url.includes('.webm') || url.includes('.jpg') || 
  url.includes('.png') || url.includes('.webp') || url.includes('.svg')
);

console.log("Found Media URLs:");
console.log(urlArray.slice(0, 50).join('\n'));
