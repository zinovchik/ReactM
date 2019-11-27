import React from 'react';
import { Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfilesContainer from './components/Profiles/ProfilesContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

import { connect } from 'react-redux';
import { authMeThunkCreator } from './Redux/authReducer';
import Preloader from './components/Helpers/Preloader/Preloader';
import Login from './components/Login/Login';

class AppApiContainer extends React.Component {
  componentDidMount(){
    this.props.authMeThunkCreator();
  }
  render(){
    if(!this.props.userId)  { 
      return <Preloader />  
    }
    return (
      <div>
        <Header {...this.props} />
        <div className="container">
          <div className="app-wrapper">          
            <SidebarContainer />
            <div className="content">
              <Route path="/profile/:userId?" render={ () => <ProfilesContainer /> } />
              <Route path="/dialogs" render={ () => <DialogsContainer />} />
              <Route path="/users" render={ () => <UsersContainer />} />     
              <Route path="/login" render={ () => <Login />} />            
            </div>       
          </div>
        </div>
      </div>
    );
  }
}
  
let mapStateToProps = (state) =>{
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
  }
};
const AppContainer = connect(mapStateToProps, {  authMeThunkCreator } )(AppApiContainer);
export default AppContainer;
