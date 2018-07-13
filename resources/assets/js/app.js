require('./bootstrap');
window.Vue = require('vue')

Vue.component('mywebsite', require('./components/mywebsite.vue'));
Vue.component('hero', require('./components/hero.vue'));
Vue.component('about-me', require('./components/about-me.vue'));
Vue.component('v-menu', require('./components/v-menu.vue'));
Vue.component('instagram-gallery', require('./components/instagram-gallery.vue'));

import router from './router' // routes

new Vue({
    el: '#app',
    router
});
