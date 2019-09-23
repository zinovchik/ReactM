import React from 'react';
import s from './Profiles.module.css';
import Timeline from './Timeline/Timeline';

const Profiles = (props) => {
    let userInfo = props.profilePage.userInfo;
    let userPosts = props.profilePage.userPosts;
    return (
    <div className={s.profile}>
        <div className={s.header}>
            <img src={userInfo.picture} alt="cover" className={s.picture} />
            <div className={s.nav}></div>
            <img src={userInfo.photo} alt="user" className={s.photo} />
        </div>
        <div className={s.info}>
            <div className={s.name}>{userInfo.name}</div>
        </div>
        <Timeline userInfo={userInfo} userPosts={userPosts} />

    </div>)
}

export default Profiles;