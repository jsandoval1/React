import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'

function Display() {
    // Desctructuring state and dispatch from context
    const { state, dispatch } = useContext(MyContext)

    return (
        <div className='Display'>
            <fieldset>
                <legend>Display.jsx Component</legend>
                <p>First Name: {state.firstName.value}</p>
                <p>Last Name: {state.lastName.value}</p>
            </fieldset>
        </div>
    )
}

export default Display