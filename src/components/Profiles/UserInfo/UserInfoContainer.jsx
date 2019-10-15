import React from 'react';
import UserInfo from './UserInfo';

const UserInfoContainer = (props) => {
    let store = props.store.getState();
    let userInfo = store.profilePage.userInfo;
    
    return (<UserInfo userInfo={userInfo} />)
}

export default UserInfoContainer;