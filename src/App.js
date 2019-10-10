import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profiles from './components/Profiles/Profiles';
import Dialogs from './components/Dialogs/Dialogs';




function App(props) {
  let profilePage = props.state.profilePage;
  let dialogsPage = props.state.dialogsPage;
  let sidebar = props.state.sidebar;

  return (
    <BrowserRouter>
    <Header />
    <div className="container">
      <div className="app-wrapper">          
        <Sidebar sidebar={sidebar}/>
        <div className="content">
          <Route path="/profile" render={ () => <Profiles profilePage={profilePage} dispatch={props.dispatch} /> } />
          <Route path="/dialogs" render={ () => <Dialogs dialogsPage={dialogsPage} dispatch={props.dispatch} />} />                 
        </div>       
      </div>
    </div>
    </BrowserRouter>);
}

export default App;
