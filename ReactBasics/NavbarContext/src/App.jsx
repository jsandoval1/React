import './App.css'
import FormWrapper from './components/FormWrapper'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import myContext from './context'

function App() {

  return (
    <>
      <div className="App">
        <myContext.Provider value={"World"}>
        <h1> NavBar Context </h1>

          <Wrapper>
            <Navbar />
            <FormWrapper />
          </Wrapper>

        </myContext.Provider>
      </div>
    </>
  )
}

export default App
