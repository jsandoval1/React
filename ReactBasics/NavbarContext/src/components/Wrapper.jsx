import React from 'react'
import { useContext } from 'react'
import myContext from '../context'

const Wrapper = (props) => {
    const context = useContext(myContext)

    return (
        <div>
            <h2>Wrapper</h2>
            <p>Hello {context}</p>
        </div>
    )
}

export default Wrapper