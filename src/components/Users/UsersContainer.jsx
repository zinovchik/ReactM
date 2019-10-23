// import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator} from '../../Redux/usersReducer';


let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        limitItems: state.usersPage.limitItems,
        pageCount: state.usersPage.pageCount,
        pageCurrent: state.usersPage.pageCurrent,
    }
}; 

let mapDispatchToProps = (dispatch) =>{
    
    let initUsers = [
        {
            id: 6, 
            name: 'John Sith', 
            profesion: 'Driver', 
            location: {city: 'TX', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-12.jpg',
            follow: false
        }, {
            id: 7, 
            name: 'Maria Colt', 
            profesion: 'Writer at Website', 
            location: {city: 'TX', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-20.jpg',
            follow: false
        }, 
    ]
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users = initUsers, limit = 3, count = 0, page = 0) => {
            dispatch(setUsersActionCreator(users, limit, count, page));
        },
        setCurrentPage: (pageCurrent) => { 
            dispatch(setCurrentPageActionCreator(pageCurrent));
        },
    }
}; 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;