let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    limitItems: 2,
    pageCount: 1,
    pageCurrent: 0,
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
                    ...action.users
                ],
                limitItems: action.limit,
                pageCount: Math.ceil(action.count / action.limit),
                pageCurrent: action.page,
            };

        case SET_CURRENT_PAGE: 
            return {
                ...state,
                pageCurrent: action.pageCurrent,
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

export const setUsersActionCreator = (users, limit, count, page) => {
    
    return { 
        type: SET_USERS,
        users: users,
        limit: limit,
        count: count,
        page: page,
    }
};


export const setCurrentPageActionCreator = (pageCurrent) => {
    return {
        type: SET_CURRENT_PAGE,
        pageCurrent: pageCurrent,
    }
};


export default usersReducer;