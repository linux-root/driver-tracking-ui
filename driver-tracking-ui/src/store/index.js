import Vue from 'vue'
import Vuex from 'vuex'
import {productGetters} from './getters'
import {driverAction} from "./actions";
import {driverMutation} from "./mutations"

Vue.use(Vuex); // config vuex plugin for vue

//in order to access state in our component, we must attach this store to our Vue instance in file main.js

export default new Vuex.Store({
    stric : true,
    state: {
        showLoader: false,
        user: {},
        results: [],
        accessToken : {}
    },
    getters : Object.assign({}, productGetters),
    mutations: Object.assign({},driverMutation),
    actions: Object.assign({}, driverAction)
})