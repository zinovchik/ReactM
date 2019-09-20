import React from 'react';
import s from './Profiles.module.css';

const Profiles = () => {
    return (
    <div className={s.profile}>
        <div className={s.header}>
            <img src="http://mythemestore.com/friend-finder/images/covers/1.jpg" alt="cover" className={s.picture} />
            <div className={s.nav}></div>
            <img src="http://mythemestore.com/friend-finder/images/users/user-1.jpg" alt="user" className={s.photo} />
        </div>
        <div className={s.info}>
            <div className={s.name}>Sarah Cruiz</div>
        </div>

    </div>)
}

export default Profiles;