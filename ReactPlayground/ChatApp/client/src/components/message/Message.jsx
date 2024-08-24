import React from 'react'
import './message.css'

function Message({own}) {
    return (
        <>
            <div className= {own? 'message own' : 'message'}>
                <div className="messageTop">
                    <div className="messageImg">
                        <img className="messageImg"
                            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="" />
                    </div>
                    <p className="messageText">
                        Hey there! How are you?
                    </p>
                </div>
                <div className="messageBottom">1 hour ago</div>
            </div>
        </>
    )
}

export default Message