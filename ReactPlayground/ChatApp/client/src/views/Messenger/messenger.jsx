import React from 'react'
import './messenger.css'

import Navbar from '../../components/Navbar/Navbar'
import Conversation from '../../components/conversation/conversation'

function messenger() {

    return (
        <>
            <Navbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        Chat Box
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        Chat Online
                    </div>
                </div>
            </div>
        </>
    )
}

export default messenger