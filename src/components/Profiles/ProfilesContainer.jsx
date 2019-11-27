import React from 'react';
import Profiles from './Profiles';
import {connect} from 'react-redux';
import { setUserInfoThunkCreator } from '../../Redux/profileReducer';
import {withRouter, Redirect} from 'react-router-dom';


class ProfilesApiComponent extends React.Component {
    
    componentDidMount(){ // debugger
        let userId = this.props.match.params.userId; 
        if(!userId) {
            userId = 7;
        }
        this.props.setUserInfoThunkCreator(userId);
    };

    

    render (){
        if(this.props.isAuth === false ){
            return <Redirect to="/login" />
        }
        return <Profiles {...this.props} />
    }
    
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo,
        isFetching: state.profilePage.isFetching, 
        isAuth: state.auth.isAuth,
    }
}


// let mapDispatchToProps = (state) => {
//     return {
//         setUserInfo: state.usersPage.users,
//     }
// } 

const ProfilesContainer = connect(mapStateToProps, {setUserInfoThunkCreator})(withRouter( ProfilesApiComponent));

export default ProfilesContainer;