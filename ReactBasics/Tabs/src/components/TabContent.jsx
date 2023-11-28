import React from 'react'

const TabContent = (props) => {
    // Destructure 'tabContent' and 'selectedTab' from props
    const { tabContent, selectedTab } = props
    console.log(tabContent[selectedTab].content)

    return (
        <fieldset>
            <legend>TabContent.jsx Component</legend>
            <div>TabContent</div>
            <div>{tabContent[selectedTab].content}</div>
        </fieldset>
    )
}

export default TabContent