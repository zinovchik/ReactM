import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followThunkCreator, unfollowThunkCreator, getAllUsersThunkCreator} from '../../Redux/usersReducer';


class UsersApiComponent extends React.Component {
    componentDidMount(){
        this.props.getAllUsersThunkCreator(this.props.currentUserId, this.props.pageCurrent, this.props.limitItems);
    };

    onPageChange = (p) =>{
        this.props.getAllUsersThunkCreator(this.props.currentUserId, p, this.props.limitItems);
    }
    
    follow = (userId, userId2) =>{
        this.props.followThunkCreator(userId, userId2); 
    }

    unfollow = (userId, userId2) =>{
        this.props.unfollowThunkCreator(userId, userId2); 
    }

    render() {
        return (<Users 
            currentUserId={this.props.currentUserId} 
            users={this.props.users} 
            pageCount={this.props.pageCount} 
            pageCurrent={this.props.pageCurrent} 
            onPageChange={this.onPageChange}
            followProgress={this.props.followProgress} 
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
        followProgress: state.usersPage.followProgress,
    }
}; 

const UsersContainer = connect(mapStateToProps, { followThunkCreator, unfollowThunkCreator, getAllUsersThunkCreator } )(UsersApiComponent);

export default UsersContainer;