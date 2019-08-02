import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import { store } from './store'
import {TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all";

Vue.use(VueRouter);

import Logo from './components/Logo'
import VueGridLayoutDemo from './components/VueGridLayoutDemo'
import TextReverse from './components/TextReverse'
import Playground from './components/Playground'

const routes = [
    { path: '/logo', component: Logo },
    { path: '/vue-grid-layout-demo', component: VueGridLayoutDemo },
    { path: '/text-reverse', component: TextReverse },
    { path: '/playground', component: Playground }
];

const router = new VueRouter({
    // mode: 'history',
    routes:routes
});

// Vue.component('vue-content', Logo);
// Vue.component('vue-content', Test1);

//delimiters: ["((", "))"],
const app = new Vue({
    router,
    store
}).$mount('#app');