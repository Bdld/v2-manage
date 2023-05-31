import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router'
import service from './service'

Vue.config.productionTip = false
//挂载到原型，就可以在全局使用了
Vue.prototype.service = service

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
