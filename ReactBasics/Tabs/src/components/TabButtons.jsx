import React from 'react'

const TabButtons = (props) => {
    // Destructure 'tabButtons' from props
    const { tabButtons } = props

    // on click
    const handleClick = (e) => {
        props.handleTabClick(e.target);
        console.log(e.target)
    }

    return (
        <fieldset>
            <legend>TabButtons.jsx Component</legend>
            <div>TabButtons</div>
                {tabButtons.map((tabButton, index) => (
                    <button key={index} onClick={handleClick}>{tabButton.label}</button>
                ))}
        </fieldset>
    )
}

export default TabButtons