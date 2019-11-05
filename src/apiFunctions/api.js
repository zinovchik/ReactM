import * as axios from 'axios';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://reactm.max/api/1.0/',
});

export const userAPI = {
    
            
    authMe () {
        return instance.get(`users.php?type=auth-me`).then((response)=>{
            if(!response.data.resultCode) {
                return response.data; 
            }
        });
    },

    getUser (userId = 0) {
        return instance.get(`users.php?type=get-user-info&userid=${userId}`).then((response)=>{
            return response.data;
        });
    },

    getListUsers (currentUserId = 0, pageCurrent = 0, limitItems = 5) {
        return instance.get(`users.php?type=get-all-users&userid=${currentUserId}&page=${pageCurrent}&limit=${limitItems}`).then((response)=>{
            return response.data;
        });
    },

    followUser (userId, userId2) {
        return instance.get(`users.php?type=follow-user&userid=${userId}&userid2=${userId2}`).then((response)=>{
            return response.data;
        });
    },

    unfollowUser (userId, userId2) {
        return instance.get(`users.php?type=unfollow-user&userid=${userId}&userid2=${userId2}`).then((response)=>{
            return response.data;
        });
    },
}

