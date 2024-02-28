import React, { useContext, useEffect, useState } from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import api from '../../config/axiosConfig'
import { AuthContext } from '../../context/AuthContext'

function Feed({ username }) {
    const [post, setPost] = useState([]);
    const { user } = useContext(AuthContext);

    // Fetch timeline posts from the server
    useEffect(() => {
        const fetchPost = async () => {
            const res = username
                ? await api.get("/posts/profile/" + username)
                : await api.get("/posts/timeline/" + user._id);
                console.log(res.data);
                setPost(res.data);
        }
        fetchPost();
    }, [username, user._id]);

    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
                {post.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed