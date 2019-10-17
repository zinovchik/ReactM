import React from 'react';
import s from './Profiles.module.css';
import TimelineContainer from './Timeline/TimelineContainer';
import UserInfoContainer from './UserInfo/UserInfoContainer';

const Profiles = () => {

    return (
    <div className={s.profile}>
        <UserInfoContainer />
        <TimelineContainer />
    </div>)
}

export default Profiles;