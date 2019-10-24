import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, toggleIsFetchingActionCreator} from '../../Redux/usersReducer';


class UsersApiComponent extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`http://reactm.max/api/1.0/users.php?userid=7&page=${this.props.pageCurrent}&limit=${this.props.limitItems}`).then((response)=>{
            this.props.setUsers(response.data.items, response.data.limit, response.data.count, response.data.page); 
            this.props.toggleIsFetching(false);
        });
    };

    onPageChange = (p) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`http://reactm.max/api/1.0/users.php?userid=7&page=${p}&limit=${this.props.limitItems}`).then((response)=>{
            this.props.setUsers(response.data.items, response.data.limit, response.data.count, response.data.page); 
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        return (<Users 
            users={this.props.users} 
            pageCount={this.props.pageCount} 
            pageCurrent={this.props.pageCurrent} 
            onPageChange={this.onPageChange}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}  />);
    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        limitItems: state.usersPage.limitItems,
        pageCount: state.usersPage.pageCount,
        pageCurrent: state.usersPage.pageCurrent,
        isFetching: state.usersPage.isFetching,
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
        toggleIsFetching: (isFetching) => { 
            dispatch(toggleIsFetchingActionCreator(isFetching));
        },
    }
}; 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;