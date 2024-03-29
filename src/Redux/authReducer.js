import { userAPI } from "../apiFunctions/api";

let SET_USER_DATA = 'SET_USER_DATA';
let TOGLLE_IS_FETCHING = 'TOGLLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        

        default: return state;
    }
};

/** Action Creators */
export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login },
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGLLE_IS_FETCHING,
        isFetching: isFetching,
    }
};

/** Thunk functions */
export const authMeThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.authMe().then((data)=>{
            dispatch(setUserData(data.data.userId, data.data.email, data.data.login)); 
            dispatch(toggleIsFetching(false));
        });
    }
};

export default authReducer;