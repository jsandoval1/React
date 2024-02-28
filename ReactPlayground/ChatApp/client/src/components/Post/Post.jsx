import React, { useEffect, useState } from 'react'
import api from '../../config/axiosConfig'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

import { AiFillLike, AiFillHeart } from 'react-icons/ai';
import { IoMdMore } from 'react-icons/io';

import noAvatar from '../../public/images/person/noAvatar.png'
import './Post.css'


import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Post({ post }) {
    console.log(post.img);
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const {user: currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await api.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    const likeHandler = () => {
        try {
            api.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        }
        catch (err) {
            console.log(err);
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="postContainer">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`} style={{ textDecoration: 'none' }}>
                            <img
                                src={user.profilePicture || noAvatar}
                                alt=""
                                className="postProfileImg" />
                        </Link>
                        <span className="postUsername"> {user.username} </span>
                        <span className="postDate"> {format(post.createdAt)} </span>
                    </div>
                    <div className="postTopRight"> 
                        <IoMdMore />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText"> {post.desc} </span>
                    {post.img && <img src={`http://localhost:8000/images/${post.img}`} alt="" className="postImg" />}
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <AiFillLike className="likeIcon" onClick={likeHandler} color='blue' />
                        <AiFillHeart className="likeIcon" onClick={likeHandler} color='red' />
                        <span className="postLikeCounter"> {like} people like this </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> {post.comment} comments </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post