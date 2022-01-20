import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Slide} from 'vue-burger-menu'

Vue.config.productionTip = false

new Vue({
  Slide,
  router,
  render: h => h(App),
}).$mount('#app')
