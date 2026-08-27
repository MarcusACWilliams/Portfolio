import React, { useEffect } from 'react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.57 22c.57.1.78-.24.78-.55v-2.18c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.54-.29-5.21-1.27-5.21-5.59 0-1.23.44-2.24 1.18-3.03-.12-.29-.51-1.45.11-2.99 0 0 .96-.31 3.12 1.16a10.9 10.9 0 0 1 5.69 0c2.16-1.47 3.11-1.16 3.11-1.16.62 1.54.23 2.7.11 2.99.74.79 1.18 1.8 1.18 3.03 0 4.33-2.68 5.29-5.23 5.57.41.36.78 1.05.78 2.12v3.14c0 .31.21.66.79.55A11.3 11.3 0 0 0 12 .7Z"/></svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.32 7.77A2.3 2.3 0 1 0 5.3 3.18a2.3 2.3 0 0 0 .02 4.59ZM3.33 20.67h3.98V9.1H3.33v11.57ZM9.71 9.1h3.81v1.58h.05c.53-1 1.83-2.06 3.77-2.06 4.04 0 4.78 2.66 4.78 6.12v5.93h-3.97v-5.26c0-1.25-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78v5.35H9.71V9.1Z"/></svg>
);

const CodePenIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 1.8 10 6.66v7.08L12 22.2 2 15.54V8.46L12 1.8Zm-1 3.15L5.18 8.82 11 12.7V4.95Zm2 0v7.75l5.82-3.88L13 4.95Zm-7.8 6.2-1.2.8v.1l1.2.8 3.4 2.27 2.6-1.73-6-4Zm13.6 0-6 4 2.6 1.73 3.4-2.27 1.2-.8v-.1l-1.2-.8ZM11 16.32l-4 2.66L11 21.65v-5.33Zm2 0v5.33l4-2.67-4-2.66Z"/></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.1 2.75h9.8a4.36 4.36 0 0 1 4.35 4.35v9.8a4.36 4.36 0 0 1-4.35 4.35H7.1a4.36 4.36 0 0 1-4.35-4.35V7.1A4.36 4.36 0 0 1 7.1 2.75Zm0 1.8A2.55 2.55 0 0 0 4.55 7.1v9.8a2.55 2.55 0 0 0 2.55 2.55h9.8a2.55 2.55 0 0 0 2.55-2.55V7.1a2.55 2.55 0 0 0-2.55-2.55H7.1Zm10.25 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 1.8a2.95 2.95 0 1 0 0 5.9 2.95 2.95 0 0 0 0-5.9Z"/></svg>
);

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/MarcusACWilliams', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcus-williams-1a3b46135', Icon: LinkedInIcon },
];

const placeholderSocials = [
  { label: 'CodePen profile not configured', Icon: CodePenIcon },
  { label: 'Instagram profile not configured', Icon: InstagramIcon },
];

const jobs = [
  {
    period: '2022 — PRESENT',
    role: 'Software Developer',
    company: 'Vertex Incorporated',
    description: 'Build and improve enterprise financial applications, automation, and delivery workflows across a cross-functional engineering environment.',
    tags: ['C#', 'React', 'Node.js', 'SQL Server', 'Selenium', 'CI/CD'],
  },
  {
    period: '2019 — 2022',
    role: 'Software Engineer',
    company: 'Entech Consulting',
    description: 'Developed multi-tier applications, ERP integrations, reporting, and backend services for financial-services clients.',
    tags: ['C#', 'JavaScript', 'SQL Server', 'SSRS', 'SuiteScript'],
  },
  {
    period: '2018 — 2019',
    role: 'Software Developer',
    company: 'Shadow Financial Systems',
    description: 'Built backend features for securities processing and reconciliation systems supporting financial workflows.',
    tags: ['C#', 'SQL Server', '.NET'],
  },
];

function SocialBar() {
  return (
    <div className="social-bar" aria-label="Social profiles">
      {socialLinks.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
          <Icon />
        </a>
      ))}
      {placeholderSocials.map(({ label, Icon }) => (
        <span key={label} className="social-placeholder" aria-label={label} title={label}>
          <Icon />
        </span>
      ))}
    </div>
  );
}

function SectionHeader({ children }) {
  return <h2 className="section-label">{children}</h2>;
}

