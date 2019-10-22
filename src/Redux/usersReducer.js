
let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1, 
            name: 'Emma Johnson', 
            profesion: 'Model at Fashion', 
            location: {city: 'CA', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-16.jpg',
            follow: false
        }, {
            id: 2, 
            name: 'Nora Wilson', 
            profesion: 'Writer at Newspaper', 
            location: {city: 'NY', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-17.jpg',
            follow: false
        }, {
            id: 3, 
            name: 'Diana Amber', 
            profesion: 'Student', 
            location: {city: 'LA', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-18.jpg',
            follow: false
        }, {
            id: 4, 
            name: 'Jonathon Thompson', 
            profesion: 'Fashion Designer', 
            location: {city: 'CA', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-19.jpg',
            follow: false
        }, {
            id: 5, 
            name: 'Olivia Steward', 
            profesion: 'Creative Director', 
            location: {city: 'NY', country: 'USA'}, 
            photo: 'http://mythemestore.com/friend-finder/images/users/user-14.jpg',
            follow: false
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map((user)=>{ 
                    if(user.id === action.userId){
                        return {
                            ...user,
                            follow: true,
                        }
                    }
                    return user;
                }),
            };
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map((user)=>{ 
                    if(user.id === action.userId){
                        return {
                            ...user,
                            follow: false,
                        }
                    }
                    return user;
                }),
            };
        case SET_USERS: 
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ]
            };

        default: return state;
    }
};

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
};

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
};


export default usersReducer;