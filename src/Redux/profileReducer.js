import { userAPI } from '../apiFunctions/api';

let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let SET_USER_INFO = 'SET_USER_INFO';
let TOGLLE_IS_FETCHING = 'TOGLLE_IS_FETCHING';

let initialState = {
    userInfo : {
        'id': '',
        'name': '',
        'profesion': '',
        'location': {'city': '', 'country':  ''},
        'photo': '',
        'picture': '',
        'followed_users': '',
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
    newPostText : "",
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            return {
                ...state,
                userPosts: [...state.userPosts, {'text': state.newPostText, 'like': '2', 'dislike': '1' }],
                newPostText: ""
            };  
        }
        case UPDATE_NEW_POST_TEXT: { 
            return {
                ...state,
                newPostText: action.newText
            }; 
        }
        case SET_USER_INFO: 
        
            return {
                ...state,
                userInfo: {
                    ...action.userInfo
                },
                
            };

        case TOGLLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default: 
            return state; 
    }
}


/** Actions creators */
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

export const setUserInfo = (userInfo) => {
    
    return { 
        type: SET_USER_INFO,
        userInfo: userInfo,
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGLLE_IS_FETCHING,
        isFetching: isFetching,
    }
};


/** Thunk functions */
export const setUserInfoThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUser(userId).then((data)=>{ 
            dispatch(setUserInfo(data.userInfo)); 
            dispatch(toggleIsFetching(false));
        });
    }
};


export default profileReducer;