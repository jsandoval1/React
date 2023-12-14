import React from 'react'
import { useContext } from 'react'
import myContext from '../context'
import Form from './Form'

const FormWrapper = (props) => {
    // { value } = useContextHook(variableName of the context provider)
    // * We need to add {} because myContext contains an object with two properties: context and updateContext
    const { context } = useContext(myContext)

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