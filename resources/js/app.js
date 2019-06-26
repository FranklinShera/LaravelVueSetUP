import Vue from 'vue'
import Vuex from 'vuex'
import Master from './components/layout/Master'
import  { store } from './store'
import  { routes } from './routes'
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes ,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router,
    store,
    component: { Master },
});
