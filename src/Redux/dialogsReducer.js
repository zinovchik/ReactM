let ADD_MESSAGE = 'ADD_MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    userInfo : {
        'name':   'Sarah Cruiz',
        'photo':  'http://mythemestore.com/friend-finder/images/users/user-1.jpg',
    },
    dialogsData : [
        {user_id:"1", user_name:"Linda Lohan", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
        {user_id:"2", user_name:"Julia Cox", user_photo:"http://mythemestore.com/friend-finder/images/users/user-10.jpg"}
    ],        
    messageData : [
        {user_message:"Hello", user_name:"Linda Lohan", pos:"my", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
        {user_message:"How are you?", user_name:"Linda Lohan", pos:"my", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
        {user_message:"Hi", user_name:"Linda Lohan", pos:"", user_photo:"http://mythemestore.com/friend-finder/images/users/user-10.jpg"},
        {user_message:"excelent", user_name:"Linda Lohan", pos:"", user_photo:"http://mythemestore.com/friend-finder/images/users/user-10.jpg"}
    ],
    newMessageText : ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                messageData: [...state.messageData, {user_message: state.newMessageText, user_name:"Linda Lohan", pos:"my", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"}],
                newMessageText: ""
            };  
        }
            
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }; 
        }
            
        default: 
            return state; 
    }
}

export default dialogsReducer;


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    }
}