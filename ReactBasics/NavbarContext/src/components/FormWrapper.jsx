import React from 'react'
import { useContext } from 'react'
import myContext from '../context'
import Form from './Form'

const FormWrapper = (props) => {
    // Set up context to use the context value
    const context = useContext(myContext)

    console.log(context + " from FormWrapper.jsx")

    return (
        <div className="formWrapper">
            <fieldset>
                <legend>Level 2- FormWrapper.jsx component</legend>
                <p>Hello {context} from FormWrapper</p>

                <br />
                <Form />
                <br />

            </fieldset>
        </div>
    )
}

export default FormWrapper