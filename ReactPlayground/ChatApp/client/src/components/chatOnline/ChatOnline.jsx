import React from 'react'
import './chatOnline.css'

function ChatOnline() {
    return (
        <>
            <div className="chatOnline">
                <div className="chatOnlineFriend">
                    <div className="chatOnlineImgContainer">
                        <img
                            className="chatOnlineImg"
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                        />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">John Doe</span>
                </div>
            </div>
        </>
    )
}

export default ChatOnline