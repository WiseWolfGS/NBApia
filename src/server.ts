import 'zone.js/node';
import express from 'express';
import { readFileSync } from 'fs';
import render from './main.server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env['PORT'] || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const styleTag = `<style>${readFileSync(join(__dirname, 'styles.ssr.css'), 'utf8')}</style>`;

app.get('*', async (req, res) => {
  try {
    const html = await render();
    const finalHtml = html.replace('<head>', `<head>${styleTag}`);
    res.send(finalHtml);
  } catch (err) {
    console.error('SSR render error:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`✅ SSR server is running: http://localhost:${PORT}`);
});
