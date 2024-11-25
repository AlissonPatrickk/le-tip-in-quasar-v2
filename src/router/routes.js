import Vue from 'vue';
import Router from 'vue-router';
import EnteredPage from '../pages/EnteredPage.vue';
import ResultPage from '../pages/ResultPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entrada',
      component: EnteredPage,
    },
    {
      path: '/resultado',
      name: 'resultado',
      component: ResultPage,
    },
  ],
});
