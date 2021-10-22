import React, { useState } from 'react'
import './post.css';
import { MoreVert } from '@material-ui/icons';
import {Users} from '../../dummyData';

function Post({post}) {
    const [like,setLike]=useState(post.like);
    const [isLiked,isSetLiked]=useState(false);
    const likeHandle=()=>
    {
        setLike(isLiked?like-1:like+1);
        isSetLiked(!isLiked);
    }
    const handlePopUp=()=>{

    }
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" alt="" src={Users.filter(u=>u.id===post?.userId)[0].profilePicture} />
                        <span className="postUserName">{Users.filter(u=>u.id===post?.userId)[0].username}</span>
                        <span className="postDate">{post.date} mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="threedots" onClick={handlePopUp} />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postCenterImage" alt="" src={post.photo} />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" alt="" src="/assests/like.png" onClick={likeHandle} />
                        <img className="likeIcon" alt="" src="/assests/heart1.png" onClick={likeHandle} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
