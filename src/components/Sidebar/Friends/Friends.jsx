import React from 'react';
import s from './Friends.module.css';




const Friends = (props) => {
  let friends = props.friends;
    return (<div className={s.friends}>
      <h3>My Friends</h3>
              {friends.map( (friend) => {return <div className={s.friend}><img src={friend.photo} title={friend.name} /></div>} )}
            </div>)
}

export default Friends;