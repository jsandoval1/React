import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';



function PlanetDisplay() {
    // Get the params from the URL
    const { id } = useParams()

    // Set the state for the planet and loading
    const [planet, setPlanet] = useState({}) // Empty object
    const [loading, setLoading] = useState(true)

    // Axios to get the data from the API
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanet(response.data)
                setLoading(false) // Set loading to false when data arrives
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <fieldset>
            <legend>PlanetDisplay.jsx Component</legend>
            {/* Display loading message if data is not yet arrived */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="planetDisplay">
                    {/* Displaying the planets Name, Climate, Terrain and Population */}
                    <h2>{planet.name}</h2>
                    <p>Climate: {planet.climate} </p>
                    <p>Terrain: {planet.terrain} </p>
                    <p>Population: {planet.population}</p>

                    {/* Back to the form */}
                    <Link to="/">Back to the form</Link>
                </div>
            )}
        </fieldset>
    )
}

export default PlanetDisplay