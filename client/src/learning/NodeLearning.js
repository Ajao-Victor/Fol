import React from "react";
import "./NodeLearning.css";
import NodeOverview from "./NodeOverview";
import { Link } from "react-router-dom";


const NodeLearning = () => {
  const commands = [
    { command: "node -v", description: "Checks the installed version of Node.js.", example: "node -v" },
    { command: "npm -v", description: "Displays the installed version of npm.", example: "npm -v" },
    { command: "node", description: "Starts the Node.js REPL environment.", example: "node" },
    { command: "npm init -y", description: "Initializes a new Node.js project with default settings.", example: "npm init -y" },
    { command: "npm install <package>", description: "Installs a package locally.", example: "npm install express" },
    { command: "npm install -g <package>", description: "Installs a package globally.", example: "npm install -g nodemon" },
    { command: "npm uninstall <package>", description: "Removes a package.", example: "npm uninstall express" },
    { command: "npm update", description: "Updates all packages to the latest versions.", example: "npm update" },
    { command: "node file.js", description: "Runs a JavaScript file using Node.js.", example: "node server.js" },
    { command: "npm start", description: "Runs the start script defined in package.json.", example: "npm start" },
    { command: "npm run <script>", description: "Runs a custom script from package.json.", example: "npm run dev" },
    { command: "nodemon file.js", description: "Runs a file and restarts on changes.", example: "nodemon app.js" },
    { command: "require('module')", description: "Loads a module in CommonJS syntax.", example: "const fs = require('fs');" },
    { command: "import module from 'module'", description: "Loads a module in ES6 syntax.", example: "import express from 'express';" },
    { command: "module.exports = {}", description: "Exports a module for other files.", example: "module.exports = { myFunction };" },
    { command: "process.env", description: "Accesses environment variables.", example: "console.log(process.env.PORT);" },
    { command: "fs.readFile()", description: "Reads a file asynchronously.", example: "fs.readFile('file.txt', 'utf8', (err, data) => console.log(data));" },
    { command: "fs.writeFile()", description: "Writes data to a file asynchronously.", example: "fs.writeFile('file.txt', 'Hello World', err => console.log('Saved!'));" },
    { command: "http.createServer()", description: "Creates an HTTP server.", example: "const server = http.createServer((req, res) => res.end('Hello World!'));" },
    { command: "os.platform()", description: "Gets the OS platform.", example: "console.log(os.platform());" },
    { command: "os.cpus()", description: "Displays CPU details.", example: "console.log(os.cpus());" },
    { command: "path.join()", description: "Joins multiple path segments.", example: "console.log(path.join(__dirname, 'public', 'index.html'));" },
    { command: "path.basename()", description: "Gets the last part of a path.", example: "console.log(path.basename('/usr/local/bin/node'));" },
    { command: "setTimeout()", description: "Executes a function after a delay.", example: "setTimeout(() => console.log('Hello'), 2000);" },
    { command: "setInterval()", description: "Executes a function repeatedly after a delay.", example: "setInterval(() => console.log('Repeating'), 2000);" },
    { command: "console.log()", description: "Logs a message to the console.", example: "console.log('Hello World');" },
    { command: "console.error()", description: "Logs an error message.", example: "console.error('Something went wrong!');" },
    { command: "console.warn()", description: "Logs a warning message.", example: "console.warn('This is a warning');" },
    { command: "crypto.createHash()", description: "Creates a cryptographic hash.", example: "const hash = crypto.createHash('sha256').update('password').digest('hex');" },
    { command: "eventEmitter.on()", description: "Listens for an event.", example: "eventEmitter.on('data', () => console.log('Data received'));" },
    { command: "eventEmitter.emit()", description: "Emits an event.", example: "eventEmitter.emit('data');" },
  ];

  return (
    <div className="containe">
      <h1> Node.js</h1> &nbsp; &nbsp;
      <p>
        Node.js is an open-source, cross-platform JavaScript runtime environment
        that executes JavaScript code outside a web browser. Built on Chrome’s
        V8 engine, it enables fast and scalable applications.
      </p>&nbsp;

      <h2>Applications of Node.js</h2>
      <ul style={{color: "black"}}>
        <li>Backend API development</li>
        <li>Real-time applications (chat, notifications)</li>
        <li>Command-line tools</li>
        <li>Streaming applications</li>
        <li>Microservices architecture</li>
      </ul>
      <h1>Node.js: The Complete Guide</h1>
      <div>
        <div>
            <h3>What is Node.js?</h3> &nbsp;
<p style={{marginBottom: '15px'}}>Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript outside of a web browser. Built on Google Chrome’s V8 JavaScript engine, it provides an efficient, event-driven, non-blocking I/O model, making it lightweight and scalable.

Node.js allows developers to use JavaScript for server-side programming, enabling full-stack development with a single language across both frontend and backend.</p>
<h3>Key Features of Node.js</h3>
        </div>
        <div style={{marginBottom: '15px'}}> &nbsp;
            {/* <h3>Key Features of Node.js</h3> */}
            <ol style={{color: "black"}}>
                <li>Single Programming Language: Use JavaScript for both frontend and backend.</li>
                <li>Asynchronous & Non-Blocking I/O: Efficiently handles multiple requests simultaneously.</li>
                <li>Event-Driven Architecture: Uses an event loop to manage execution without waiting.</li>
                <li>Fast Performance: Built on Google’s V8 engine, it compiles JavaScript into machine code for speed.</li>
                <li>Cross-Platform: Works on Windows, macOS, and Linux</li>
                <li>Huge Ecosystem (npm): Access to over 1.5 million open-source packages.</li>
            </ol>
        </div>

        <div style={{marginBottom: '15px'}}> 
            <h3>What is Node.js Used For?</h3>
            <span>
                <p>1. Web Development (Backend)
Used with frameworks like Express.js and Next.js to build web applications.
Enables RESTful APIs, GraphQL APIs, and microservices.</p> &nbsp;
                <p>2. Real-Time Applications
Used in chat applications, live notifications, and collaborative tools.
Example: WebSockets for bi-directional communication in real-time.</p> &nbsp;
                <p>3. API Development
Efficient for REST APIs and GraphQL APIs that interact with databases.
Works with databases like PostgreSQL, MongoDB, MySQL.</p> &nbsp;
                <p>4. Streaming Applications
Handles data streaming efficiently (e.g., Netflix, YouTube).
Uses Streams API to process data in chunks.</p> &nbsp;
                <p>5. Serverless Computing
Powers cloud-based applications using services like AWS Lambda and Google Cloud Functions.</p> &nbsp;
                <p>6. Internet of Things (IoT)
Handles real-time sensor data for smart devices.
Supports MQTT protocol for IoT communication.</p> &nbsp;
                <p>7. Command-Line Tools
Automates tasks using CLI-based Node.js scripts.</p>
            </span>
        </div> &nbsp;

        <div>
           <h2>How Does Node.js Work?
           </h2> &nbsp;
           <p>Node.js operates on a single-threaded, event-driven architecture that makes it scalable.
</p>
<h3>The Node.js Event Loop</h3> &nbsp;
<span style={{color: "black"}}>
* Unlike traditional multi-threaded environments, Node.js uses a single thread. <br/>
* It doesn’t block execution but instead delegates tasks like file handling or database queries to the system. <br/>
* Uses callbacks and promises to handle asynchronous tasks efficiently.
    </span><br/>

        </div>
      
      </div>

      <div style={{marginTop: '15px',marginBottom: '15px'}}>
        <NodeOverview/>
      </div>

      <h2>Node.js Commands</h2>
      {commands.map((cmd, index) => (
        <div key={index} className="command-container">
          <h3>{cmd.command}</h3>
          <p>{cmd.description}</p>
          <div className="code-snippet">
            <code>{cmd.example}</code>
          </div>
        </div>
      ))}
      <div style={{padding:'20px 10px 20px 10px',display: 'flex',flexDirection: "column",justifyContent:"space-aroung" ,textDecoration: 'none',color:"white"}}>
        <p><strong><Link to='https://github.com/Ajao-Victor/server-creation'> Check Application on Github </Link></strong></p>
      <p><strong><Link to='https://nodejs.org/docs/latest/api/'> READ MORE </Link></strong></p>
      </div>
    </div>
  );
};
export default NodeLearning;
