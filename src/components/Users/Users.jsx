import React from 'react';
import s from './Users.module.css';
import Preloader from '../Helpers/Preloader/Preloader';


let Users = (props) => {
   
    let pagination = () => {
        
        let arr = [];
        for(let i=0; i < props.pageCount; i++){
            arr.push(i); 
        }
        return arr.map((value)=>{
            return <span onClick={()=>{props.onPageChange(value)}} key={value} className={props.pageCurrent === value ? s.selected : ''}>{value + 1}</span>;
        });
    };
    
    return (<div>
        <h2>Users Page</h2>
        { props.isFetching ? <Preloader /> : null }
        {props.users.map(
            (user, index) => {
                return <div key={index} className={s.user}>
                            <div className={s.userImg}>
                                <img src={user.photo} alt={user.name} />
                            </div>
                            <div className={s.userInfo}>
                                <p><span className={s.userInfo_link}>{user.name}</span></p>
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
        <div className={s.pagination}>
            {pagination()}
        </div>
        {/* <div className="contentCenter">
            <button className={s.btn} onClick={()=>{this.props.setUsers()}}>Show More</button>
        </div> */}
        
    </div>);
}

export default Users;