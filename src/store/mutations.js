import {
    FETCH_USER_DATA_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS
} from './mutation-types'


export const driverMutation = {
    [LOGIN](state){
        state.showLoader = true;
    },
    [LOGIN_SUCCESS](state, payload){
        state.showLoader = true;
        state.accessToken = payload;
        localStorage.setItem('accessToken', JSON.stringify(payload))
    },
    [FETCH_USER_DATA_SUCCESS](state, payload){
        state.showLoader = false;
        state.user = payload;
        localStorage.setItem('user',JSON.stringify(payload));
    }
};