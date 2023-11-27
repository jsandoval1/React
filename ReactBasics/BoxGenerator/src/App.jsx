import React from 'react'
import { useState } from 'react'
import './App.css'
import BoxForm from './components/Boxform';
import BoxDisplay from './components/BoxDisplay';


function App() {
  const [boxes, setBoxes] = useState([]);

  // ...boxes is the spread operator that will copy the boxes array into a new array
  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  }

  // * 1.) addbox is a function passed down to BoxForm.jsx
  // * 2.) BoxForm.jsx calls that function when the form is submitted
  // * 3.) See BoxForm.jsx fo step 3
  // * 4.) boxes (and its spread ...) is passed down to BoxDisplay.jsx
  // * 5.) BoxDisplay.jsx uses the boxes array to display all the boxes
  // * 6.) See BoxDisplay.jsx for step 6

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
