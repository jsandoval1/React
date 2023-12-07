import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Form from './components/Form'
import PeopleDisplay from './components/PeopleDisplay'
import PlanetDisplay from './components/PlanetDisplay'

function App() {


  return (
    <div className="App">
      <h1>Luke API Walker</h1>
      <p>
        Axios, API, Params, useNavigate, useParams, useEffect,
        useState, and more to create a React app that can display information from the Star Wars API.
      </p>

      {/* Form always displayed, onSubmit the form will navigate to the correct route */}
      <Form />

      <Routes>
        {/* Routes to handle the display of people and planets */}
        <Route path="/people/:id" element={<PeopleDisplay />} />
        <Route path="/planets/:id" element={<PlanetDisplay />} />

        {/* Making a route to handle all errors */}
        <Route path="*" element={<h3>These are not the droids you are looking for, try a proper query.</h3>} />

      </Routes>

    </div>
  )
}

export default App
