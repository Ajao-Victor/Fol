import React from "react";
import {  Link } from "react-router-dom";
import "./ReactLearning.css";

const ReactLearning = () => {
    const style = {
        padding:'5px'
    }
  return (
    <div className="container">
      <header className="header">
        <h1>Learning React.js: A Comprehensive Guide</h1>
        <p>Your journey from zero to building dynamic web applications with React.</p>
      </header>

      <section className="intro">
        <h2>What is React.js?</h2>
        <p>
          React.js is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. Rather than working with the whole DOM (Document Object Model), React uses a virtual DOM to update only the necessary parts of the page efficiently. This makes apps faster and more scalable.
        </p>
        <p>
          At its core, React encourages developers to build UIs using components – reusable, self-contained modules that define how a certain piece of the interface should look and behave.
        </p>
      </section>

      <section className="steps">
        <h2>Step-by-Step Roadmap to Learn React.js</h2>

        <article className="step">
          <h3>1. Master HTML, CSS, and JavaScript (ES6+)</h3>
          <p>Before diving into React, it's important to have a strong foundation in HTML, CSS, and especially JavaScript. Key ES6+ features like arrow functions, destructuring, template literals, spread/rest operators, and modules are essential in React.</p>
          <pre>
            <code style={{backgroundColor: 'black',borderRadius:'10px', padding:'10px'}}>{`// Example: Arrow Function & Destructuring
const greet = ({ name }) => console.log(\`Hello, \${name}!\`);
greet({ name: "Alice" });`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>2. Understand the Basics of React</h3>
          <ul>
            <li>What is a component?</li>
            <li>JSX – JavaScript XML Syntax</li>
            <li>Props and State</li>
            <li>Event Handling</li>
          </ul>
          <pre>
            <code style={{backgroundColor: 'black',borderRadius:'10px',padding: '10px'}}>{`// Example: Basic Component with Props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>3. Dive Into Functional Components and Hooks</h3>
          <p>
            Hooks like <code style={{color: 'blue'}}>useState</code> and <code style={{color: 'blue'}}>useEffect</code> allow you to manage state and lifecycle events in functional components without needing classes.
          </p>
          <pre>
            <code style={{backgroundColor: 'black',borderRadius:'10px',padding:'10px'}}>{`// Example: useState Hook
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>4. Learn Component Composition and Props Drilling</h3>
          <p>
            Break your UI into reusable components and learn how to pass data through props. Understand the concept of lifting state up and handling deeply nested components.
          </p>
        </article>

        <article className="step">
          <h3>5. React Router</h3>
          <p>
            Learn how to navigate between different pages or components using React Router.
          </p>
          <pre>
            <code  style={{backgroundColor: 'black',borderRadius:'10px', padding:'10px'}}>{`// Example: Basic Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code >
          </pre>
        </article>

        <article className="step">
          <h3>6. Managing State with Context API or Redux</h3>
          <p>
            For larger applications, you might need a global state management system. Learn Context API for simpler apps, or dive into Redux for more control and structure.
          </p>
        </article>

                           {/* REDUX */}
        <article>
        <div>
            <div style={{textAlign:'center',fontSize:'20px'}}>Learning Redux Through Real Code — Not Just Theory</div>
          <div style={style}>
          If you've ever built something in React and found yourself passing props through three or four layers of components just to get data where it needs to go… yeah, we’ve all been there. That’s where Redux steps in — it’s a powerful state management library that helps you centralize your app’s state and manage it in a predictable way.
          </div>

<div style={style}>
But let’s be honest: Redux can feel overwhelming at first. All the talk about “actions,” “reducers,” and “the store” doesn’t really click until you’ve seen it play out in a real application. That’s why we built one.
</div>

 <div style={style}>
 A Full Working App — Built with React and Redux
 We’ve put together a live, functional app that uses React for UI components and Redux for state management — not just as a demo, but as a teaching tool. It covers all the key Redux concepts in a way that feels natural and usable.
 </div>

<div style={style}>
You’ll be able to interact with the app, inspect how the state changes, and understand how the entire data flow works from dispatching actions to updating the UI.
</div>

 <div style={style}>
 Check out the live app here: <br/>
 <strong><Link to='https://github.com/Ajao-Victor/Robot-Friends'>Github Link</Link></strong> and <strong><Link to="https://robot-friends-tan.vercel.app/"> deployment link</Link></strong> <br/> 

What You’ll Learn From the App: <br/> 
-How to set up and configure the Redux store <br/> <br/>

-Connecting components using useSelector and useDispatch <br/> <br/>

-Structuring reducers and using combined reducers for scalability <br/> <br/>

-Creating and dispatching actions <br/> <br/>

-Using middleware like redux-thunk for async logic <br/> <br/>

-Managing global UI states (like modals, alerts, loading spinners, etc.) <br/> <br/>

-Real examples of updating and reading state across multiple components <br/> <br/>

And all of this is packed inside one intuitive interface where you can see how things work in the browser and follow the logic in the code.
 </div>

<div style={style}>
Why It Works
You can only get so far with isolated tutorials and YouTube videos. What really makes Redux click is context. Once you understand how the pieces fit together inside an actual application, you’ll stop memorizing patterns and start really using them. <br/><br/>

This project is meant to bridge that gap — to show you how Redux lives and breathes inside a working React app.<br/><br/>

So whether you're stuck trying to “lift state” in a growing project, or you're just curious what makes Redux such a go-to solution in larger applications, this live app is a great place to start.<br/><br/>

Take a look, explore the code, and don’t be afraid to break things. That’s the best way to learn. <br/>
</div>


          </div>
        </article>

        <article className="step">
          <h3>7. Working with APIs</h3>
          <p>
            Learn how to fetch data from APIs using <code style={{color:'blue'}}>fetch</code> or <code style={{color:'blue'}}>axios</code>, and how to manage loading states and errors.
          </p>
          <pre>
            <code  style={{backgroundColor: 'black',borderRadius:'10px', padding:'10px'}}>{`useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);`}</code>
          </pre>
        </article>

        <article className="step">
          <h3>8. Styling in React</h3>
          <p>
            Explore different styling approaches: CSS modules, styled-components, Tailwind CSS, or external stylesheets.
          </p>
        </article>

        <article className="step">
          <h3>9. Testing React Applications</h3>
          <p>
            Get comfortable with tools like Jest and React Testing Library for writing unit and integration tests.
          </p>
        </article>

        <article className="step">
          <h3>10. Deployment</h3>
          <p>
            Finally, learn how to deploy your React application using platforms like Vercel, Netlify, or GitHub Pages.
          </p>
        </article>
        <article>
        <div style={{padding: '10px',fontSize: '20px', textAlign:'center'}}>Unlocking React.js Through Real-World Experience</div>
<div style={style}>
React.js isn’t just a tool — it’s a mindset for building modern, dynamic interfaces that feel smooth and intuitive to the user. You can read a dozen articles, watch endless tutorials, and still not fully “get it” until you start working with it in a real-world context.
</div>

<div style={style}>
That’s why we’ve taken a different approach.

We didn’t just explain React in theory. We built an entire live application from scratch using all the foundational concepts — components, props, state, hooks, routing, API calls, conditional rendering, form handling, and more. The goal? To give you a hands-on, fully interactive experience of how React works behind the scenes.
</div>

<div style={style}>
The best way to learn is to see React in action — to click around, inspect the code, see what happens when you interact with the UI, and understand how the data flows from one component to another. This demo app is packed with all the essentials, but presented in a way that feels real — not like a toy example.
</div>

<div style={style}>
You can explore the live application here: <br/>
<strong><Link to='https://github.com/Ajao-Victor/RobotApp-React'>Github Link</Link> </strong> and <strong><Link to='https://robot-app-beta.vercel.app/'>  deployment link</Link></strong><br/>


Inside the app, we’ve included: <br/><br/>

- A clear folder structure and component hierarchy <br/><br/>

- Responsive design with modular components <br/><br/>

- State management using useState and useContext <br/><br/>

- Real API interaction with live data fetching <br/><br/>

- Full page reloads <br/><br/>

- Clean, readable code with comments throughout <br/> <br/>
</div>

<div style={style}>
It’s more than a demo — it’s a guided experience designed to walk you through React in a way that sticks. So whether you're a complete beginner or someone who just needs that final “aha” moment, this app was built with you in mind.
</div>
<div style={style}>
Take it for a spin, inspect the source, and start building with confidence. Because once you see how React fits together in a real application, the rest starts to make sense.
</div>
        </article>
      </section>

      <footer className="footer">
        <p>With consistent practice and building real-world projects, you’ll become confident in React. Happy coding!</p>
      </footer>
    </div>
  );
};

export default ReactLearning;
