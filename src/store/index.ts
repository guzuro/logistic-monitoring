import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/user/state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultUsers: [
      {
        login: 'customer',
        password: 'customer',
        profile: {
          name: 'Jora',
          phone: '+79994524548',
          email: 'customer@email.ru',
          company: 'OOO "STROIM DOMA"',
          role: 'customer',
          orders: [],
        },
      },
      {
        login: 'manager',
        password: 'manager',
        profile: {
          name: 'Irina',
          phone: '+789456321321',
          email: 'manager@email.ru',
          role: 'manager',
        },
      },
      {
        login: 'warehouse',
        password: 'warehouse',
        profile: {
          name: 'Peters',
          phone: '+746546546456',
          email: 'warehouse@email.ru',
          role: 'warehouse',
        },
      },
    ],
    userState: {},
  },
  mutations: {},
  actions: {},
  modules: {
    userModule,
  },
});
