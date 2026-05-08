async function scrape() {
    const res = await fetch('https://riseatseven.com/');
    const html = await res.text();
    
    // Find snippets of HTML containing "Pioneers", "Award Winning", "Speed"
    // and extract the img src nearby
    const keywords = ["Pioneers", "Award Winning", "Speed"];
    
    keywords.forEach(kw => {
        const index = html.indexOf(kw);
        if (index !== -1) {
            const slice = html.substring(Math.max(0, index - 2000), index + 2000);
            
            // extract any string that looks like an image or video URL
            const urlMatches = [...slice.matchAll(/(https:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp|mp4|JPG|PNG)[^"'\s]*)/g)];
            const srcsetMatches = [...slice.matchAll(/src(?:set)?="([^"]+)"/g)];
            
            console.log(`\n--- URLs near "${kw}" ---`);
            urlMatches.forEach(m => console.log(m[1]));
            
            console.log(`\n--- Srcs near "${kw}" ---`);
            srcsetMatches.forEach(m => console.log(m[1]));
        } else {
            console.log(`Keyword "${kw}" not found!`);
        }
    });
}

scrape();
