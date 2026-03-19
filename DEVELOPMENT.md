# Marcus Williams Portfolio - React + Express + Node.js

A modern full-stack portfolio application built with React (frontend) and Express (backend).

## Project Structure

```
.
├── client/                    # React frontend app
│   ├── public/               # Static assets and manifest
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── assets/           # Copy your images/files here
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── Summary.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/            # Custom React hooks
│   │   │   └── useGitHubProfile.js
│   │   ├── App.jsx           # Main App component
│   │   ├── index.js          # React entry point
│   │   └── index.css         # Global styles
│   └── package.json
│
├── server/                    # Express backend server
│   ├── index.js              # Express server entry point
│   └── package.json
│
├── package.json              # Root package.json (scripts for monorepo)
└── README.md                 # This file
```

## Quick Start

### 1. Install Dependencies

```bash
# Install all dependencies (root, server, and client)
npm run install-all
```

### 2. Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

This will:
- Start the Express server on `http://localhost:5000`
- Start the React development server on `http://localhost:3000`

### 3. Production Build

```bash
npm run build
```

Then start the server:

```bash
npm start
```

## Setup Notes

### Important: Move Assets to Client

You need to manually copy your assets from the root folder to `client/public/assets/`:

```
Existing:
- assets/YDMW-303.JPEG
- assets/icons/
- assets/splash/
- assets/marcus_williams_resume.pdf

Should be moved to:
- client/public/assets/
```

The client build will serve these as static files.

## Backend API

The Express server provides a GitHub API proxy to avoid CORS issues:

### GET `/api/github/profile/:username`

Fetches a GitHub user's public profile data.

**Example:**
```javascript
// In your React components
import { useGitHubProfile } from './hooks/useGitHubProfile';

function MyComponent() {
  const { profile, loading, error } = useGitHubProfile('MarcusACWilliams');
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {profile && <p>Public repos: {profile.public_repos}</p>}
    </div>
  );
}
```

## React Components

All components are in `client/src/components/`:

- **Hero**: Header section with profile image and intro
- **Summary**: Professional summary section
- **Skills**: Technical skills grid
- **Experience**: Job history and responsibilities
- **Projects**: Project showcase container
- **Contact**: Contact information and CTA
- **Footer**: Footer with copyright year

## Environment Variables

Create a `.env` file in the `server/` folder if needed:

```
PORT=5000
NODE_ENV=development
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both client & server in development mode |
| `npm run server` | Start only the Express server |
| `npm run client` | Start only the React dev server |
| `npm run build` | Build React app for production |
| `npm start` | Start production server (requires build) |
| `npm run install-all` | Install dependencies for root, server, and client |

## Development Tips

1. **Hot Reload**: React dev server watches for changes in`client/src/`
2. **Backend Changes**: Server restarts automatically with `--watch` flag
3. **API Proxy**: In development, requests to `/api/*` proxy to the backend
4. **Build Output**: React build output goes to `client/build/`

## Production Deployment

1. Run `npm run build` to create optimized React bundle
2. The Express server serves the built React app from `client/build/`
3. Deploy the entire project as a single Node.js application

## Next Steps

- [ ] Copy assets to `client/public/assets/`
- [ ] Update `client/public/index.html` title and meta tags as needed
- [ ] Build custom API endpoints for additional features
- [ ] Add environment-specific configuration
- [ ] Set up deployment (Vercel, Heroku, etc.)

## License

MIT
