import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export const withAuthRedirect = (Component) => {
    class AuthRedirectComponent extends React.Component {
        render () {
            if(this.props.isAuth === false ){
                return <Redirect to="/login" />
            }

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
    
    return ConnectedAuthRedirectComponent;
}