import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'
import Form from './Form'
import Display from './Display'

const MainBody = (props) => {
    const context = useContext(MyContext)

    return (
        <fieldset>
            <legend>
                MainBody.jsx component
            </legend>
            <p>Current conext is {context}</p>

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