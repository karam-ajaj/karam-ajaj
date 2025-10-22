import express from 'express';
import path from 'path';
import { BadgeReadme } from './lib/badgeReadme';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/generate-badge', (req, res) => {
    const { text, color } = req.body;
    const badgeReadme = new BadgeReadme();
    const badgeUrl = badgeReadme.generateBadgeUrl(text, color);
    res.json({ badgeUrl });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});