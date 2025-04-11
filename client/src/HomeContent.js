import React from "react";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="pern-container">
      <header className="pern-header">
        <h1 style={{paddingBottom: '30px'}}>Introduction to PERN Stack Web Development</h1>
        {/* <p>
          The PERN stack is a full-stack JavaScript framework combining PostgreSQL, Express.js, React.js, and Node.js. <br/> It enables developers to build scalable, high-performance web applications.
        </p> */}
        <div style={{color:'white'}}>
        The PERN stack — made up of PostgreSQL, Express.js, React.js, and Node.js — is one of the most powerful full stack tools used to build modern web applications. It's great for beginners because it uses JavaScript across both the frontend and backend, making learning and development more streamlined.

PostgreSQL is the database where all your structured data lives.

Express.js is the backend framework that handles routing, APIs, and server logic.

React.js is the frontend library that builds interactive, dynamic user interfaces.

Node.js is the server environment that runs your backend JavaScript code.<br/>

Learning Path Overview
Start with JavaScript basics, HTML, and CSS to build a strong foundation.

Learn React to handle the frontend interface and how users interact with your app.

Move to Express.js and Node.js to build backend routes and APIs.

Understand PostgreSQL and how to connect it to your backend for saving and retrieving data.

Connect the frontend and backend, allowing React to fetch data from Express.

Implement authentication using tools like JWT and bcrypt for secure login systems.

Deploy your application using services like Render, Railway, or Heroku for the backend, and Netlify or GitHub Pages for the frontend.

With this stack, you can build anything from personal blogs and dashboards to real-time apps and full SaaS products. It’s a perfect starting point for anyone looking to become a self-sufficient full stack developer.
        </div>
      </header>

      <section className="pern-section">
        <h2> PostgreSQL – The Database Backbone</h2>
        <p style={{color:'white'}}>
          PostgreSQL is an open-source, object-relational database known for its scalability, security, and flexibility.
        </p>
        <ul>
          <li>ACID compliance ensures data integrity.</li>
          <li>Supports JSON and NoSQL-like operations.</li>
          <li>Advanced indexing techniques for optimized performance.</li>
          <li>Highly extensible for custom data types and operators.</li>
        </ul>
      </section>

      <section className="pern-section">
        <h2>Express.js – The Backend Framework</h2>
        <p style={{color:'white'}}>
          Express.js is a minimalist and efficient backend framework for handling HTTP requests and managing APIs.
        </p>
        <ul>
          <li>Efficient routing system for API endpoints.</li>
          <li>Middleware support for request processing.</li>
          <li>Seamless integration with PostgreSQL.</li>
          <li>Scalable and lightweight.</li>
        </ul>
      </section>

      <section className="pern-section">
        <h2>React.js – The Frontend Powerhouse</h2>
        <p style={{color:'white'}}> 
          React.js, developed by Facebook, allows developers to create fast and interactive user interfaces.
        </p>
        <ul>
          <li>Virtual DOM for efficient rendering.</li>
          <li>Reusable components for modular development.</li>
          <li>State management for dynamic updates.</li>
          <li>SEO optimization with server-side rendering.</li>
        </ul>
      </section>

      <section className="pern-section">
        <h2> Node.js – The JavaScript Runtime</h2>
        <p style={{color:'white'}}>
          Node.js enables JavaScript execution on the server-side, enhancing performance and scalability.
        </p>
        <ul>
          <li>Asynchronous, event-driven architecture.</li>
          <li>Cross-platform compatibility.</li>
          <li>Rich ecosystem with npm support.</li>
          <li>High performance with V8 engine.</li>
        </ul>
      </section>

      <section className="pern-section">
        <h2>How the PERN Stack Works Together</h2>
        <ol>
          <li><strong>Frontend (React.js):</strong> Users interact with the UI.</li>
          <li><strong>Backend (Express.js & Node.js):</strong> React communicates with the backend.</li>
          <li><strong>Database (PostgreSQL):</strong> The backend queries and manages data.</li>
          <li><strong>Response to Frontend:</strong> The backend updates the UI with retrieved data.</li>
        </ol>
      </section>

      <section className="pern-section">
        <h2> Why Choose the PERN Stack?</h2>
        <ul>
          <li>Full JavaScript stack for seamless development.</li>
          <li>Open-source with strong community support.</li>
          <li>High scalability and performance.</li>
          <li>Supports RESTful and GraphQL APIs.</li>
        </ul>
      </section>

      <section className="pern-section">
        <h2> Getting Started with the PERN Stack</h2>
        <ol>
          <li>Install PostgreSQL and create a database.</li>
          <li>Initialize a Node.js project and install Express.js.</li>
          <li>Set up React.js as the frontend.</li>
          <li>Connect backend to PostgreSQL using the pg library.</li>
          <li>Develop RESTful APIs to interact with the database.</li>
          <li>Deploy using platforms like Heroku, Vercel, or AWS.</li>
        </ol>
      </section>

      <footer className="pern-footer">
        <h2 style={{color:'white'}}>Conclusion</h2>
        <p style={{color:'white'}}>
          The PERN stack is a modern, efficient, and scalable solution for full-stack web development. Mastering it opens doors to building high-performance applications with JavaScript. &nbsp;Sign in for individual regions of Full Stack web development  &nbsp;  [PostgreSQL, Express.js,React.js including Redux and Node.js] to know more about what each of them deeply entails
        </p>
      </footer>
    </div>
  );
};

export default HomeContent;
