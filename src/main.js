import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'jquery'
import 'popper.js'
import './assets/app.scss'
import jQuery from 'jquery';
import VueFirestore from 'vue-firestore'


Vue.use(VueFirestore) 


window.$ = window.jQuery = jQuery;

// Swal 
import Swal from 'sweetalert2';

window.Swal = Swal;
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    })

window.Toast = Toast;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
