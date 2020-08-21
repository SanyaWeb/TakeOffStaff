import Vue from 'vue'
import Vuex from 'vuex'

import tabItems from "./tabItems"
import contactList from "./contactList"
import login from "./login"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        tabItems, contactList, login
    }
})