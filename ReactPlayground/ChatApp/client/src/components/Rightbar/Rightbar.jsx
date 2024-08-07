import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import './Rightbar.css'

import { FaBirthdayCake } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

import Online from '../Online/Online';
import noAvatar from '../../public/images/person/noAvatar.png'


import api from '../../config/axiosConfig'
import { Link } from 'react-router-dom';


function Rightbar({ user }) {
    const [friends, setFriends] = useState([]);
    const { user: currentUser } = useContext(AuthContext);
    const [followed, setFollowed] = useState(false);

    useEffect(() => {
        setFollowed(currentUser.following.includes(user?._id));
    }, [currentUser, user?._id]);

    useEffect(() => {
        const getFriends = async () => {
            if (!user || !user._id) { //Added this line to prevent error when user is undefined
                console.error("User or User ID is undefined");
                return;
            }
            try {
                const res = await api.get("/users/friends/" + user._id);
                setFriends(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if (followed) {
                await api.put(`/users/${user._id}/unfollow`, { userId: currentUser._id });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await api.put(`/users/${user._id}/follow`, { userId: currentUser._id });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
        } catch (err) {
            console.log(err);
        }
        setFollowed(!followed);
    };

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
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <FaMinus /> : <FaPlus />}
                    </button>
                )}
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

                <h4 className="rightbarTitle">Following:</h4>
                {friends.length === 0 ? (
                    <div className="rightbarNoFollowing">
                        {user.username} is not following anyone.
                    </div>
                ) : (
                    <div className="rightbarFollowings">
                        {friends.map((friend) => (
                            <Link
                                to={"/profile/" + friend.username}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    key={friend._id}
                                    className="rightbarFollowing"
                                >
                                    <img
                                        src={
                                            friend.profilePicture
                                                ? friend.profilePicture
                                                : noAvatar
                                        }
                                        alt=""
                                        className="rightbarFollowingImg"
                                    />
                                    <span className="rightbarFollowingName">
                                        {friend.username}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </>
        );
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