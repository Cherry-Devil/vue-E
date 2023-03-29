// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// import axios from 'axios'; 
import axios from './utils/request.js'
import './assets/css/main.css'
import '@/assets/font/iconfont.js'
import '@/assets/font/iconfont.css'

Vue.prototype.$http = axios;

Vue.use(ElementUI)

Vue.config.productionTip = false
axios.defaults.baseURL = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
