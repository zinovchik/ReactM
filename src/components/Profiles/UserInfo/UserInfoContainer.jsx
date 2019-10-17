import React from 'react';
import UserInfo from './UserInfo';
import StoreContext from '../../../StoreContext';

const UserInfoContainer = () => {
    
    return (<StoreContext.Consumer>
                {
                    (store) => {
                        let state = store.getState();
                        let userInfo = state.profilePage.userInfo;
                        return <UserInfo userInfo={userInfo} />
                    }
                }
            </StoreContext.Consumer>)
}

export default UserInfoContainer;