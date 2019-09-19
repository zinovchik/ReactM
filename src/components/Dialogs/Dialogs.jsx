import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (<div className={s.dialogs}>
        <div className={s.dialogs_list}>
        <NavLink to="/dialogs/1" activeClassName={s.active} className={s.dialogs_list_item}>
            <img src={'http://mythemestore.com/friend-finder/images/users/user-2.jpg'} />
            <h5>Linda Lohan</h5>
        </NavLink>   
        <NavLink to="/dialogs/2" activeClassName={s.active}  className={s.dialogs_list_item}>
            <img src={'http://mythemestore.com/friend-finder/images/users/user-10.jpg'} />
            <h5>Julia Cox</h5>
        </NavLink>
            
        </div>
        <div className={s.messages_list}>
            <div className={s.messages_list_item+' '+s.left}>
                <img src={'http://mythemestore.com/friend-finder/images/users/user-10.jpg'} />
                <div className={s.wrap}>
                    <div className={s.name}>
                        Julia Cox
                    </div>
                    <div className={s.text}>
                        Hello
                    </div>
                </div>    
            </div>
            <div className={s.messages_list_item+' '+s.left}>
                <img src={'http://mythemestore.com/friend-finder/images/users/user-10.jpg'} />
                <div className={s.wrap}>
                    <div className={s.name}>
                        Julia Cox
                    </div>
                    <div className={s.text}>
                        How are you?
                    </div>
                </div>    
            </div>

            <div className={s.messages_list_item+' '+s.right}>
                <img src={'http://mythemestore.com/friend-finder/images/users/user-2.jpg'} />
                <div className={s.wrap}>
                    <div className={s.name}>
                        Linda Lohan
                    </div>
                    <div className={s.text}>
                        Hello
                    </div>
                </div>    
            </div>
            <div className={s.messages_list_item+' '+s.right}>
                <img src={'http://mythemestore.com/friend-finder/images/users/user-2.jpg'} />
                <div className={s.wrap}>
                    <div className={s.name}>
                        Linda Lohan
                    </div>
                    <div className={s.text}>
                        How are you?
                    </div>
                </div>
            </div>
        </div>        
    </div>)
}

export default Dialogs;