import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: 'Python, C#, JavaScript, SQL'
    },
    {
      title: 'Frontend',
      skills: 'React, HTML, CSS, SCSS'
    },
    {
      title: 'Backend',
      skills: 'Node.js, Express, .NET'
    },
    {
      title: 'Databases',
      skills: 'SQL Server, MongoDB'
    },
    {
      title: 'Testing',
      skills: 'Selenium, Cucumber, TestNG, Jest'
    },
    {
      title: 'DevOps',
      skills: 'GitHub Actions, CI/CD Pipelines'
    }
  ];

  return (
    <section className="section reveal" aria-labelledby="skills-title">
      <div className="container panel">
        <h2 id="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article key={index}>
              <h3>{category.title}</h3>
              <p>{category.skills}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
