import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './components/pages/home'


const routes = [
  { 
    path: '/',
    name: 'home', 
    component: Home 
  },
  { 
  	path: '/test',
  	name: 'home', 
  	component: Home 
  },

]

export default new VueRouter({ routes , mode: 'history' })