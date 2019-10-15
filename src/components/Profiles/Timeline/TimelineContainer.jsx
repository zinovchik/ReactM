import React from 'react';
import Timeline from './Timeline';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';

const TimelineContainer = (props) => {

    let store = props.store.getState();
    let newPostText = store.profilePage.newPostText;
    let userInfo = store.profilePage.userInfo;
    let userPosts = store.profilePage.userPosts;

    let postChangeAction = (newText) =>{
        props.store.dispatch(updateNewPostTextActionCreator(newText));
    }
    let addPostAction = () => {
        props.store.dispatch(addPostActionCreator());
    }  
    return (<Timeline addPostAction={addPostAction} postChangeAction={postChangeAction} newPostText={newPostText} userInfo={userInfo} userPosts={userPosts} />)
}

export default TimelineContainer;