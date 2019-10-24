let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGLLE_IS_FETCHING = 'TOGLLE_IS_FETCHING';

let initialState = {
    users: [],
    limitItems: 2,
    pageCount: 1,
    pageCurrent: 0,
    isFetching: false,
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

        case TOGLLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching,
            };

        default: return state;
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
};

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
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


export const setCurrentPage = (pageCurrent) => {
    return {
        type: SET_CURRENT_PAGE,
        pageCurrent: pageCurrent,
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGLLE_IS_FETCHING,
        isFetching: isFetching,
    }
};


export default usersReducer;