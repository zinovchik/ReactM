import React from 'react';
import { Route} from "react-router-dom";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfilesContainer from './components/Profiles/ProfilesContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  
  return (
    <div>
      <HeaderContainer />
      <div className="container">
        <div className="app-wrapper">          
          <SidebarContainer />
          <div className="content">
            <Route path="/profile/:userId?" render={ () => <ProfilesContainer /> } />
            <Route path="/dialogs" render={ () => <DialogsContainer />} />
            <Route path="/users" render={ () => <UsersContainer />} />                 
          </div>       
        </div>
      </div>
    </div>
  );
}

export default App;
