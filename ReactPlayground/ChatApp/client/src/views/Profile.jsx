import React from 'react'
import './Profile.css'

import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Rightbar from '../components/Rightbar/Rightbar'


function Profile() {
    return (
        <>
            <Navbar />
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="https://source.unsplash.com/random?mountain" alt="Mountain" />
                            <img className="profileUserImg" src="https://source.unsplash.com/random?person" alt="User" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">John Doe</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile