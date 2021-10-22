import React from 'react'
import Topbar from '../../components/topbar/Topbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import "./home.css"
function home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default home
