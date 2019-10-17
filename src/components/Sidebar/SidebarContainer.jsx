import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../StoreContext';

const SidebarContainer = () => {
    return (<StoreContext.Consumer>
              {
                (store) => {
                  let state =store.getState();
                  let sidebar = state.sidebar;
                  return <Sidebar sidebar={sidebar} />
                }
              }
            </StoreContext.Consumer>)
}

export default SidebarContainer;