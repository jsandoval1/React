import React, { useState, useEffect } from 'react';

const PokemonList = () => {
    // State is more convenient than props for storing data that changes over time
    // This way we dont have make multiple API calls to get the same data
    const [pokemon, setPokemon] = useState([]); 
    const [currentList, setCurrentList] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0); 

    function fetchPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json()) 
            .then(data => { // data is the response.json() from the previous line
                setPokemon(data.results); // set the pokemon state variable to the results array
                setCurrentList(data.results.slice(0, 5)); // set the currentList state variable to the first 5 pokemon
            })
            .catch(error => console.log(error));
    }

    // Show the next 5 pokemon in the list
    const handleNext = () => {
        const nextIndex = currentIndex + 5;
        setCurrentList(pokemon.slice(nextIndex, nextIndex + 5));
        setCurrentIndex(nextIndex);
    };

    // Show the last 5 pokemon in the list
    const handlePrevious = () => {
        const nextIndex = currentIndex - 5;
        setCurrentList(pokemon.slice(nextIndex, nextIndex + 5));
        setCurrentIndex(nextIndex);
    }

    return (
        <div>
            <fieldset>
                <legend>PokemonList.jsx Component </legend>
                <button onClick={fetchPokemon}>Fetch Pokemon</button>
                <ul>
                    {currentList.map((poke, index) => (
                        <li key={index}>{poke.name}</li>
                        
                    ))}
                </ul>
                {/* Conditionally render the Previous Button if the current index is greater than 0 */}
                {currentIndex > 0 ? <button onClick={handlePrevious}>Previous</button> : null}
                {/* Conditionally render the Next button if the current index is less than the length of the pokemon array */}
                {currentIndex < pokemon.length - 5 ? <button onClick={handleNext}>Next</button> : null}
            </fieldset>
        </div>
    );
};

export default PokemonList;