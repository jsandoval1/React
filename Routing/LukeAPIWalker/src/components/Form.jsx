import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const [searchType, setSearchType] = useState('people')
    const [id, setId] = useState('')

    // Implementing navigation
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/${searchType}/${id}`) // Navigate to the URL with the searchType and id
        console.log("URL should be localhost:5173" + `/${searchType}/${id}`)
    }

    return (
        <fieldset>
            <legend>Form.jsx Component</legend>
            <form onSubmit={submitHandler}>

                <label>
                    Search for:
                    <select onChange={(e) => setSearchType(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </label>

                <label>
                    ID:
                    <input type="number" onChange={(e) => setId(e.target.value)} />
                </label>

                <input type="submit" value="Search" />
            </form>
        </fieldset>
    )
}

export default Form