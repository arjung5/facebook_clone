import React from 'react';
import './topbar.css'
import { Search,Person,Chat,Notifications} from "@material-ui/icons";
function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft" >
                <span className="logo">ArjunSocial</span>
            </div>
            <div className="topbarCenter" >
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input className="searchInput" type="text" placeholder="Search for friends post or any video" />
                </div>
            </div>
            <div className="topbarRight" >
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img className="topbarImg" src="/assests/download.jfif" alt="profile"  />
            </div>

        </div>
    )
}

export default Topbar
