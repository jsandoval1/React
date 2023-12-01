import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'

function Form() {
    const context = useContext(MyContext)

    return (
        <div className='Form'>
            <fieldset>
                <legend>Form.jsx Component</legend>
                <p>Current context is: {context}</p>
            </fieldset>
        </div>
    )
}

export default Form