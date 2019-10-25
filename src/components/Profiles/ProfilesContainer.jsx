import React from 'react';
import Profiles from './Profiles';
import {connect} from 'react-redux';
import * as axios from 'axios';

class ProfilesApiComponent extends React.Component {
    
    componentDidMount(){
        // this.props.toggleIsFetching(true);
        axios.get(`http://reactm.max/api/1.0/users.php?type=get-user-info&userid=7`).then((response)=>{ 
            this.props.setUserInfo(response.data.userInfo); 
            // this.props.toggleIsFetching(false);
        });
    };

    render (){
        return <Profiles {...this.props} />
    }
    
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.userInfo
    }
}


let mapDispatchToProps = (state) => {
    return {
        
    }
} 

const ProfilesContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilesApiComponent);

export default ProfilesContainer;