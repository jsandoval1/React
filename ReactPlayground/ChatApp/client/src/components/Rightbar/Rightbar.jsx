import React from 'react'
import './Rightbar.css'

import { FaBirthdayCake } from 'react-icons/fa';

function Rightbar() {
    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">

                <div className="birthdayContainer">
                    <FaBirthdayCake className="birthdayImg" color='orange' />
                    <span className="birthdayText">
                        <b>Username</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>

                <img className="rightbarAd" src="https://via.placeholder.com/500x300?text=Sample+Ad" alt="Ad" />

                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="https://via.placeholder.com/150" alt="Profile" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Melinda Rye</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="https://via.placeholder.com/150" alt="Profile" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Melinda Rye</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="https://via.placeholder.com/150" alt="Profile" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Melinda Rye</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="https://via.placeholder.com/150" alt="Profile" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Melinda Rye</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Rightbar