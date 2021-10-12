<template>
  <v-container>
    <div class="login mt-5">
      <h1 class="text-center">
        Вход в систему
      </h1>
      <v-row class="mt-5" justify="center">
        <v-card class="pa-5" style="width:100%; max-width: 450px">
          <v-form
            v-model="valid"
          >
            <v-row>
              <v-col>
                <v-text-field
                  v-model="login"
                  :rules="loginFormRules"
                  label="Логин"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="password"
                  :rules="loginFormRules"
                  label="Пароль"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="text-end mt-2">
              <v-btn
                color="primary"
                tile
                :disabled="!valid"
                @click="submit"
                justify="center">
                Войти
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { VBtn, VCard, VContainer, VForm, VTextField } from 'vuetify/lib/components';

@Component({
  components: {
    VForm, VContainer, VTextField, VBtn, VCard,
  },
})
export default class Login extends Vue {
  login = '';

  loginFormRules = [(v: string): boolean | string => !!v || 'Обязательное поле'];

  password = '';

  valid = false;

  submit(): void {
    let validData = false;
    let foundUser = null;
    // TODO аутентификация
    this.$store.state.defaultUsers.forEach((df: any) => {
      if (this.login === df.login && this.password === df.password) {
        validData = true;
        foundUser = df;
      }
    });

    if (validData && foundUser !== null) {
      this.$store.dispatch('userModule/setUserToStore', foundUser);
      this.$store.dispatch('userModule/setAuthState', true);
      this.$router.push({ name: 'Dashboard', params: { role: (foundUser as any).profile.role } });
    } else {
      this.login = '';
      this.password = '';
      validData = false;
      foundUser = null;
      console.log('wrong input');
    }
  }
}
</script>

<style scoped>

</style>
