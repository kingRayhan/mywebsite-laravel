import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/pages/home'

const routes = [
    { 
        path: '/',
        name: 'home', 
        component: Home 
    }
]

export default new VueRouter({ routes , mode: 'history' })