import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // * The index.html file is the entry point for the app, which then runs the main.jsx script. 
  // * main.jsx is the entry point for the React app, which then renders the App component into the root div in index.html.
  // * The App component is the root component for the app, THIS IS THE app.jsx file.
  return (
    <>
      <h1> Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </>
  )
}

export default App
