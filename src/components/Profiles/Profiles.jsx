import React from 'react';
import s from './Profiles.module.css';
import TimelineContainer from './Timeline/TimelineContainer';
import UserInfo from './UserInfo/UserInfo';
import Preloader from '../Helpers/Preloader/Preloader';

const Profiles = (props) => {
if(props.isFetching)  { 
    return <Preloader />  
}
    return (
    <div className={s.profile}>
        <UserInfo userInfo={props.userInfo} />
        
        <TimelineContainer />
    </div>)
}

export default Profiles;