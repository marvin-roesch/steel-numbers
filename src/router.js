import Vue from 'vue';
import Router from 'vue-router';
import NumberForm from '@/NumberForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:number?',
      name: 'number',
      component: NumberForm,
      props: true,
    },
  ],
});
