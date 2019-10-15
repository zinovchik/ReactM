import React from 'react';
import Sidebar from './Sidebar';

const SidebarContainer = (props) => {
  let store = props.store.getState();
    let sidebar = store.sidebar;

    return (<Sidebar sidebar={sidebar} />)
}

export default SidebarContainer;