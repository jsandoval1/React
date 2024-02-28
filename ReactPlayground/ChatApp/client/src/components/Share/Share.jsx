import React from 'react'
import './Share.css'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import noAvatar from '../../public/images/person/noAvatar.png'

import { FaCamera, FaMapMarkerAlt, FaSmile, FaTag } from 'react-icons/fa'
import axios from 'axios'

function Share() {
    const { user } = useContext(AuthContext);

    // const [file, setFile] = useState(null);

    const desc = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        console.log(newPost);

        // Send the post to the server
        try {
            axios.post("/posts", newPost);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="shareContainer">
            <div className="shareWrapper">

                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={user.profilePicture || noAvatar}
                        alt=""
                    />
                    <input
                        placeholder={"What's in your mind " + user.username + "?"}
                        className="shareInput"
                        ref={desc}
                    />
                </div>

                <hr className="shareHr" />

                <form className="shareBottom" onSubmit={handleSubmit}>

                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <FaCamera className="shareIcon" color='tomato' />
                            <span className="shareOptionText">Media</span>
                            <input type="file"
                                id="file"
                                accept='.png, .jpeg, .jpg'
                                style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <FaTag className="shareIcon" color='blue' />
                            <span className="shareOptionText">Tagged</span>
                        </div>
                        <div className="shareOption">
                            <FaMapMarkerAlt className="shareIcon" color='green' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <FaSmile className="shareIcon" color='goldenrod' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </form>

            </div>
        </div>
    )
}

export default Share