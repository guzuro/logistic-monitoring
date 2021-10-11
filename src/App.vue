<template>
  <v-app id="inspire">
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Logistic app</v-toolbar-title>
    </v-app-bar>

    <v-main>
    <router-view/>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script lang="ts">

import Component from 'vue-class-component';
import Vue from 'vue';
import { VApp, VContainer, VMain } from 'vuetify/lib/components';

@Component({
  components: {
    VApp, VMain, VContainer,
  },
})
export default class App extends Vue {
  drawer = true

  items = [
    { title: 'Home', icon: 'mdi-home-city' },
    { title: 'My Account', icon: 'mdi-account' },
    { title: 'Users', icon: 'mdi-account-group-outline' },
  ]

  mini = true
}
</script>

<style lang="scss">
body, html {
  height: 100%
}
</style>
