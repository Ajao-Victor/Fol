import React from "react";
import "./NodeOverview.css";

const NodeOverview = () => {
  return (
    <div className="node-container">
      <h1>🌍 Introduction to Node.js</h1> &nbsp;
      <p>
        <strong>Node.js</strong> is an open-source, cross-platform JavaScript runtime built on 
        Chrome’s V8 engine. It enables developers to use JavaScript for server-side scripting, 
        allowing them to create scalable network applications with a single programming language.
      </p> &nbsp;

      <h2>🚀 Key Features of Node.js</h2>
      <ul>
        <li><strong>Asynchronous & Non-Blocking I/O:</strong> Handles multiple requests simultaneously.</li> 
        <li><strong>Single Programming Language:</strong> JavaScript for both frontend and backend.</li>
        <li><strong>Event-Driven Architecture:</strong> Uses an event loop for efficient execution.</li>
        <li><strong>Fast Performance:</strong> Powered by Google’s V8 JavaScript engine.</li>
        <li><strong>Massive Ecosystem:</strong> Over a million packages available via npm.</li>
      </ul>

      <h2>📌 Applications of Node.js</h2>
      <ul>
        <li>🔹 Web Applications (e.g., Express.js, Next.js)</li>
        <li>🔹 RESTful APIs & Microservices</li>
        <li>🔹 Real-Time Applications (e.g., Chat Apps, WebSockets)</li>
        <li>🔹 Serverless Computing</li>
        <li>🔹 IoT Applications</li>
        <li>🔹 Command-Line Tools</li>
      </ul>

      <h2>🛠️ Node.js Architecture</h2>
      <p>
        Node.js follows a single-threaded, event-driven architecture that makes it lightweight and 
        efficient. It uses a <strong>non-blocking event loop</strong> to handle multiple requests 
        asynchronously.
      </p> &nbsp;

      <h2>📦 Node.js Core Modules</h2>
      <p>
        Node.js provides several built-in modules for different functionalities:
      </p>
      <ul>
        <li><strong>fs:</strong> Handles file system operations.</li>
        <li><strong>http:</strong> Creates HTTP servers and handles requests.</li>
        <li><strong>path:</strong> Works with file and directory paths.</li>
        <li><strong>os:</strong> Retrieves operating system-related data.</li>
        <li><strong>crypto:</strong> Provides cryptographic functionalities.</li>
      </ul>

      <h2>📜 Essential Node.js Commands</h2>
      <div className="commands">
        <div className="command-box">
          <h3>Check Node.js Version</h3>
          <p>Displays the installed version of Node.js.</p>
          <div className="code-block"><code>node -v</code></div>
        </div>

        <div className="command-box">
          <h3>Initialize a New Node.js Project</h3>
          <p>Creates a package.json file for managing dependencies.</p>
          <div className="code-block"><code>npm init -y</code></div>
        </div>

        <div className="command-box">
          <h3>Install a Package</h3>
          <p>Installs a package and adds it to dependencies.</p>
          <div className="code-block"><code>npm install express</code></div>
        </div>

        <div className="command-box">
          <h3>Run a Node.js File</h3>
          <p>Executes a JavaScript file with Node.js.</p>
          <div className="code-block"><code>node app.js</code></div>
        </div>

        <div className="command-box">
          <h3>Start a Simple HTTP Server</h3>
          <p>Creates an HTTP server using the built-in http module.</p>
          <div className="code-block">
            <code>
              {`const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js!');
});
server.listen(3000, () => console.log('Server running on port 3000'));`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeOverview;
