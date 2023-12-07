import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function PeopleDisplay() {
    // Get the params from the URL
    const { id } = useParams()

    // Set the state for the person and loading
    const [people, setPeople] = useState({}) // Empty object
    const [loading, setLoading] = useState(true)
    
    // Axios to get the data from the API
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPeople(response.data)
                setLoading(false) // Set loading to false when data arrives
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <fieldset>
            <legend>PeopleDisplay.jsx Component</legend>
            {/* Display loading message if data is not yet arrived */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="peopleDisplay">
                    {/* Displaying the persons Height, Mass, Hair Color and Skin Color */}
                    <h2>{people.name}</h2>
                    <p>Height: {people.height} cm </p>
                    <p>Mass: {people.mass} kg </p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p> Skin Color: {people.skin_color} </p>

                    {/* Back to the form */}
                    <Link to="/">Back to the form</Link>
                </div>
            )}
        </fieldset>
    )
}

export default PeopleDisplay