# Marcus Williams Portfolio

Single-page developer portfolio built with semantic HTML, modern CSS, and lightweight JavaScript.

## Project Structure

```text
.
|-- index.html
|-- manifest.json
|-- service-worker.js
|-- styles.css
|-- script.js
`-- assets
    |-- _MG_0745_edit_ (1).jpg
    |-- marcus_williams_resume.pdf
    |-- icons/
    `-- splash/
```

## Local Preview (VS Code)

1. Open the `Portfolio` folder in VS Code.
2. Install the `Live Server` extension if needed.
3. Right-click `index.html` and choose `Open with Live Server`.
4. Open the site over `http://localhost` rather than `file://` so the service worker and install prompt can work.

## PWA Features

- Installable as a Progressive Web App on supported mobile and desktop browsers.
- Includes a web app manifest, offline app-shell caching, a home-screen icon, and an iPhone launch image.
- Uses `display: standalone` so the installed site opens like an app.

## Content Files You Should Add

1. `assets/profile.jpg`: your professional headshot.
2. `assets/Marcus-Williams-Resume.pdf`: your latest resume PDF.

The current project already includes a headshot and resume file with these names:

- `assets/_MG_0745_edit_ (1).jpg`
- `assets/marcus_williams_resume.pdf`

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
- For iPhone home-screen testing, add the deployed site to the home screen from Safari and verify the icon plus startup image on a real device.
