import React, { useContext } from 'react' // Import useContext
import myContext from '../context'

const Wrapper = (props) => {
    // Desctructure props, which are the children of Wrapper= Navbar and FormWrapper
    const { children } = props
    const context = useContext(myContext)

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