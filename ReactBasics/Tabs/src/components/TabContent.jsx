import React from 'react'

const TabContent = (props) => {
    // ? Destructure props
    const { selectedTab } = props

    // * function to render the content of the currently selected tab
    const renderTabContent = () => {
        if (selectedTab === '1' || selectedTab === 1) {
            return (
                <div>
                    <p>Displaying Tab 1 Content</p>
                </div>
            )
        } else if (selectedTab === '2') {
            return (
                <div>
                    <p>Showing Tab 2 Content</p>
                </div>
            )
        } else if (selectedTab === '3') {
            return (
                <div>
                    <p>Presenting Tab 3 Content</p>
                </div>
            )
        }
    }

    return (
        <fieldset>
            <legend>TabContent.jsx Component</legend>
            {/* render the content of the currently selected tab */}
            {renderTabContent()}
        </fieldset>
    )
}

export default TabContent