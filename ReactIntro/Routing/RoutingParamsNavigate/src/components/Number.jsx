import React from 'react'
import { useParams } from 'react-router-dom'

function Number() {
    const { value } = useParams()

    return (
        <fieldset>
            <legend>Number.jsx Component</legend>
            <h2>The Number is: {value}</h2>
        </fieldset>
    )
}

export default Number