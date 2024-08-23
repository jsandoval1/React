import React from 'react'
import './Share.css'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import noAvatar from '../../public/images/person/noAvatar.png'

import { FaCamera, FaMapMarkerAlt, FaSmile, FaTag } from 'react-icons/fa'
import api from '../../config/axiosConfig'


function Share() {
    const { user } = useContext(AuthContext);

    const desc = useRef();

    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await api.post("/upload", data);
            } catch (err) { }
        }
        try {
            await api.post("/posts", newPost);
            window.location.reload();
        } catch (err) { }
    };


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
                        placeholder={"What's on your mind " + user.username + "?"}
                        className="shareInput"
                        ref={desc}
                    />
                </div>

                <hr className="shareHr" />

                <form className="shareBottom" onSubmit={submitHandler}>

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

