import './App.css'
import MainBody from './components/MainBody'
import MyContext from './context/context'

function App() {

  return (
    <div className="App">
      <MyContext.Provider value={"(World!)"}>
      <h1> Context and Reducer </h1>
      
      <MainBody/>

      </MyContext.Provider>
    </div>
  )
}

export default App
