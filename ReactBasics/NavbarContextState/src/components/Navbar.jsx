import React from 'react'
import { useContext } from 'react' // Import useContext
import myContext from '../context'

const Navbar = (props) => {
    // { value } = useContextHook(variableName of the context provider)
    // * We need to add {} because myContext contains an object with two properties: context and updateContext
    const { context } = useContext(myContext)

    return (
        <div className="navbar">
            <fieldset>
                <legend>Level 2- Navbar.jsx component</legend>
                <p>Hello {context} from Navbar</p>
            </fieldset>
        </div>
    )
}

export default Navbar