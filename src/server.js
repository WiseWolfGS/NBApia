import 'zone.js/node';
import express from 'express';
import render from './main.server';
const app = express();
const PORT = process.env['PORT'] || 4000;
app.get('*', async (req, res) => {
    try {
        const html = await render();
        res.send(html);
    }
    catch (err) {
        console.error('SSR render error:', err);
        res.status(500).send('Server Error');
    }
});
app.listen(PORT, () => {
    console.log(`✅ SSR server is running: http://localhost:${PORT}`);
});
