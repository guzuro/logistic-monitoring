<template>
  <v-app app>
    <the-sidebar v-model="drawer"/>
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
import TheSidebar from '@/components/TheSidebar.vue';

@Component({
  components: {
    VApp, VMain, VContainer, TheSidebar,
  },
})
export default class App extends Vue {
  drawer = false
}
</script>

<style lang="scss">
body, html {
  height: 100%
}
</style>
