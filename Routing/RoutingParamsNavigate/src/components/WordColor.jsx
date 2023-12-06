import React from 'react'
import { useParams } from 'react-router-dom'

function WordColor() {
    const { word, color, backgroundColor } = useParams()

    return (
        <fieldset>
            <legend>WordColor.jsx Component</legend>
            <h2>The Word is:</h2>
            <h3 style=
                {{
                    color: color,
                    backgroundColor: backgroundColor
                }}
            >{word}</h3>
        </fieldset>
    )
}

export default WordColor