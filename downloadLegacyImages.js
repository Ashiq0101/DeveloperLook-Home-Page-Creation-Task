import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

async function download(url, dest) {
    const res = await fetch(url.replace(/&amp;/g, '&'));
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const fileStream = fs.createWriteStream(dest, { flags: 'w' });
    await finished(Readable.fromWeb(res.body).pipe(fileStream));
    console.log(`Downloaded ${dest}`);
}

async function run() {
    await download('https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=1200&h=1200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=dd3351f1f7bd65e03e747b89d340b02a', 'public/images/pioneers-img.jpg');
    
    await download('https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1200&h=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=bc25384a78eb0144577de192ba87f53e', 'public/images/speed-img.png');
    
    await download('https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5087.JPG?w=1200&h=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.6975&fp-y=0.4777&dm=1753791050&s=6f9c4e427ec3afc2794ccb92f006af06', 'public/images/award-winning-img.jpg');
}

run();
