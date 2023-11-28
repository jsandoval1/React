import React from 'react'

const TabButtons = (props) => {
    //  Destructure props
    const { updateSelectedTab } = props

    // *function to handle the click event on the tab buttons
    const handleClick = (e) => {
        const tabId = e.target.id
        updateSelectedTab(tabId) // call the function to update the state of the currently selected tab in TabButtons.jsx component
        console.log(`TabButtons.jsx: Currently selected tab is: ${tabId}`)
    }

    return (
        <fieldset>
            <legend>TabButtons.jsx Component</legend>
            {/* pass the function to handle the click event on the tab buttons as a prop to the tab buttons */}
            <button id="1" onClick={handleClick}>Tab 1</button>
            <button id="2" onClick={handleClick}>Tab 2</button>
            <button id="3" onClick={handleClick}>Tab 3</button>
        </fieldset>
    )
}

export default TabButtons