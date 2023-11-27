import React from 'react'
import { useState } from 'react'
import './App.css'
import BoxForm from './components/Boxform';
import BoxDisplay from './components/BoxDisplay';


function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    // ...boxes is the spread operator that will copy the boxes array into a new array
    setBoxes([...boxes, newBox]);
  }

  return (
    <>
      <div className="App">
        <h1>Box Generator</h1>
        <BoxForm onNewBox={addBox} />
        <BoxDisplay boxes={boxes} />
      </div>
    </>
  )
}

export default App
