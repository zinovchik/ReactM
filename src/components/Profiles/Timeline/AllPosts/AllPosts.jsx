import React from 'react';
import s from './AllPosts.module.css';
import Post from './Post/Post';

const AllPosts = (props) => {
    return (<div className={s.posts}>
                {props.userPosts.map((post, index) => <Post key={index} userInfo={props.userInfo} post={post} />)}     
            </div>)
} 

export default AllPosts;