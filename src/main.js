import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
window.axios = axios

import '@/assets/css/style.css';

Vue.filter('moneyFormat', function (num) {
    return num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
