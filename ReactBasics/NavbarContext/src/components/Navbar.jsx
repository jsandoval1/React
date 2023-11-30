import React from 'react'
import { useContext } from 'react' // Import useContext
import myContext from '../context'

const Navbar = (props) => {
    // Set up context to use the context value
    const context = useContext(myContext)

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