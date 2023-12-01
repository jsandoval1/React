import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'

// Validation object to test if input is empty or under 2 characters
const validation = {
    firstName: {
        error: 'First Name must be at least 2 characters',
        validate: (value) => {
            return value.length > 1
        }
    },
    lastName: {
        error: 'Last Name must be at least 2 characters',
        validate: (value) => {
            return value.length > 1
        }
    }
}

// Main Component
export default () => {
    // Desctructuring state and dispatch from context
    const { state, dispatch, handleChange, handleSubmit } = useContext(MyContext)

    return (
        <div className='Form'>
            <fieldset>
                <legend>Form.jsx Component</legend>
                <form onSubmit={handleSubmit}>
                    <label>First Name: </label>
                    <input
                        type='text'
                        name='firstName'
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                    <p>{state.firstName.error}</p>
                    <br />
                    <label>Last Name: </label>
                    <input
                        type='text'
                        name='lastName'
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                    <p>{state.lastName.error}</p>
                    <br />
                    <input type='submit' value='Submit' />
                </form>
            </fieldset>
        </div>
    )
}
