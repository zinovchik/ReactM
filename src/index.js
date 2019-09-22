import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let userInfo = {
    'name':   'Sarah Cruiz',
    'picture':'http://mythemestore.com/friend-finder/images/covers/1.jpg',
    'photo':  'http://mythemestore.com/friend-finder/images/users/user-1.jpg',
};
let userPosts = [
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
];

let dialogsData = [
    {user_id:"1", user_name:"Linda Lohan", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
    {user_id:"2", user_name:"Julia Cox", user_photo:"http://mythemestore.com/friend-finder/images/users/user-10.jpg"}
];

let messageData = [
    {user_message:"Hello", user_name:"Linda Lohan", pos:"my", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
    {user_message:"How are you?", user_name:"Linda Lohan", pos:"my", user_photo:"http://mythemestore.com/friend-finder/images/users/user-2.jpg"},
    {user_message:"Hi", user_name:"Linda Lohan", pos:"", user_photo:"http://mythemestore.com/friend-finder/images/users/user-10.jpg"},
    {user_message:"excelent", user_name:"Linda Lohan", pos:"", user_photo:"http://mythemestore.com/friend-finder/images/users/user-10.jpg"}
];

ReactDOM.render(<App userInfo={userInfo} userPosts={userPosts} dialogsData={dialogsData} messageData={messageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
