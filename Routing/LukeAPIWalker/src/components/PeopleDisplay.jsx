import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function PeopleDisplay() {
    const { id } = useParams() 
    const [people, setPeople] = useState({})
    const [planet, setPlanet] = useState({}) // we need to store the planet data in state so we can display it
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPeople(response.data);
                return axios.get(response.data.homeworld); // returns a promise that we can chain .then() to
            })
            .then(response => {
                setPlanet(response.data); // set the planet state to the homeworld data
                setLoading(false); // set loading to false since we got all the data we needed
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <fieldset>
            <legend>PeopleDisplay.jsx Component</legend>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="peopleDisplay">
                    
                    {/* Display the information of the person for the ID */}
                    <h2>{people.name}</h2>
                    <p>Height: {people.height} cm </p>
                    <p>Mass: {people.mass} kg </p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>

                    {/* If the person has a homeworld, display the name and link to the planet */}
                    <p>Homeworld: {people.homeworld ? <Link to={`/planets/${planet.id}`}>{planet.name}</Link> : "Unknown"}</p>

                    <Link to="/">Back to the form</Link>
                </div>
            )}
        </fieldset>
    )
}

export default PeopleDisplay