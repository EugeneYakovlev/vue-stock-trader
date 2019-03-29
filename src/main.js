import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import {routes} from './routes.js';
import store from './store/store.js';

import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/app.styl';

Vue.use(VueRouter);

Vue.use(Vuetify);

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
