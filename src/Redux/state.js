let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let ADD_MESSAGE = 'ADD_MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
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
        },
        sidebar: {
            friends: [
                {
                    'name':   'Logan',
                    'photo':  'http://mythemestore.com/friend-finder/images/users/user-3.jpg',
                },
                {
                    'name':   'Marty ',
                    'photo':  'http://mythemestore.com/friend-finder/images/users/user-4.jpg',
                },
                {
                    'name':   'Mice',
                    'photo':  'http://mythemestore.com/friend-finder/images/users/user-6.jpg',
                },
                {
                    'name':   'John',
                    'photo':  'http://mythemestore.com/friend-finder/images/users/user-7.jpg',
                },
                {
                    'name':   'Bob',
                    'photo':  'http://mythemestore.com/friend-finder/images/users/user-9.jpg',
                },
            ]
        },
    },
    getState(){
        return this._state;
    },
    _addPost(){
        let newPost = {'text': this._state.profilePage.newPostText,
                        'like': '2',
                        'dislike': '1'
                      };
        this._state.profilePage.userPosts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this.getState());
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this.getState());
    },

    _addMessage(){
        let newMessage = {user_message: this._state.dialogPage.newMessageText, user_name:"Linda Lohan", pos:"my", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"};
        this._state.dialogPage.messageData.push(newMessage);
        this._state.dialogPage.newMessageText = "";
        this._callSubscriber(this.getState());
    },
    _updateNewMessageText(newText){
        this._state.dialogPage.newMessageText = newText;
        this._callSubscriber(this.getState());
    },


    _callSubscriber(){
        console.log('No subscribers (Observers)');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            this._addPost(); 
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if(action.type === ADD_MESSAGE){
            this._addMessage(); 
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText);
        } else {
            //22.55
        }
    }
    

};
export default store;

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
