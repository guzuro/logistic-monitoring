<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
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
}
</script>

<style lang="scss">
</style>
