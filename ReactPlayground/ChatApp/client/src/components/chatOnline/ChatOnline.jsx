import React from 'react'
import './chatOnline.css'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../config/axiosConfig';

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await api.get("/users/friends/" + currentId);
            setFriends(res.data);
        }
        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]);

    // console.log('onlineFriends:', onlineFriends);

    return (
        <>
            <div className="chatOnline">
                {onlineFriends.map((o) => (
                    <div
                        key={o._id}
                        className="chatOnlineFriend"
                        onClick={() => setCurrentChat(o)}>
                        <div className="chatOnlineImgContainer">
                            <img
                                className="chatOnlineImg"
                                src={
                                    o?.profilePicture
                                        ? o.profilePicture
                                        : "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                }
                                alt=""
                            />
                            <div className="chatOnlineBadge"></div>
                        </div>
                        <span className="chatOnlineName">{o?.username}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ChatOnline