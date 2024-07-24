import React, { useEffect, useState } from 'react'

import './Rightbar.css'

import { FaBirthdayCake } from 'react-icons/fa';
import Online from '../Online/Online';
import noAvatar from '../../public/images/person/noAvatar.png'


import api from '../../config/axiosConfig'


function Rightbar({ user }) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            if (!user || !user._id) { //Added this line to prevent error when user is undefined
                console.error("User or User ID is undefined"); 
                return;
            }
            try {
                console.log(user._id);
                const res = await api.get("/users/friends/" + user._id);
                setFriends(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <FaBirthdayCake className="birthdayImg" />
                    <span className="birthdayText"><b>John Doe</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>
                <img className="rightbarAd" src="https://via.placeholder.com/300x250" alt="Ad" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {/* {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))} */}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>

                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue"> {user.city} </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue"> {user.from} </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1
                                ? "Single"
                                : user.relationship === 1
                                    ? "Married"
                                    : "-"}
                        </span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend) => (
                        <div key={friend._id} className="rightbarFollowing">
                            <img
                                src={
                                    friend.profilePicture
                                        ? friend.profilePicture
                                        : noAvatar
                                }
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">{friend.username}</span>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar