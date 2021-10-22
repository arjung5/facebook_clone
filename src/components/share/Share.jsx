import { PermMedia ,Label ,Room ,EmojiEmotions } from '@material-ui/icons';
import React from 'react'
import "./share.css";

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assests/download.jfif" alt=""/>
                    <input placeholder="Whats in your mind arjun?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                   <div className="shareOptions">
                       <div className="shareOption">
                           <PermMedia htmlColor="tomato" className="shareOptionIcon"/>
                           <span className="shareOptionTest">Photo/Video</span>
                       </div>
                       <div className="shareOption">
                           <Label htmlColor="blue" className="shareOptionIcon"/>
                           <span className="shareOptionTest">Tag</span>
                       </div>
                       <div className="shareOption">
                           <Room htmlColor="green" className="shareOptionIcon"/>
                           <span className="shareOptionTest">Location</span>
                       </div>
                       <div className="shareOption">
                           <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon"/>
                           <span className="shareOptionTest">Feelings</span>
                       </div>
                   </div>
                   <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