function App() {
  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-nav-section]')];
    const links = [...document.querySelectorAll('.toc-link')];
    if (!sections.length || !links.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#about">Skip to main content</a>

      <aside className="sidebar">
        <div className="identity-block">
          <a className="home-link" href="#about" aria-label="Back to top">
            <h1>Marcus Williams</h1>
          </a>
          <p className="role">Software Engineer</p>
          <p className="tagline">I build reliable software systems that solve real-world problems and make an impact.</p>
        </div>

        <SocialBar />

        <nav className="table-of-contents" aria-label="Page sections">
          <a className="toc-link active" href="#about"><span className="toc-line" />ABOUT</a>
          <a className="toc-link" href="#experience"><span className="toc-line" />EXPERIENCE</a>
          <a className="toc-link" href="#projects"><span className="toc-line" />PROJECTS</a>
        </nav>

        <div className="sidebar-social"><SocialBar /></div>
      </aside>

      <main className="content" id="main-content">
        <section id="about" className="content-section about-section" data-nav-section>
          <SectionHeader>About</SectionHeader>
          <div className="prose">
            <p>
              I&apos;m a software engineer focused on building dependable, user-centered applications. My work spans full-stack product development, enterprise financial systems, test automation, and CI/CD.
            </p>
            <p>
              I&apos;ve worked across secure fintech environments where correctness, maintainability, and clear system boundaries matter. I enjoy connecting frontend experiences to robust backend services and improving the engineering workflows around them.
            </p>
            <p>
              My core toolkit includes <strong>C#</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>SQL Server</strong>, automated testing, and cloud deployment on <strong>AWS</strong>.
            </p>
          </div>

          <div className="skill-strip" aria-label="Core skills">
            {['C#', 'Java', 'JavaScript', 'React', 'Node.js', 'SQL Server', 'Selenium', 'GitHub Actions', 'AWS'].map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section experience-section" data-nav-section>
          <SectionHeader>Experience</SectionHeader>
          <div className="experience-list">
            {jobs.map(job => (
              <article className="experience-card" key={`${job.company}-${job.period}`}>
                <p className="experience-period">{job.period}</p>
                <div className="experience-body">
                  <h3>{job.role} <span>· {job.company}</span></h3>
                  <p>{job.description}</p>
                  <div className="tag-list">
                    {job.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className="text-link" href="/assets/marcus_williams_resume.pdf" target="_blank" rel="noreferrer">
            View Full Résumé <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section id="projects" className="content-section projects-section" data-nav-section>
          <SectionHeader>Projects</SectionHeader>

          <article className="project-card featured-project">
            <div className="project-copy">
              <p className="project-kicker">Featured project</p>
              <h3>Zombastic Survival Prototype <span aria-hidden="true">↗</span></h3>
              <p>
                A Godot 3 top-down survival prototype with randomized enemy waves, automatic targeting, health regeneration, and a complete victory and restart loop.
              </p>
              <div className="tag-list">
                <span>Godot 3</span><span>GDScript</span><span>Web Export</span><span>Game Systems</span>
              </div>
            </div>
            <div className="game-frame">
              <iframe
                src="/games/zombastic/"
                title="Zombastic survival game demo"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
            <p className="game-help">Click inside the game before using WASD or the arrow keys.</p>
          </article>

          <article className="project-card compact-project">
            <div className="project-mark" aria-hidden="true">MW</div>
            <div>
              <h3>Portfolio & Deployment Pipeline</h3>
              <p>Responsive React portfolio deployed to AWS EC2 with Nginx and automated GitHub Actions delivery.</p>
              <div className="tag-list"><span>React</span><span>AWS EC2</span><span>Nginx</span><span>GitHub Actions</span></div>
            </div>
          </article>
        </section>

        <section className="content-section contact-section" aria-labelledby="contact-heading">
          <SectionHeader>Contact</SectionHeader>
          <p id="contact-heading">Open to software engineering opportunities and conversations about building reliable products.</p>
          <div className="contact-links">
            <a href="mailto:hello@marcuswilliams.dev">Email me <span aria-hidden="true">↗</span></a>
            <a href="/assets/marcus_williams_resume.pdf" download="Marcus-Williams-Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <footer className="site-footer">
          <p>Designed and built by Marcus Williams.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
