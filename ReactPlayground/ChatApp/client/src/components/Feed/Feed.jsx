import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'

// Dummy data for posts
const post = [
    {
        id: 1,
        name: "John Sandoval",
        profilePicture: "https://via.placeholder.com/150",
        desc: "Love this place!",
        postPicture: "https://via.placeholder.com/500",
        date: "5 mins ago",
        userId: 1,
        like: 32,
        comment: 9
    },
    {
        id: 2,
        name: "Trevor Haddad",
        profilePicture: "https://via.placeholder.com/150",
        desc: "Love this place!",
        postPicture: "https://via.placeholder.com/500",
        date: "15 mins ago",
        userId: 2,
        like: 2,
        comment: 1
    },
    {
        id: 3,
        name: "Matt Rafferty",
        profilePicture: "https://via.placeholder.com/150",
        desc: "Love this place!",
        postPicture: "https://via.placeholder.com/500",
        date: "25 mins ago",
        userId: 3,
        like: 12,
        comment: 2
    },
    {
        id: 4,
        name: "Chris Gomes",
        profilePicture: "https://via.placeholder.com/150",
        desc: "Love this place!",
        postPicture: "https://via.placeholder.com/500",
        date: "35 mins ago",
        userId: 4,
        like: 52,
        comment: 5
    }
]

function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
                {post.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed