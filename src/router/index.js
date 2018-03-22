import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../components/Layout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
    }
  ]
});
