// import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

// const DialogsContainer = () => {
//     return (<StoreContext.Consumer>
//                 {
//                     (store) => {
//                         let state = store.getState();
//                         let dialogsPage = state.dialogsPage;
                    
//                         let messageChange = (newText) =>{
//                             store.dispatch(updateNewMessageTextActionCreator(newText));
//                         }
                    
//                         let addMessageAction = () => {
//                             store.dispatch(addMessageActionCreator());
//                         }
//                         return (<Dialogs dialogsPage={dialogsPage} addMessageAction={addMessageAction} messageChange={messageChange} />)
//                     }
//                 }
//             </StoreContext.Consumer>)
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        messageChange: (newText) =>{
            dispatch(updateNewMessageTextActionCreator(newText));
        }, 
        addMessageAction: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;