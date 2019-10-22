import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../Redux/usersReducer';

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
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
        setUsers: (users = initUsers) => {
            dispatch(setUsersActionCreator(users));
        },
    }
}; 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;