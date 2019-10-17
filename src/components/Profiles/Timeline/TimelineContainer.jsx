import React from 'react';
import Timeline from './Timeline';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext';

const TimelineContainer = () => {

     
    return (<StoreContext.Consumer>
                {
                    (store) => {
                        let state = store.getState();
                        let newPostText = state.profilePage.newPostText;
                        let userInfo = state.profilePage.userInfo;
                        let userPosts = state.profilePage.userPosts;
                    
                        let postChangeAction = (newText) =>{
                            store.dispatch(updateNewPostTextActionCreator(newText));
                        }
                        let addPostAction = () => {
                            store.dispatch(addPostActionCreator());
                        } 
                        return <Timeline addPostAction={addPostAction} postChangeAction={postChangeAction} newPostText={newPostText} userInfo={userInfo} userPosts={userPosts} />
                    }
                }
    </StoreContext.Consumer>)
}

export default TimelineContainer;