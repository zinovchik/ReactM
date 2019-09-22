import React from 'react';
import s from './Profiles.module.css';
import Timeline from './Timeline/Timeline';

const Profiles = (props) => {
    return (
    <div className={s.profile}>
        <div className={s.header}>
            <img src={props.userInfo.picture} alt="cover" className={s.picture} />
            <div className={s.nav}></div>
            <img src={props.userInfo.photo} alt="user" className={s.photo} />
        </div>
        <div className={s.info}>
            <div className={s.name}>{props.userInfo.name}</div>
        </div>
        <Timeline userInfo={props.userInfo} userPosts={props.userPosts} />

    </div>)
}

export default Profiles;