import React from 'react'
import './Post.css'

import { IoMdMore } from 'react-icons/io';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';

function Post() {
    return (
        <div className="postContainer">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="postProfileImg" />
                        <span className="postUsername">Username</span>
                        <span className="postDate">Date</span>
                    </div>
                    <div className="postTopRight">
                        <IoMdMore />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</span>
                    <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="postImg" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <AiFillLike className="likeIcon" />
                        <AiFillHeart className="likeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post