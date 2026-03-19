import React from 'react';

function Projects() {
  return (
    <section className="section reveal" aria-labelledby="projects-title">
      <div className="container panel">
        <h2 id="projects-title">Projects</h2>
        <p>
          This space is reserved for interactive project demos. The container below can be used
          to mount or embed a standalone web app directly into the portfolio.
        </p>
        <div 
          className="project-embed-container" 
          id="project-app-container" 
          aria-label="Embedded project application container"
        >
          <div className="project-embed-placeholder">
            <p className="project-embed-eyebrow">Embedded App Slot</p>
            <h3>Project Showcase Container</h3>
            <p>
              Replace this placeholder with an iframe, script mount point, or another deployed
              web application when the project is ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
