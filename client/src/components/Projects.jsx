import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="panel">
          <h2>Projects</h2>

          <article className="game-project">
            <h3>Zombastic Survival Prototype</h3>

            <p>
              A Godot 3 top-down survival prototype featuring randomized
              enemy waves, automatic targeting, health regeneration, and
              a complete victory and restart loop.
            </p>

            <div className="game-frame">
              <iframe
                src="/games/zombastic/"
                title="Zombastic survival game demo"
                allow="fullscreen"
                allowFullScreen
              />
            </div>

            <p className="game-help">
              Click inside the game before using WASD or the arrow keys.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;