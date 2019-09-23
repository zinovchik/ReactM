import React from 'react';
import s from './Sidebar.module.css';
import Navbar from './Navbar/Navbar';
import Friends from './Friends/Friends';




const Sidebar = (props) => {
  let friends = props.sidebar.friends;
    return (<aside className={s.sidebar}>
              <Navbar />
              <Friends friends={friends} />
            </aside>)
}

export default Sidebar;