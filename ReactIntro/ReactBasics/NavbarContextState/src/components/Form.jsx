import React from 'react'
import { useContext } from 'react'
import myContext from '../context'

const Form = (props) => {
    // { value } = useContextHook(variableName of the context provider)
    // * In the form component, we access both the context state 
    // * and the updateContext function
    const { context, updateContext } = useContext(myContext)

    // Function to update the context state
    const updateContextState = (e) => {
        e.preventDefault()
        updateContext(e.target.context.value)
        console.log(e.target.context.value)
    }

    return (
        <div className="form">
            <fieldset>
                <legend>Level 3- Form.jsx component</legend>
                <p>Hello {context} from Form</p>
                <form onSubmit={updateContextState}>
                    <label>Update Context State: </label>
                    <input type="text" name="context" />
                    <input type="submit" value="Update" />
                </form>
            </fieldset>
        </div>
    )
}

export default Form