import React from 'react'
import myContext from '../context'

const Navbar = (props) => {
    return (
        <div>
            <h2>Navbar</h2>
            <p>Hello {myContext}</p>
        </div>
    )
}

export default Navbar