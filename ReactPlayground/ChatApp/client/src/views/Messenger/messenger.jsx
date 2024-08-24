import React from 'react'
import './messenger.css'

import Navbar from '../../components/Navbar/Navbar'
import Conversation from '../../components/conversation/conversation'
import Message from '../../components/message/Message'

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
                        <div className="chatBoxTop">
                            <Message />
                            <Message own />
                            <Message />
                            <Message />
                            <Message own />
                            <Message />
                            <Message />
                            <Message own />
                            <Message />
                            <Message />
                            <Message own />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea
                                className="chatMessageInput"
                                placeholder="Write something...">
                            </textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
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