import Vue from 'vue'
import Vuetify from "vuetify";
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/app.styl';

Vue.use(VueRouter);

Vue.use(Vuetify);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
