import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching} from '../../Redux/usersReducer';
import { userAPI } from '../../apiFunctions/api';


class UsersApiComponent extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        userAPI.getAllUsers(this.props.currentUserId, this.props.pageCurrent, this.props.limitItems)
        .then((data)=>{
            this.props.setUsers(data.items, data.limit, data.count, data.page); 
            this.props.toggleIsFetching(false);
        });
    };

    onPageChange = (p) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        userAPI.getAllUsers(this.props.currentUserId, p, this.props.limitItems).then((data)=>{
            this.props.setUsers(data.items, data.limit, data.count, data.page); 
            this.props.toggleIsFetching(false);
        });
    }
    follow = (userId, userId2) =>{
        userAPI.followUser(userId, userId2).then((data)=>{
            this.props.follow(userId, userId2);
        });
    }

    unfollow = (userId, userId2) =>{
        userAPI.unfollowUser(userId, userId2).then((data)=>{
            this.props.unfollow(userId, userId2);
        });
    }

    render() {
        return (<Users 
            currentUserId={this.props.currentUserId} 
            users={this.props.users} 
            pageCount={this.props.pageCount} 
            pageCurrent={this.props.pageCurrent} 
            onPageChange={this.onPageChange}
            unfollow={this.unfollow}
            follow={this.follow}
            isFetching={this.props.isFetching}  />);
    }
}

let mapStateToProps = (state) =>{
    
    return {
        currentUserId: state.auth.userId,
        users: state.usersPage.users,
        limitItems: state.usersPage.limitItems,
        pageCount: state.usersPage.pageCount,
        pageCurrent: state.usersPage.pageCurrent,
        isFetching: state.usersPage.isFetching,
    }
}; 
/*
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
        toggleIsFetching: (isFetching) => { 
            dispatch(toggleIsFetchingActionCreator(isFetching));
        },
    }
}; 
*/


const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching } )(UsersApiComponent);

export default UsersContainer;