import React from 'react'
import { useState } from 'react'
import './App.css'
import BoxForm from './components/Boxform';
import BoxDisplay from './components/BoxDisplay';


function App() {
  console.log("You should see this in your console when App component renders");

  return (
    <>
      <div className="App">
        <h1>Box Generator</h1>
        <BoxForm />
        <BoxDisplay />
      </div>
    </>
  )
}

export default App
