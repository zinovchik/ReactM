import React from 'react';
import Timeline from './Timeline';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import {connect} from 'react-redux';

// const TimelineContainer = () => {    
//     return (<StoreContext.Consumer>
//                 {
//                     (store) => {
//                         let state = store.getState();
//                         let newPostText = state.profilePage.newPostText;
//                         let userInfo = state.profilePage.userInfo;
//                         let userPosts = state.profilePage.userPosts;                  
//                         let postChangeAction = (newText) =>{
//                             store.dispatch(updateNewPostTextActionCreator(newText));
//                         }
//                         let addPostAction = () => {
//                             store.dispatch(addPostActionCreator());
//                         } 
//                         return <Timeline addPostAction={addPostAction} postChangeAction={postChangeAction} newPostText={newPostText} userInfo={userInfo} userPosts={userPosts} />
//                     }
//                 }
//     </StoreContext.Consumer>)
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        userInfo: state.profilePage.userInfo,
        userPosts: state.profilePage.userPosts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostAction: (newText) =>{
            dispatch(updateNewPostTextActionCreator(newText));
        },
        postChangeAction: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline);

export default TimelineContainer;