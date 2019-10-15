import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    let newPostTextArea = React.createRef();

    let postChangeAction = () =>{
        let newText = newPostTextArea.current.value;
        props.postChangeAction(newText);
    }

    let addPostAction = () => {
        props.addPostAction();
    }
    return (<div className={s.newPost}>
                <textarea name="" value={props.newPostText} cols="30" rows="10" onChange={postChangeAction} ref={newPostTextArea}></textarea>
                <input type="button" value="Post" onClick={addPostAction} />
            </div>)
}

export default NewPost;