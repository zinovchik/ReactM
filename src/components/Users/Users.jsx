import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    return (<div>
                <h2>Users Page</h2>
                {props.users.map(
                    (user, index) => {
                        return <div key={index} className={s.user}>
                                    <div className={s.userImg}>
                                        <img src={user.photo} alt={user.name} />
                                    </div>
                                    <div className={s.userInfo}>
                                        <p><a href="#" className={s.userInfo_link}>{user.name}</a></p>
                                        <p>{user.profesion}</p>
                                        <p className={s.userInfo_city}>{user.location.city}, {user.location.country}</p>
                                    </div>
                                    <div className={s.userAction}>
                                        { user.follow ? 
                                            <button className={s.btn} onClick={()=>{props.unfollow(user.id)}}>Unfollow</button> : 
                                            <button className={s.btn} onClick={()=>{props.follow(user.id)}}>Follow</button>}
                                    </div>
                                </div>
                    }
                )}
                <div className="contentCenter">
                    <button className={s.btn} onClick={()=>{props.setUsers()}}>Show More</button>
                </div>
                
            </div>);
};

export default Users;