import React, { useContext } from 'react' // Alternative way to import useContext
import myContext from '../context'

const Wrapper = (props) => {
    // Desctructure props, which are the children of Wrapper= Navbar and FormWrapper
    const { children } = props

    // Set up context to use the context value
    const context = useContext(myContext)

    console.log(context + " from Wrapper.jsx")

    return (
        <div className="wrapper">
            <fieldset>
                <legend>Level 1- Wrapper.jsx component</legend>
                <p>Hello {context} from Wrapper </p>
                {children}
            </fieldset>
        </div>
    )
}

export default Wrapper