import React from 'react';
import s from './Profiles.module.css';
import TimelineContainer from './Timeline/TimelineContainer';
import UserInfo from './UserInfo/UserInfo';
import Preloader from '../Helpers/Preloader/Preloader';

const Profiles = (props) => {

    return (
    <div className={s.profile}>
        <UserInfo userInfo={props.userInfo} />
        { props.isFetching ? <Preloader /> : null }
        <TimelineContainer />
    </div>)
}

export default Profiles;