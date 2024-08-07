import React, { useContext, useEffect, useState } from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import api from '../../config/axiosConfig'
import { AuthContext } from '../../context/AuthContext'

function Feed({ username }) {
    const [post, setPost] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(`Feed.jsx: username: ${username}`);

    // Fetch timeline posts from the server
    useEffect(() => {
        const fetchPost = async () => {
            const res = username
                ? await api.get("/posts/profile/" + username)
                : await api.get("/posts/timeline/" + user._id);
            setPost(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        }
        fetchPost();
    }, [username, user._id]);

    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                {
                    (!username || username === user.username) && <Share />
                }
                {post.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed