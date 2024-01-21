import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import Rightbar from '../components/Rightbar/Rightbar'

import './HomePage.css'

function HomePage() {
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default HomePage