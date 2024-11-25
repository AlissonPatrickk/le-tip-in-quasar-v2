import Vue from 'vue'
import Quasar from 'quasar'
import 'quasar/dist/quasar.min.css'
import App from './App.vue'
import store from './store/index'
import router from './router/routes';

Vue.config.productionTip = false
Vue.use(Quasar)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
