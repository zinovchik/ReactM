import React from 'react';
import { Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Profiles from './components/Profiles/Profiles';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App() {
  
  return (
    <div>
      <Header />
      <div className="container">
        <div className="app-wrapper">          
          <SidebarContainer />
          <div className="content">
            <Route path="/profile" render={ () => <Profiles /> } />
            <Route path="/dialogs" render={ () => <DialogsContainer />} />                 
          </div>       
        </div>
      </div>
    </div>
  );
}

export default App;
