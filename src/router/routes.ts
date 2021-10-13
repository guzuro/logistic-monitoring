import { RouteConfig } from 'vue-router';
import Roles from '@/types/Roles';

const routes: Array<RouteConfig> = [
  {
    name: 'Main',
    path: '/',
    component: () => import('@/views/main.vue'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    name: 'Dashboard',
    path: '/dashboard/:role',
    component: () => import('@/views/dashboard.vue'),
    meta: { authRole: [Roles.Customer, Roles.Manager, Roles.Warehouse] },
  },
  {
    name: 'Orders',
    path: '/dashboard/:role/orders',
    component: () => import('@/views/orders.vue'),
    meta: { authRole: [Roles.Customer, Roles.Manager, Roles.Warehouse] },
  },
  {
    path: '*',
    component: () => import('@/views/Error404.vue'),
  }];

export default routes;
