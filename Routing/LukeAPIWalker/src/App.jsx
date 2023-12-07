import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import PeopleDisplay from './components/PeopleDisplay'
import PlanetDisplay from './components/PlanetDisplay'

function App() {

  return (
    <div className="App">
      <h1>Luke API Walker</h1>

      <form>

        <label>
          Search for:
          <select>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </label>

        <label>
          ID:
          <input type="number" placeholder='Enter ID' />
        </label>

        <input type="submit" value="Search" />
      </form>

      <Routes>
        <Route path="/people/:id" element={<PeopleDisplay />} />
        <Route path="/planets/:id" element={<PlanetDisplay />} />
      </Routes>

    </div>
  )
}

export default App
