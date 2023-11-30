import './App.css'

import React, { useState } from 'react'

import FormWrapper from './components/FormWrapper'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import MyContext from './context'

function App() {
  // Setting up state to pass to the context provider
  const [context, setContext] = useState("(World!)")

  // Function to update the context state
  // This function will be passed to the context provider, 
  // so that the components that use the context value can update the context state
  const updateContext = (newContext) => {
    setContext(newContext)
  }

  return (
      <div className="App">
        {/* Set up the context provider, passing the context state and the function to update the context state */}
        {/* The children of the context provider are the components that will use the context value (s) */}
        <MyContext.Provider value={{ context, updateContext }}>
          <h1> NavBar Context </h1>

          <Wrapper >

            <Navbar />
            <FormWrapper />

          </Wrapper>

        </MyContext.Provider>
      </div>
  )
}

export default App