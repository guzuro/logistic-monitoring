<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list v-if="!isAuth">
      <v-list-item
        link
        v-for="item in notAuth"
        :key="item.title"
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list v-if="createOrderRoles.includes(userRole)">
      <v-list-item
        link
        v-for="item in createOrderRoutes"
        :key="item.title"
        :to="item.to"
        exact
        >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script lang="ts">

import { Component, VModel } from 'vue-property-decorator';
import Vue from 'vue';
import Roles from '@/types/Roles';

@Component
export default class TheSidebar extends Vue {
  @VModel() drawer !: boolean;

  createOrderRoles = [Roles.Manager, Roles.Customer] as Array<string>;

  notAuth = [
    { title: 'Главная', icon: 'mdi-home-city', to: '/' },
    { title: 'Логин', icon: 'mdi-account', to: '/login' },
  ];

  createOrderRoutes = [
    {
      title: 'Панель управления',
      icon: 'mdi-account-group-outline',
      to: ({ name: 'Dashboard', params: { role: this.$store.state.userModule.userData.role } }),
    },
    {
      title: 'Создать заказ',
      icon: 'mdi-account-group-outline',
      to: ({ name: 'Orders', params: { role: this.$store.state.userModule.userData.role } }),
    },
  ];

  get isAuth(): boolean {
    return this.$store.getters['userModule/isAuthenticated'];
  }

  get userRole(): string {
    return this.$store.getters['userModule/getUserRole'];
  }
}
</script>

<style scoped>

</style>
