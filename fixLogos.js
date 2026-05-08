const fs = require('fs');

let content = fs.readFileSync('src/components/LogosData.js', 'utf8');

// Replace the deep nesting with a single wrapper
content = content.replace(/<div class="w-20 py-5 relative \| lg:w-24">\s*<div class="w-full h-full relative aspect-container">\s*<div class="aspect-20\/9.*?>/g, '<div class="marquee-logo-wrapper">');

// Remove the 3 closing divs
content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n</div>');

// Replace the svg classes
content = content.replace(/class="w-full h-full object-contain fill-current"/g, 'class="marquee-logo"');

// Replace the img classes
content = content.replace(/class="w-full h-full object-contain absolute inset-0"/g, 'class="marquee-logo"');

fs.writeFileSync('src/components/LogosData.js', content);
