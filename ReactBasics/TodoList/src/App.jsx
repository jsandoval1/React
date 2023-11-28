import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FruitForm from './components/Fruits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <FruitForm />
        </div>
    </>
  )
}

export default App
