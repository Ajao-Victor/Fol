import React from "react";
import "./Services.css"; 

const Services = () => {
  return (
    <>
<section className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p>Empowering aspiring/Young developers with knowledge and hands-on experience in the PERN Stack.</p>

        <div className="service-cards">
          {/* PostgreSQL Service */}
          <div className="service-card">
            <i className="fas fa-database"></i>
            <h3>PostgreSQL Mastery</h3>
            <p>Learn how to efficiently design and manage databases using PostgreSQL, one of the most powerful relational databases.</p>
          </div>

          {/* Express.js Service */}
          <div className="service-card">
            <i className="fas fa-server"></i>
            <h3>Express.js Backend</h3>
            <p>Build scalable and robust RESTful APIs with Express.js, making backend development seamless and efficient.</p>
          </div>

          {/* React.js Service */}
          <div className="service-card">
            <i className="fab fa-react"></i>
            <h3>React.js Frontend</h3>
            <p>Develop dynamic, modern, and interactive user interfaces using the power of React.js.</p>
          </div>

          {/* Node.js Service */}
          <div className="service-card">
            <i className="fab fa-node"></i>
            <h3>Node.js & Full-Stack</h3>
            <p>Understand server-side JavaScript with Node.js and integrate it with the complete PERN stack for full-stack applications.</p>
          </div>

          {/* Mentorship and Community */}
          <div className="service-card">
            <i className="fas fa-users"></i>
            <h3>Mentorship & Community</h3>
            <p>Join a vibrant community of developers and get hands-on mentorship from experienced professionals.</p>
          </div>

          {/* Hands-on Projects */}
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Hands-on Projects</h3>
            <p>Apply what you learn by building real-world projects and strengthening your portfolio.</p>
          </div>
        </div>
      </div>
    </section>    
    </>
    
  );
};

export default Services;
