import React, { useEffect } from 'react'
import './conversation.css'

import { useState } from 'react'
import api from '../../config/axiosConfig'

function conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try {
                const res = await api.get("/users?userId=" + friendId)
                console.log(res.data)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
    }, [currentUser, conversation])

    return (
        <>
            <div className="conversation">
                <img className="conversationImg"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="" />
                <span className="conversationName">John Doe</span>
            </div>
        </>
    )
}

export default conversation