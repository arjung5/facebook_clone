import React from 'react'
import './sidebar.css';
import { RssFeed, BarChart, SlowMotionVideo, VideogameAsset, Bookmark, HelpOutline, WorkOutlined, Event, AccountTree } from "@material-ui/icons";
import {Users} from '../../dummyData';
import CloseFriend from '../closefriends/CloseFriend';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <RssFeed className="sidebarlisticon" />
                        <span className="sidebarlisttext">Feed</span>
                    </li>
                    <li className="sidebarlistitem">
                        <BarChart className="sidebarlisticon" />
                        <span className="sidebarlisttext">Charts</span>
                    </li>
                    <li className="sidebarlistitem">
                        <SlowMotionVideo className="sidebarlisticon" />
                        <span className="sidebarlisttext">Videos</span>
                    </li>
                    <li className="sidebarlistitem">
                        <VideogameAsset className="sidebarlisticon" />
                        <span className="sidebarlisttext">Games</span>
                    </li>
                    <li className="sidebarlistitem">
                        <Bookmark className="sidebarlisticon" />
                        <span className="sidebarlisttext">Bookmarks</span>
                    </li>
                    <li className="sidebarlistitem">
                        <HelpOutline className="sidebarlisticon" />
                        <span className="sidebarlisttext">Questions</span>
                    </li>
                    <li className="sidebarlistitem">
                        <WorkOutlined className="sidebarlisticon" />
                        <span className="sidebarlisttext">Jobs</span>
                    </li>
                    <li className="sidebarlistitem">
                        <Event className="sidebarlisticon" />
                        <span className="sidebarlisttext">Events</span>
                    </li>
                    <li className="sidebarlistitem">
                        <AccountTree className="sidebarlisticon" />
                        <span className="sidebarlisttext">Courses</span>
                    </li>
                </ul>
                <button  className="sidebarbutton" >Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFrinedslist">
                   {
                       Users.map(user=>{
                           return <CloseFriend key={user.id} user={user}/>
                       })
                   }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
