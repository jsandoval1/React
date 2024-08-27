import React from 'react'
import './message.css'

import { format } from 'timeago.js'

function Message({ message, own }) {
    console.log('Message:', message)
    console.log('Own:', own)

    return (
        <>
            <div className={own ? "message own" : "message"}>
                <div className="messageTop">
                    <div className="messageImg">
                        <img className="messageImg"
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="" />
                    </div>
                    <p className="messageText">
                        {message.text}
                    </p>
                </div>
                <div className="messageBottom">
                    {format(message.createdAt)}
                </div>
            </div>
        </>
    )
}

export default Message