import React from 'react';
import s from './Timeline.module.css';
import Post from './Post/Post';

const Timeline = (props) => {
    
    return (
    
        <div className={s.timeline}>
            <div className={s.newPost}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="button" value="Post"/>
            </div>
            <div className={s.posts}>
                {props.userPosts.map(post => <Post userInfo={props.userInfo} post={post} />)}     
            </div>
        </div>)
}

export default Timeline;