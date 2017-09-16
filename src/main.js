// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'


// vuex
import store from './vuex/Store'

Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

