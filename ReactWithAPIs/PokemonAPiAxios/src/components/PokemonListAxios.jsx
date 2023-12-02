import React from 'react'
import axios from 'axios' // * Import axios
import { useState } from 'react'

const PokemonListAxios = (props) => {
    const [pokemon, setPokemon] = useState([])
    const [currentList, setCurrentList] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    // Using Axios to fetch pokemon list
    function getPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(resonse => {
                console.log(resonse);
                setPokemon(resonse.data.results) // Set pokemon to the results of the response
            })
    }

    return (
        <fieldset>
            <legend> PokemonListAxios.jsx Component </legend>
            <button onClick={getPokemon}>Get Pokemon</button>
            {/* Map over pokemon to display names */}
            <ul>
                {pokemon.map((pokemon, index) => (
                    <li key={index}>{pokemon.name} </li>
                ))}
            </ul>
        </fieldset>
    )
}

export default PokemonListAxios