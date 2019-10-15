import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';

const DialogsContainer = (props) => {
    
    let store = props.store.getState();
    let dialogsPage = store.dialogsPage;

    let messageChange = (newText) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(newText));
    }

    let addMessageAction = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return ( <Dialogs dialogsPage={dialogsPage} addMessageAction={addMessageAction} messageChange={messageChange} />)
}

export default DialogsContainer;