import './App.css'
import PokemonListAxios from './components/PokemonListAxios'

function App() {

  // * In order to use Axios, we need to install it first:
  // npm install axios
  // * Then we need to import it into our component
  // import axios from 'axios'
  // This is demonstrated in the PokemonListAxios.jsx component
  return (
    <div className="App">
      <h1> Pokemon API Axios </h1>
      <PokemonListAxios />
    </div>
  )
}

export default App
