import { userAPI } from '../apiFunctions/api';
let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let TOGLLE_IS_FETCHING = 'TOGLLE_IS_FETCHING';
let FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    limitItems: 2,
    pageCount: 1,
    pageCurrent: 0,
    isFetching: false,
    followProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOWING_PROGRESS: 
            if(action.inProccess) {     
                return {
                   ...state,
                   followProgress: [
                    ...state.followProgress,
                    action.userId2,
                   ]
                };
            } else {
                return {
                    ...state,
                    followProgress: state.followProgress.filter( item => item !== action.userId2),
                 };  
            }
            

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
        case TOGLLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching,
            };

        default: return state;
    }
};

export const followingProgress = (userId2, inProccess = false) => {
    return {
        type: FOLLOWING_PROGRESS,
        userId2: userId2,
        inProccess: inProccess,
    }
};

export const follow = (userId, userId2) => {
    return {
        type: FOLLOW,
        userId: userId2,
    }
};

export const unfollow = (userId, userId2) => {
    return {
        type: UNFOLLOW,
        userId: userId2,
    }
};

export const setUsers = (users, limit, count, page) => {
    
    return { 
        type: SET_USERS,
        users: users,
        limit: limit,
        count: count,
        page: page,
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGLLE_IS_FETCHING,
        isFetching: isFetching,
    }
};

/** Thunk functions */

export const getAllUsersThunkCreator = (currentUserId, pageCurrent, limitItems) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getAllUsers(currentUserId, pageCurrent, limitItems)
        .then((data)=>{
            dispatch(setUsers(data.items, data.limit, data.count, data.page)); 
            dispatch(toggleIsFetching(false));
        });
    }
};

export const followThunkCreator = (userId, userId2) => {
    return (dispatch) => {
        dispatch(followingProgress(userId2, true)); 
        userAPI.followUser(userId, userId2).then((data)=>{
            dispatch(follow(userId, userId2));
            dispatch(followingProgress(userId2, false));
        });
    }
};

export const unfollowThunkCreator = (userId, userId2) => {
    return (dispatch) => {
        dispatch(followingProgress(userId2, true)); 
        userAPI.unfollowUser(userId, userId2).then((data)=>{
            dispatch(unfollow(userId, userId2));
            dispatch(followingProgress(userId2, false));
        });
    }
};

export default usersReducer;