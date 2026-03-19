import React from 'react';

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-content reveal">
        <img 
          src="assets/YDMW-303.JPEG" 
          alt="Marcus Williams headshot" 
          className="profile-image" 
        />

        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h1>Marcus Williams</h1>
          <p className="subtitle">
            Full-Stack Software Engineer focused on React, Node.js, C#, and distributed systems.
          </p>

          <div className="hero-actions">
            <a 
              href="https://github.com/MarcusACWilliams" 
              target="_blank" 
              rel="noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/marcus-williams-1a3b46135" 
              target="_blank" 
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
