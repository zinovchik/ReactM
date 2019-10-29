import React from 'react';
import  s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) =>{
    return (<header className={s.header}>
        <div className="container">
             <img className={s.logo} src={'http://mythemestore.com/friend-finder/images/logo.png'} alt='img'/>
             <div className={s.loginBlock}>
                 {props.isAuth ? <NavLink to={'/profile/' + props.userId}>{props.login}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
             </div>
        </div>
    </header>)
}
export default Header;