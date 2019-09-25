let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


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
            ]
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
            ]
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
    _callSubscriber(){
        console.log('State chenged');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){

        } else if(action.type === UPDATE_NEW_POST_TEXT) {

        } else {
            //22.55
        }
    }
    

};
export default state;