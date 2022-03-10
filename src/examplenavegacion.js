import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ExampleReactBoostrap from "./exampleractboostrap.js";
import Timer from "./timer.js";
import HelloMessage from "./hello.js";
import Comment from "./comment.js";
import TodoApp from "./todoapp.js";

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};


export default function ExampleNavegacion() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comment">Comment</Link>
          </li>
          <li>
            <Link to="/hello">Hello Message</Link>
          </li>
          <li>
            <Link to="/reactBootstrap">React-Bootstrap</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/todo">TodoApp</Link>
          </li>
          <li>
            <Link to="/stateHook">Hook estado</Link>
          </li>
          <li>
            <Link to="/effectHook">Hook efecto</Link>
          </li>
        </ul>

        <hr />

        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/comment" element={<Comment{...comment} />}></Route>
          <Route path="/hello" element={<HelloMessage />}></Route>
          <Route path="/reactBootstrap" element={<ExampleReactBoostrap />}></Route>
          <Route path="/timer" element={<Timer />}></Route>
          <Route path="/todo" element={<TodoApp />}></Route>
          <Route path="/stateHook" element={<StateHook />}></Route>
          <Route path="/effectHook" element={<EffectHook />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function StateHook() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function EffectHook() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


