import PersonCard from './components/PersonCard'
import './App.css'

function App() {

  return (
    // The props being passed in via their keyvalue name and their according value
    // are being destructured in the PersonCard component
    // PersonCard component is being imported from the PersonCard.jsx file and activated here 
    <div className='App'>
      <PersonCard firstName='Jane' lastName='Doe' age={45} hairColor='Black' />
      <PersonCard firstName='John' lastName='Smith' age={88} hairColor='Brown' />
      <PersonCard firstName='Millard' lastName='Fillmore' age={50} hairColor='Brown' />
    </div>
  )
}

export default App
