import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    name: 'Main Page',
    path: '/',
    component: () => import('@/views/main.vue'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/Error404.vue'),
  }];

export default routes;
