<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
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

@Component
export default class TheSidebar extends Vue {
  @VModel() drawer !:boolean

  items = [
    { title: 'Home', icon: 'mdi-home-city' },
    { title: 'My Account', icon: 'mdi-account' },
    { title: 'Users', icon: 'mdi-account-group-outline' },
  ]
}
</script>

<style scoped>

</style>
