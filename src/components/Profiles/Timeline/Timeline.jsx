import React from 'react';
import s from './Timeline.module.css';
import AllPosts from './AllPosts/AllPosts';
import NewPost from './NewPost/NewPost';

const Timeline = (props) => {
    return (
        <div className={s.timeline}>
            <AllPosts userInfo={props.userInfo} userPosts={props.userPosts} />
            <NewPost  addPostAction={props.addPostAction} postChangeAction={props.postChangeAction} newPostText={props.newPostText} />
        </div>)
}

export default Timeline;