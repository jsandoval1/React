import React from 'react'
import './Post.css'

import { IoMdMore } from 'react-icons/io';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';

function Post({ post }) {
    return (
        <div className="postContainer">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={post.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername"> {post.name} </span>
                        <span className="postDate"> {post.date} </span>
                    </div>
                    <div className="postTopRight">
                        <IoMdMore />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</span>
                    <img src={post.postPicture} alt="" className="postImg" />
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