# Marcus Williams Portfolio

A modern full-stack portfolio application built with **React** (frontend) and **Express/Node.js** (backend).

This project has been restructured from a static site into a full-stack web application with separate frontend and backend, enabling dynamic features, API integration, and scalable growth.

## Quick Start

### Prerequisites
- Node.js 14+ and npm

### Installation & Development

```bash
# Install all dependencies
npm run install-all

# Start both frontend (React) and backend (Express) in development mode
npm run dev
```

The app will be available at `http://localhost:3000` (React dev server).

## Project Structure

```
.
├── client/                    # React frontend
│   ├── public/               # Static assets
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── assets/
│   └── src/
│       ├── components/       # React components
│       ├── hooks/            # Custom hooks
│       ├── App.jsx
│       └── index.css
│
├── server/                    # Express backend
│   ├── index.js              # Express server
│   └── package.json
│
├── package.json              # Root (monorepo scripts)
└── DEVELOPMENT.md            # Detailed development guide
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start client and server concurrently |
| `npm run server` | Start Express server only (auto-restart on changes) |
| `npm run client` | Start React dev server only |
| `npm run build` | Build React app for production |
| `npm start` | Run production server (requires `npm run build` first) |

## Backend API

The Express server provides a GitHub profile API:

- **GET** `/api/github/profile/:username` — Fetch public GitHub user data

## Features

- ✅ React component-based architecture
- ✅ Express backend with API routes
- ✅ Professional styling with CSS Grid/Flexbox
- ✅ GitHub API integration (via backend proxy)
- ✅ PWA-ready (manifest.json)
- ✅ Responsive design
- ✅ Development hot-reload for both client & server

## Important: Asset Setup

Your existing assets need to be moved to the client:

```bash
# Copy from root to client/public/
cp -r assets/* client/public/assets/
```

Files needed in `client/public/assets/`:
- `YDMW-303.JPEG`
- `marcus_williams_resume.pdf`
- `icons/` (app icons)
- `splash/` (PWA splash screens)
- Theme and background colors.
- Standalone display mode.
- Install icon definitions.

### One-off Asset Generation Script

The PNG app icons in `assets/icons/` and the launch image in `assets/splash/` were generated with a PowerShell command using `System.Drawing`. That script is not part of the normal site runtime; it was only used to create placeholder PWA assets.

## Local Preview (VS Code)

1. Open the `Portfolio` folder in VS Code.
2. Install the `Live Server` extension if needed.
3. Right-click `index.html` and choose `Open with Live Server`.
4. Open the site over `http://localhost` rather than `file://` so the service worker and install prompt can work.

## Updating Script Behavior

1. Edit `script.js` to change page interactions or service worker registration behavior.
2. Edit `service-worker.js` to change offline caching logic or the cached file list.
3. Edit `manifest.json` to change install metadata such as the app name, icons, theme color, or display mode.
4. After changing `service-worker.js`, hard refresh the page or increment `CACHE_NAME` if cached files are not updating.

## PWA Features

- Installable as a Progressive Web App on supported mobile and desktop browsers.
- Includes a web app manifest, offline app-shell caching, a home-screen icon, and an iPhone launch image.
- Uses `display: standalone` so the installed site opens like an app.

## Content Files You Can Replace

The project currently uses these local content files:

- `assets/YDMW-303.JPEG`: hero headshot image.
- `assets/marcus_williams_resume.pdf`: downloadable resume.

If you replace either file with a new filename, update the matching references in `index.html`. If you change the headshot filename, also update `service-worker.js` so the cached asset list stays correct.

## Deploy On GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save and wait for the deployment to complete.
5. Your public URL will appear in the Pages section.

## Deploy On Netlify Or Vercel

1. Import the GitHub repository.
2. Framework preset: `None`.
3. Build command: leave empty.
4. Publish/output directory: project root.
5. Deploy.

## VS Code + Copilot Workflow

1. Ask Copilot to update resume bullets directly in `index.html`.
2. Ask Copilot to tune visual style in `styles.css` while preserving accessibility.
3. Ask Copilot to add new sections (certifications, testimonials, blog links) as needed.

## Notes

- The contact section currently uses `hello@marcuswilliams.dev` as the email address. Update it in `index.html` if you prefer a different mailbox.
- The resume download button points to `assets/marcus_williams_resume.pdf`.
- The hero image and service worker cache should both reference `assets/YDMW-303.JPEG`.
- For iPhone home-screen testing, add the deployed site to the home screen from Safari and verify the icon plus startup image on a real device.
