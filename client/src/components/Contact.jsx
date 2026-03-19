import React from 'react';

function Contact() {
  return (
    <section className="section reveal" aria-labelledby="contact-title">
      <div className="container panel contact-panel">
        <h2 id="contact-title">Contact</h2>
        <p>
          Open to full-time software engineering opportunities and consulting engagements.
        </p>
        <div className="contact-actions">
          <a href="mailto:hello@marcuswilliams.dev">Email: hello@marcuswilliams.dev</a>
          <a href="assets/marcus_williams_resume.pdf" download="Marcus-Williams-Resume.pdf">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
