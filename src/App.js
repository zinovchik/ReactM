import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Profiles from './components/Profiles/Profiles';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  
  return (
    <BrowserRouter>
    <Header />
    <div className="container">
      <div className="app-wrapper">          
        <SidebarContainer store={props.store} />
        <div className="content">
          <Route path="/profile" render={ () => <Profiles store={props.store} /> } />
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} />} />                 
        </div>       
      </div>
    </div>
    </BrowserRouter>);
}

export default App;
