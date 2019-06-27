import Vue from 'vue';
import Router from 'vue-router';
import Number from '@/Number.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:number',
      name: 'number',
      component: Number,
      props: true,
    },
  ],
});
