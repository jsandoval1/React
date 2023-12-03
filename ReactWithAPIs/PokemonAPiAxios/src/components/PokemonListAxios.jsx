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
                setCurrentList(resonse.data.results.slice(0, 5)) // Set currentList to the first 5 
            })
    }

    // Show the next 5 pokemon in the list
    function handleNext() {
        const nextIndex = currentIndex + 5;
        // slice is used to get a portion of an array, assigning it to currentList. Cut from nextIndex to nextIndex + 5
        setCurrentList(pokemon.slice(nextIndex, nextIndex + 5));
        setCurrentIndex(nextIndex); // Change the current index to the next starting index
    }

    // Show the previous 5 pokemon in the list
    function handlePrevious() {
        const nextIndex = currentIndex - 5;
        setCurrentList(pokemon.slice(nextIndex, nextIndex + 5));
        setCurrentIndex(nextIndex);
    }



    return (
        <fieldset>
            <legend> PokemonListAxios.jsx Component </legend>
            {/* Button to fetch pokemon */}
            <button onClick={getPokemon}>Get Pokemon</button>

            {/* Map over pokemon to display names */}
            <ul>
                {currentList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name} </li>
                ))}
            </ul>

            {/* Conditional Rendering */}
            {currentIndex > 0 ? <button onClick={handlePrevious}> Last 5 </button> : null}
            {/* Conditional Rendering */}
            {currentIndex < pokemon.length - 5 ? <button onClick={handleNext}>Next 5</button> : null}
        </fieldset>
    )
}

export default PokemonListAxios