import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'

function Display() {
    const context = useContext(MyContext)

    return (
        <div className='Display'>
            <fieldset>
                <legend>Display.jsx Component</legend>
                <p>Current context is: {context}</p>
            </fieldset>
        </div>
    )
}

export default Display