import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setUserData, toggleIsFetching} from '../../Redux/authReducer';
import { connect } from 'react-redux';

class HeaderApiContainer extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`http://reactm.max/api/1.0/auth-me.php`).then((response)=>{
            if(!response.data.resultCode) {
                this.props.setUserData(response.data.data.userId, response.data.data.email, response.data.data.login); 
            }
            this.props.toggleIsFetching(false);
            
        });
    }
    render(){
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
    }
}; 

const HeaderContainer = connect(mapStateToProps, {  setUserData, toggleIsFetching } )(HeaderApiContainer);

export default HeaderContainer;