import React from 'react';

function Experience() {
  const jobs = [
    {
      company: 'Vertex Incorporated',
      title: 'Software Developer',
      period: '2022 - Present',
      responsibilities: [
        'Developed full-stack application features using React and Node.js supporting enterprise financial workflows.',
        'Refactored legacy .NET components into microservices reducing latency by 25%.',
        'Optimized SQL Server queries and MongoDB data models for high-volume financial datasets.',
        'Implemented CI/CD pipelines with GitHub Actions reducing release cycles by 40%.'
      ]
    },
    {
      company: 'Entech Consulting',
      title: 'Software Engineer',
      period: '2019 - 2022',
      responsibilities: [
        'Developed multi-tier enterprise applications for Fortune 500 financial clients.',
        'Built backend services supporting high-availability financial transaction processing.',
        'Produced architecture documentation and testing frameworks.'
      ]
    },
    {
      company: 'Shadow Financial Systems',
      title: 'Software Developer',
      period: '2018 - 2019',
      responsibilities: [
        'Built backend services for securities processing and reconciliation systems.',
        'Developed platform features using C# and SQL supporting trading workflows.'
      ]
    }
  ];

  return (
    <section className="section reveal" aria-labelledby="experience-title">
      <div className="container panel">
        <h2 id="experience-title">Professional Experience</h2>

        {jobs.map((job, index) => (
          <article key={index} className="job">
            <header>
              <h3>{job.company}</h3>
              <p className="job-title">{job.title} | {job.period}</p>
            </header>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
