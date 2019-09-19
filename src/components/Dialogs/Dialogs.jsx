import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs_list_item = (props) => {
    let path = '/dialogs/' + props.user_id;
    return (
        <NavLink to={path} activeClassName={s.active} className={s.dialogs_list_item}>
            <img src={props.user_photo} />
            <h5>{props.user_name}</h5>
        </NavLink>
    )
}

const Messages_list_item = (props)=>{
    let clases = props.pos== 'my' ? s.messages_list_item + ' ' + s.left : s.messages_list_item + ' ' + s.right;
    return (
        <div className={clases}>
            <img src={props.user_photo} />
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
    return (<div className={s.dialogs}>
        <div className={s.dialogs_list}>
            <Dialogs_list_item user_id="1" user_name="Linda Lohan" user_photo="http://mythemestore.com/friend-finder/images/users/user-2.jpg"  />
            <Dialogs_list_item user_id="1" user_name="Julia Cox" user_photo="http://mythemestore.com/friend-finder/images/users/user-10.jpg"  />
        </div>
        <div className={s.messages_list}>
            <Messages_list_item user_message="Hello" user_name="Linda Lohan" pos="my" user_photo="http://mythemestore.com/friend-finder/images/users/user-2.jpg"  />
            <Messages_list_item user_message="How are you?" user_name="Linda Lohan" pos="my" user_photo="http://mythemestore.com/friend-finder/images/users/user-2.jpg"  />
            <Messages_list_item user_message="Hi" user_name="Linda Lohan" pos="" user_photo="http://mythemestore.com/friend-finder/images/users/user-10.jpg"  />
            <Messages_list_item user_message="excelent" user_name="Linda Lohan" pos="" user_photo="http://mythemestore.com/friend-finder/images/users/user-10.jpg"  />
            
        </div>        
    </div>)
}

export default Dialogs;