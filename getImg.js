const https = require('https');
https.get('https://riseatseven.com/', (res) => {
    let data = '';
    res.on('data', (c) => data+=c);
    res.on('end', () => {
        const matches = [...data.matchAll(/<img[^>]+src="([^"]+)"/gi)];
        matches.forEach(m => {
            if(m[1].includes('e34acc') || m[1].includes('0B5A') || m[1].includes('IMG_')) console.log(m[1]);
        });
        
        let headerMatch = data.match(/What&#x27;s.*?<img[^>]+src="([^"]+)"/is) || data.match(/<img[^>]+src="([^"]+)".*?New<\/h2>/is);
        console.log("Found explicitly near What's New:", headerMatch ? headerMatch[1] : 'No');
    });
});
