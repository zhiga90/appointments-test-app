import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import 'normalize.css'
import '@/plugins/element.js' // Element UI framework
import VueMobileDetection from 'vue-mobile-detection'
import { DateTime } from 'luxon'

Vue.use(VueMobileDetection)
Vue.prototype.$date = DateTime

Vue.config.productionTip = false
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
