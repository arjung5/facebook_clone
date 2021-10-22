import React from 'react';
import './closefriend.css';

function CloseFriend({user}) {
    return (
        <li className="sidebarlistFriend">
            <img src={user.profilePicture} alt="" className="sidebarlistimg" />
            <span className="sidebarlistname">{user.username}</span>
        </li>
    )
}

export default CloseFriend
