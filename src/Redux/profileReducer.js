let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    userInfo : {
        'name':   'Sarah Cruiz',
        'picture':'http://mythemestore.com/friend-finder/images/covers/1.jpg',
        'photo':  'http://mythemestore.com/friend-finder/images/users/user-1.jpg',
    },
    userPosts : [
        {'text': ' If you want your app to work offline and load faster, you can change unregister() to register() below.',
        'like': '12',
        'dislike': '2'
        },
        {'text': 'Learn more about service workers: https://bit.ly/CRA-PWA',
        'like': '15',
        'dislike': '0'
        },
        {'text': 'Note that the development build is not optimize. To create a production build, use npm run build.',
        'like': '5',
        'dislike': '2'
        },
    ],
    newPostText : ""
};

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