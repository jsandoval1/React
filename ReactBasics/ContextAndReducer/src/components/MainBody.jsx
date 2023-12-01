import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'
import Form from './Form'
import Display from './Display'

const MainBody = (props) => {
    // Desctructuring state and dispatch from context
    const { state, dispatch } = useContext(MyContext)

    return (
        <fieldset>
            <legend>
                MainBody.jsx component
            </legend>
            <p>Current state is: {JSON.stringify(state)}</p>

            <br />
            <Display />
            <br />
            
            <br />
            <Form />
            <br />

        </fieldset>
    )
}

export default MainBody