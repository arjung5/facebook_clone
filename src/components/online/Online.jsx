import React from 'react'
import './online.css';

function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
                <img
                    className="rightbarProfileImage" src={user.profilePicture} alt=""
                />
                <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}

export default Online
