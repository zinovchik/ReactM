let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    // switch (action.type){
    //     case ADD_POST:
            
    //         return state;  
    //     case UPDATE_NEW_POST_TEXT:
           
    //         return state; 
    //     default: 
    //         return state; 
    // }
    return state;
}

export default sidebarReducer;