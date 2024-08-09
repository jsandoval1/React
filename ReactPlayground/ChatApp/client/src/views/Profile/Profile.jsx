import React, { useEffect } from 'react'
import { useState } from 'react'
import './Profile.css'
import { useParams } from 'react-router-dom'

import noAvatar from '../../public/images/person/noAvatar.png'
import noCover from '../../public/images/person/noCover.png'
import api from '../../config/axiosConfig'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'


function Profile() {
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await api.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return (
        <>
            <Navbar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg"
                                src={user.coverPicture || noCover}
                                alt="Mountain" />
                            <img className="profileUserImg"
                                src={user.profilePicture || noAvatar}
                                alt="User" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile