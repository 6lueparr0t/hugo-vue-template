// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        message: '안녕하세요, vue !',
        seen:true,
    },
});