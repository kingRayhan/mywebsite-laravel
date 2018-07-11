require('./bootstrap');

window.Vue = require('vue')
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('mywebsite', require('./components/mywebsite.vue'));
Vue.component('hero', require('./components/hero.vue'));
Vue.component('about-me', require('./components/about-me.vue'));
Vue.component('v-menu', require('./components/v-menu.vue'));

import router from './Router'


const app = new Vue({
    el: '#app',
    router
});
