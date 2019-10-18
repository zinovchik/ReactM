import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

// const SidebarContainer = () => {
//     return (<StoreContext.Consumer>
//               {
//                 (store) => {
//                   let state =store.getState();
//                   let sidebar = state.sidebar;
//                   return <Sidebar sidebar={sidebar} />
//                 }
//               }
//             </StoreContext.Consumer>)
// }

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  };
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;