const fs = require('fs');
const path = require('path');
const https = require('https');

const dirsToRead = ['src', 'prisma', 'public'];
const filesToRead = ['package.json', 'next.config.ts', 'tsconfig.json', 'next-env.d.ts'];

const payload = { files: {} };

function readDirRecursive(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readDirRecursive(fullPath);
        } else {
            if (fullPath.endsWith('.db')) continue;
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                payload.files[fullPath.replace(/\\/g, '/')] = { content };
            } catch (e) {}
        }
    }
}

for (const f of filesToRead) {
    if (fs.existsSync(f)) {
        payload.files[f] = { content: fs.readFileSync(f, 'utf8') };
    }
}

for (const d of dirsToRead) {
    readDirRecursive(d);
}

const postData = JSON.stringify(payload);

const options = {
    hostname: 'codesandbox.io',
    port: 443,
    path: '/api/v1/sandboxes/define?json=1',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = https.request(options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        try {
            const parsed = JSON.parse(body);
            fs.writeFileSync('sandbox_id.txt', parsed.sandbox_id || body);
        } catch (e) {
            fs.writeFileSync('sandbox_id.txt', body);
        }
    });
});
req.on('error', (e) => {
    fs.writeFileSync('sandbox_id.txt', 'req error: ' + e.message);
});
req.write(postData);
req.end();
