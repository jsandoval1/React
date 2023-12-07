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

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/people/:id" element={<PeopleDisplay />} />
        <Route path="/planets/:id" element={<PlanetDisplay />} />
      </Routes>

    </div>
  )
}

export default App
