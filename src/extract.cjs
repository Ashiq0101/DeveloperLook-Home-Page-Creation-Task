const fs = require('fs');

const html = fs.readFileSync('rise.html', 'utf-8');

// Find the string "Driving Demand &amp;" or "Driving Demand &"
const idx = html.indexOf('Driving Demand');
if (idx !== -1) {
    const snippet = html.substring(Math.max(0, idx - 500), idx + 2000);
    console.log(snippet);
} else {
    console.log('Not found');
}
