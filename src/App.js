import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profiles from './components/Profiles/Profiles';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="container">
      <div className="app-wrapper">
             
        <Nav />
        <div className="content">
          <Route path="/profile" component={Profiles} />
          <Route path="/dialogs" component={Dialogs} />
          
         
        </div>
        
      </div>
    </div>
    </BrowserRouter>);
}

export default App;
