import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsListItem = (props) => {
    let path = '/dialogs/' + props.user_id;
    return (
        <NavLink to={path} activeClassName={s.active} className={s.dialogs_list_item}>
            <img alt="user" src={props.user_photo} />
            <h5>{props.user_name}</h5>
        </NavLink>
    )
}

const MessagesListItem = (props)=>{
    let clases = props.pos === 'my' ? s.messages_list_item + ' ' + s.left : s.messages_list_item + ' ' + s.right;
    return (
        <div className={clases}>
            <img alt="user" src={props.user_photo} />
            <div className={s.wrap}>
                <div className={s.name}>
                    {props.user_name}
                </div>
                <div className={s.text}>
                    {props.user_message}
                </div>
            </div>    
        </div>
    )
}
const Dialogs = (props) => {
    let dialogsData = props.dialogPage.dialogsData;
    let messageData = props.dialogPage.messageData;

    return (<div className={s.dialogs}>
        <div className={s.dialogs_list}>
            {dialogsData.map( dialog => <DialogsListItem user_id={dialog.user_id} user_name={dialog.user_name} user_photo={dialog.user_photo}  />)}
        </div>
        <div className={s.messages_list}>
            {messageData.map( dialog => <MessagesListItem user_message={dialog.user_message} user_name={dialog.user_name} pos={dialog.pos} user_photo={dialog.user_photo}  />)}          
        </div>        
    </div>)
}

export default Dialogs;