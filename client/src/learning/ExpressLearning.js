import React from "react";
import "./ExpressLearning.css";
import { Link } from "react-router-dom";

const ExpressLearning = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Mastering Express.js: From Fundamentals to Real Applications</h1>
        <p>A developer's walkthrough to understanding, building, and deploying with Express.js</p>
      </header>

      <section className="intro">
        <h2>What is Express.js?</h2>
        <p>
          Express.js is a lightweight and flexible Node.js web application framework that provides a robust set of features for building APIs and web applications. It simplifies the process of building server-side logic by offering an easy-to-use layer over Node's native HTTP module.
        </p>
        <p>
          In simpler terms, Express helps developers create web servers and APIs faster and with less code. Whether you’re building a basic REST API or a full-stack application, Express is often the go-to solution for backend development in JavaScript.
        </p>
      </section>

      <section className="steps">
        <h2>Learning Express.js Step by Step</h2>

        <article className="step">
          <h3>1. Understand the Basics of Node.js</h3>
          <p>Since Express runs on Node.js, you’ll need to understand how Node works—especially modules, the event loop, and handling asynchronous operations with callbacks, promises, or async/await.</p>
          <pre>
            <code>{`// Node.js basic HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});
server.listen(3000);`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>2. Setting Up Express</h3>
          <p>Install Express using npm and set up a basic server.</p>
          <pre>
            <code>{`// Terminal
npm init -y
npm install express`}</code>
          </pre>
          <pre>
            <code>{`// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>3. Middleware and Routing</h3>
          <p>Middleware functions are functions that have access to the request and response objects. They’re the core of Express and allow you to manipulate and handle requests in a clean way.</p>
          <pre>
            <code>{`app.use(express.json()); // Middleware to parse JSON

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>4. Organizing Routes and Controllers</h3>
          <p>As your application grows, it's essential to separate logic into routes and controllers for better structure.</p>
          <pre>
            <code>{`// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('User list');
});

module.exports = router;

// In app.js
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>5. Using Environment Variables</h3>
          <p>Use the <code>dotenv</code> package to keep configuration values like database credentials out of your source code.</p>
          <pre>
            <code>{`// .env
PORT=4000

// app.js
require('dotenv').config();
const port = process.env.PORT || 3000;
app.listen(port);`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>6. Connecting to a Database</h3>
          <p>Whether you're using MongoDB, PostgreSQL, or MySQL, you’ll need to connect Express to a database. Example with MongoDB:</p>
          <pre>
            <code>{`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>7. Building Real Applications</h3>
          <p>Now apply what you’ve learned to a real-world project. For example, you can build a RESTful API for a blog platform or a simple e-commerce backend.</p>
          <pre>
            <code>{`// Basic CRUD route example
app.put('/posts/:id', (req, res) => {
  // Update logic here
  res.send('Post updated');
});`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>8. Error Handling</h3>
          <p>Always have error-handling middleware in place to catch and respond to unexpected issues.</p>
          <pre>
            <code>{`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>9. Deployment</h3>
          <p>You can deploy your Express app using services like Heroku, Render, or Railway. Make sure to configure your app for production by setting appropriate environment variables and security headers.</p>
        </article>

        <article className="step">
          <h3>10. Live Demo of Express in Action</h3>
          <p>We’ve created a live demo app built entirely using Express.js — from routes and middleware to database integration and error handling. It’s designed to show you the practical side of Express, and give you ideas for your own projects.</p>
          <p>👉 <strong> <Link to='https://github.com/Ajao-Victor/server-creation'>Check out the live demo here</Link></strong></p>
        </article>
      </section>

      <footer className="footer">
        <p>Express is more than just a tool — it’s a foundation for modern web APIs. Build, test, deploy, and most importantly, keep experimenting. That’s how you learn.</p>
      </footer>
    </div>
  );
};

export default ExpressLearning;
