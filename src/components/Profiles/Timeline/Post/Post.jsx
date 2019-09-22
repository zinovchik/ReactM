import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    let userInfo = props.userInfo;
    let post = props.post;
    return (
    <div className={s.post}>
        
        <img alt="user" src={userInfo.photo} />
        <div className={s.wrap}>
            <div className={s.name}>
                {userInfo.name}
            </div>
            <div className={s.text}>
                {post.text}
            </div>
            
        </div>   
        <div className={s.likes}>
            <span className={s.like}>&hearts; {post.like}</span>
            <span className={s.dislike}>&hearts; {post.dislike}</span>
        </div>
    </div>)
}

export default Post;