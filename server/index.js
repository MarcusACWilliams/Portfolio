import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// API route to fetch GitHub profile data
app.get('/api/github/profile/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: `GitHub API responded with status ${response.status}`,
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub profile' });
  }
});

// Catch-all handler for React routing in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
