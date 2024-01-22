import React from 'react'
import './Feed.css'
import Share from '../Share/Share'

function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
            </div>
        </div>
    )
}

export default Feed