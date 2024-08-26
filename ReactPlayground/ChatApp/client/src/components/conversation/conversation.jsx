import React, { useEffect } from 'react'
import './conversation.css'

import { useState } from 'react'
import api from '../../config/axiosConfig'
import noAvatar from '../../public/images/person/noAvatar.png'



function conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await api("/users?userId=" + friendId);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <>
            <div className="conversation">
                <img className="conversationImg"
                    src={
                        user?.profilePicture
                            ? user.profilePicture
                            : noAvatar
                    }
                    alt="" />

                <span className="conversationName">
                    {user?.username}
                </span>
            </div>
        </>
    )
}

export default conversation