let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {'text': state.newPostText,
                'like': '2',
                'dislike': '1'
            };
            state.userPosts.push(newPost);
            state.newPostText = "";
            return state;  
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state; 
        default: 
            return state; 
    }
}

export default profileReducer;

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}