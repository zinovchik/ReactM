import React from 'react';
import Profiles from './Profiles';
import {connect} from 'react-redux';
import * as axios from 'axios';
import { setUserInfo, toggleIsFetching } from '../../Redux/profileReducer';

class ProfilesApiComponent extends React.Component {
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`http://reactm.max/api/1.0/users.php?type=get-user-info&userid=7`).then((response)=>{ 
            this.props.setUserInfo(response.data.userInfo); 
            this.props.toggleIsFetching(false);
        });
    };

    render (){
        return <Profiles {...this.props} />
    }
    
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo,
        isFetching: state.profilePage.isFetching, 
    }
}


// let mapDispatchToProps = (state) => {
//     return {
//         setUserInfo: state.usersPage.users,
//     }
// } 

const ProfilesContainer = connect(mapStateToProps, {setUserInfo, toggleIsFetching})(ProfilesApiComponent);

export default ProfilesContainer;