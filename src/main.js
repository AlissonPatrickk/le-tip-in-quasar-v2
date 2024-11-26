import App from './App.vue'
import Vue from 'vue'
import Quasar from 'quasar'
import store from './store/index'
import router from './router/routes';
import 'quasar/dist/quasar.min.css'
import '../src/style/index.css'; 

Vue.config.productionTip = false
Vue.use(Quasar)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
