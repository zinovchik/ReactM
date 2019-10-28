import React from 'react';
import Profiles from './Profiles';
import {connect} from 'react-redux';
import * as axios from 'axios';
import { setUserInfo, toggleIsFetching } from '../../Redux/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfilesApiComponent extends React.Component {
    
    componentDidMount(){ // debugger
        let userId = this.props.match.params.userId; 
        if(!userId) {
            userId = 7;
        }
        this.props.toggleIsFetching(true);
        axios.get(`http://reactm.max/api/1.0/users.php?type=get-user-info&userid=${userId}`).then((response)=>{ 
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

const ProfilesContainer = connect(mapStateToProps, {setUserInfo, toggleIsFetching})(withRouter( ProfilesApiComponent));

export default ProfilesContainer;