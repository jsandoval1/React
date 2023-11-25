import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* For this example, we'll only be using the UserForm component, it has the JSON stringify to display the state */}
        <UserForm />
      </div>
    </>
  )
}

export default App
