import React, { useEffect, useState } from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import api from '../../config/axiosConfig'

function Feed({ username }) {
    const [post, setPost] = useState([]);

    // Fetch timeline posts from the server
    useEffect(() => {
        const fetchPost = async () => {
            const res = username
                ? await api.get("/posts/profile/" + username)
                : await api.get("/posts/timeline/65a9fad689e655b361835880");
                console.log(res.data);
                setPost(res.data);
        }
        fetchPost();
    }, [username]);

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