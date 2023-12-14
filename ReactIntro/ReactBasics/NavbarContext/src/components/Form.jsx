import React from 'react'
import { useContext } from 'react'
import myContext from '../context'

const Form = (props) => {
    // Set up context to use the context value
    const context = useContext(myContext)
    
    // Wanted to see if Context would work here as it is the deepest component
    // It does because it is inside the Provider in App.jsx, through FormWrapper.jsx and Wrapper.jsx
    console.log(context + " from Form.jsx")

    return (
        <div className="form">
            <fieldset>
                <legend>Level 3- Form.jsx component</legend>
                <p>Hello {context} from Form</p>
            </fieldset>
        </div>
    )
}

export default Form