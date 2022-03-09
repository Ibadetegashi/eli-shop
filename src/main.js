import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'jquery'
import 'popper.js'
import './assets/app.scss'
import jQuery from 'jquery';


window.$ = window.jQuery = jQuery;




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
