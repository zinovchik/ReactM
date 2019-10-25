import React from 'react';
import s from './Profiles.module.css';
import TimelineContainer from './Timeline/TimelineContainer';
import UserInfo from './UserInfo/UserInfo';

const Profiles = (props) => {

    return (
    <div className={s.profile}>
        <UserInfo userInfo={props.userInfo} />
        <TimelineContainer />
    </div>)
}

export default Profiles;