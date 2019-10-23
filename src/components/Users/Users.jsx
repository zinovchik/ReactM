import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount(){
        axios.get(`http://reactm.max/api/1.0/users.php?userid=7&page=${this.props.pageCurrent}&limit=${this.props.limitItems}`).then((response)=>{
            this.props.setUsers(response.data.items, response.data.limit, response.data.count, response.data.page); 
        });
    };

    onPageChange = (p) =>{
        this.props.setCurrentPage(p);
        axios.get(`http://reactm.max/api/1.0/users.php?userid=7&page=${p}&limit=${this.props.limitItems}`).then((response)=>{
            this.props.setUsers(response.data.items, response.data.limit, response.data.count, response.data.page); 
        });
    }

    render() {
        let pagination = (pageCount, pageCurrent) => {
            
            let arr = [];
            for(let i=0; i < pageCount; i++){
                arr.push(i); 
            }
            return arr.map((value)=>{
                return <span onClick={()=>{this.onPageChange(value)}} key={value} className={pageCurrent == value ? s.selected : ''}>{value + 1}</span>;
            });
        };
        
        return (<div>
            <h2>Users Page</h2>
            
            {this.props.users.map(
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
                                        <button className={s.btn} onClick={()=>{this.props.unfollow(user.id)}}>Unfollow</button> : 
                                        <button className={s.btn} onClick={()=>{this.props.follow(user.id)}}>Follow</button>}
                                </div>
                            </div>
                }
            )}
            <div className={s.pagination}>
                {pagination(this.props.pageCount, this.props.pageCurrent)}
            </div>
            <div className="contentCenter">
                <button className={s.btn} onClick={()=>{this.props.setUsers()}}>Show More</button>
            </div>
            
        </div>);
    }
}

export default Users;