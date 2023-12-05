// Install react-router-dom with: npm install react-router-dom
// To use routing, we need to wrap the entire app in a BrowserRouter component, this is done in main.jsx

import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom' // This is new, these are components that we can use to create routes

function App() {

  //Remember, we can write these functional components in their own files 
  //to be exported and imported to the App component.
  //We've combined them here to simplify our example.
  const Home = (props) => {
    return (
      <div>
        <fieldset>
          <legend>Home Component</legend>
          <h2 style={{ color: "red" }}>Home Component</h2>

          {/* This is the new way of doing it, this is correct because it will not refresh the page */}
          <p>Desired behavior:
            <Link to={"/about"}> Go to About </Link>
          </p>

          <hr /> {/* This is just a horizontal line */}

          {/* This is the old way of doing it, this is wrong because it will refresh the page */}
          {/* An example of why we dont want to refresh the page is because we might lose data, ie. a form
          or shopping cart. */}
          <p>Undesired refresh:
            <a href="/about"> Go to About </a>
          </p>

        </fieldset>
      </div>
    );
  }

  const About = (props) => {
    return (
      <div>
        <fieldset>
          <legend>About Component</legend>
          <h2 style={{ color: "blue" }}>About Component</h2>
          <Link to={"/"}>Go Home</Link>
        </fieldset>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
