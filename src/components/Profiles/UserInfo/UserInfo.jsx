import React from 'react';
import s from './UserInfo.module.css';

const UserInfo = (props) => {
    let userInfo = props.userInfo;
    return (
        <div>
            <div className={s.header}>
                <img src={userInfo.picture} alt="cover" className={s.picture} />
                <div className={s.nav}></div>
                <img src={userInfo.photo} alt="user" className={s.photo} />
            </div>
            <div className={s.info}>
                <div className={s.name}>{userInfo.name}</div>
            </div>
        </div>)
}

export default UserInfo;