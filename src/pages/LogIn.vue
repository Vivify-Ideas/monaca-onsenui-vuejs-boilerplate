<template>
  <v-ons-page>
    <img src="https://placeimg.com/360/200/nature" style="width: 100%;">

    <form @submit="login" autocomplete="false">
      <v-ons-list>
        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="md-email" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input  placeholder="you@example.com" v-model="user.email"></v-ons-input>
          </div>
        </v-ons-list-item>

        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="md-shield-security" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input type="password" placeholder="your password" v-model="user.password"></v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-button @click="login" :disabled="loginDisabled" modifier="large">LOG IN <v-ons-icon icon="md-chevron-right"></v-ons-icon></v-ons-button>
        </v-ons-list-item>
      </v-ons-list>
    </form>
  </v-ons-page>
</template>

<script type="text/javascript">
import dashboardPage from './Dashboard';

export default {
  props: ['pageStack', 'auth'],

  data: function() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    loginDisabled() {
      return !this.user.email || !this.user.password;
    }
  },

  methods: {
    login() {
      if (this.loginDisabled) {
        return;
      }

      this.auth.login(this.user).then(() => {
        this.pageStack.push(dashboardPage);
        this.user = {
          email: '',
          password: ''
        };
      })

    }
  }
}
</script>
