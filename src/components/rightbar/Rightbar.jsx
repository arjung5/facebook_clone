import React from 'react'
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assests/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Arjun Garg</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assests/add.jfif" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="onlineFriendList">
                    {
                        Users.map(user=>{
                            return <Online key={user.id} user={user}/>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
