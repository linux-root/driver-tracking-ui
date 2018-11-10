import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import {
  LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS,
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    REGISTER,
    REGISTER_SUCCESS
} from './mutation-types'

import * as config from '../config'

const API_BASE = config.API_BASE;

export const driverAction = {
    login({commit}, credential) {
        console.log(credential);
        let pureCred = {
            username: credential.username,
            password: credential.password
        };
        commit(LOGIN);
        axios.post(`${API_BASE}/drivers/login`, pureCred).then(response => {
            commit(LOGIN_SUCCESS, response.data);
            router.push('/');
            Vue.swal('Đăng nhập thành công');
        }, error => {
            Vue.swal('Sai tên đăng nhập/mật khẩu');
        })
    },
    fetchUserData({commit}, accessToken){
        commit(FETCH_USER_DATA);
        axios.get(`${API_BASE}/drivers/${accessToken.userId}`, {
            headers: {
                'Authorization': accessToken.id
            }
        }).then(response => {
            commit(FETCH_USER_DATA_SUCCESS, response.data);
        })
    },
    register({commit}){
        commit(REGISTER);
        axios.post(`${API_BASE}`/drivers)
    }
};