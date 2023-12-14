import React from 'react'
import './App.css'

import {
  Routes, // Used to define the different Routes
  Route, // Used to define a Route
  Link, // Used to create a link to a Route, which we did for the demo buttons
  useParams, // Used to get the value of the URL parameter
  useNavigate // Used to navigate to a different Route
} from 'react-router-dom'

import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import WordColor from './components/WordColor'


function App() {
  // useNavigate is a hook that returns a navigate function, so we need to 
  // assign it to a variable to later use to go back in the history
  const navigate = useNavigate();

  // Test to see if the value is a number or a word
  // Passes the value as a param to the Number and Word components
  function NumberOrWord() {
    const { value } = useParams();
    return isNaN(value) ? <Word /> : <Number />;
  }

  return (
    <div className="App">
      <h1>Routing Params Navigate</h1>
      <p> Type different values into the URL to see different components </p>
      <p> or try predefined values below: </p>

    {/* These demo buttons pass predefined values to the URL for Routes to use */}
      <p>
        <Link to="/"> Home ("/") </Link> |
        <Link to="/4"> Number </Link> |
        <Link to="/hello"> Word </Link> |
        <Link to="/hello/blue/red"> WordColor </Link>
      </p>

      {/* Different ways to navigate, using the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:value" element={<NumberOrWord />} />
        <Route path='/:word/:color/:backgroundColor' element={<WordColor />} />
      </Routes>

      {/* Button to go back in the history */}
      <br />
      <h6>Click the button to go back in the history</h6>
      <button onClick={() => navigate(-1)}>Go Back</button>

    </div>
  )
}

export default App
