import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Nav = () => {
    return (<nav className={s.navbar}>
              <ul>
                <li><NavLink to="/profile" activeClassName={s.active}><span>&#9731;</span> Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}><span>&#9993;</span> Dialogs</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}><span>&#9998;</span> News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}><span>&#9733;</span> Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={s.active}><span>&#9776;</span> Settings</NavLink></li>
              </ul>
            </nav>)
}

export default Nav;