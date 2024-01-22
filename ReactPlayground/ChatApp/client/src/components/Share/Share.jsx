import React from 'react'
import './Share.css'

import { FaCamera, FaMapMarkerAlt, FaSmile, FaTag } from 'react-icons/fa'

function Share() {
    return (
        <div className="shareContainer">
            <div className="shareWrapper">

                <div className="shareTop">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="shareProfileImg" />
                    <input placeholder="What's on your mind?" className="shareInput" />
                </div>

                <hr className="shareHr" />

                <div className="shareBottom">

                    <div className="shareOptions">
                        <div className="shareOption">
                            <FaCamera className="shareIcon" color='tomato' />
                            <span className="shareOptionText">Media</span>
                        </div>
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
                </div>

            </div>
        </div>
    )
}

export default Share