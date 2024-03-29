import React from 'react';
import s from './UserInfo.module.css';
let default_bg = 'http://reactm.max/img/covers/9.jpg';

const UserInfo = (props) => {
    let userInfo = props.userInfo;
    return (
        <div>
            <div className={s.header}>
                <img src={userInfo.picture ? userInfo.picture : default_bg} alt="cover" className={s.picture} />
                <div className={s.nav}></div>
                <img src={userInfo.photo} alt="user" className={s.photo} />
            </div>
            <div className={s.info}>
                <div className={s.name}>{userInfo.name}</div>
            </div>
        </div>)
}

export default UserInfo;