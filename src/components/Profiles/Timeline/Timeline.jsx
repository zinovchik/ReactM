import React from 'react';
import s from './Timeline.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';

const Timeline = (props) => {

    let newPostTextArea = React.createRef();

    let onPostChange = () =>{
        let newText = newPostTextArea.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText));
    }

    let addPostAction = () => {
        props.dispatch(addPostActionCreator());
    }
    
    return (
    
        <div className={s.timeline}>
            <div className={s.newPost}>
                <textarea name="" value={props.newPostText} cols="30" rows="10" onChange={onPostChange} ref={newPostTextArea}></textarea>
                <input type="button" value="Post" onClick={addPostAction} />
            </div>
            <div className={s.posts}>
                {props.userPosts.map((post, index) => <Post key={index} userInfo={props.userInfo} post={post} />)}     
            </div>
        </div>)
}

export default Timeline;