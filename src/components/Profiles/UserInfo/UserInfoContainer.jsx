// import React from 'react';
import UserInfo from './UserInfo';
import {connect} from 'react-redux';

// const UserInfoContainer = () => {
//     return (<StoreContext.Consumer>
//                 {
//                     (store) => {
//                         let state = store.getState();
//                         let userInfo = state.profilePage.userInfo;
//                         return <UserInfo userInfo={userInfo} />
//                     }
//                 }
//             </StoreContext.Consumer>)
// }

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo
    }
}


let mapDispatchToProps = (state) => {
    return {
        
    }
}

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);

export default UserInfoContainer;