import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (<StoreContext.Consumer>
                {
                    (store) => {
                        let state = store.getState();
                        let dialogsPage = state.dialogsPage;
                    
                        let messageChange = (newText) =>{
                            store.dispatch(updateNewMessageTextActionCreator(newText));
                        }
                    
                        let addMessageAction = () => {
                            store.dispatch(addMessageActionCreator());
                        }
                        return (<Dialogs dialogsPage={dialogsPage} addMessageAction={addMessageAction} messageChange={messageChange} />)
                    }
                }
            </StoreContext.Consumer>)
}

export default DialogsContainer;