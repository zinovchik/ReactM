import React from 'react';
import  s from './Header.module.css';

const Header = () =>{
    return (<header className={s.header}>
        <div className="container">
             <img className={s.logo} src={'http://mythemestore.com/friend-finder/images/logo.png'} alt='img'/>
        </div>
    </header>)
}
export default Header;