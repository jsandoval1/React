import './App.css'
import PokemonListAxios from './components/PokemonListAxios'

function App() {

  // * In order to use Axios, we need to install it first:
  
  // ? Action: npm install axios
  // Can see axios installed in package.json
  // Can see axios installed in node_modules
  // Can see axios installed in package-lock.json

  // Then we need to import it into our component
  // ? Action: import axios from 'axios'

  // This is demonstrated in the PokemonListAxios.jsx component
  return (
    <div className="App">
      <h1> Pokemon API Axios </h1>
      <PokemonListAxios />
    </div>
  )
}

export default App
