import React from 'react'
import { useParams } from 'react-router-dom'

function Word() {
    const { value } = useParams()

    return (
        <fieldset>
            <legend>Word.jsx Component</legend>
            <h2>The Word is:</h2>
            <h3>{value}</h3>
        </fieldset>
    )
}

export default Word