import React from 'react';
import s from './Profiles.module.css';
import TimelineContainer from './Timeline/TimelineContainer';
import UserInfoContainer from './UserInfo/UserInfoContainer';

const Profiles = (props) => {

    return (
    <div className={s.profile}>
        <UserInfoContainer store={props.store} />
        <TimelineContainer store={props.store} />
    </div>)
}

export default Profiles;