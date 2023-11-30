import './App.css'
import FormWrapper from './components/FormWrapper'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import MyContext from './context'

function App() {

  // There is no value yet because it is not inside the Provider
  console.log("context value is: " + MyContext)

  return (
    <>
      <div className="App">
        <MyContext.Provider value={"(World)!"}>
          <h1> NavBar Context </h1>

          <Wrapper >
            {/* Navbar and FormWrapper are props.children of Wrapper and 
            can access the context value */}
            <Navbar />
            <FormWrapper />

          </Wrapper>

        </MyContext.Provider>
      </div>
    </>
  )
}

export default App