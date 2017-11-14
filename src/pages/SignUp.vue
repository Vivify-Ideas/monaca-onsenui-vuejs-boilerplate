<template>
  <v-ons-page>
    <img src="https://placeimg.com/360/200/nature" style="width: 100%;">

    <form @submit="signup" autocomplete="false">
      <v-ons-list>
        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="md-account" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input  placeholder="first name" v-model="user.firstName"></v-ons-input>
          </div>
        </v-ons-list-item>

        <v-ons-list-item>
          <div class="left">
            <v-ons-icon icon="md-account" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input  placeholder="last name" v-model="user.lastName"></v-ons-input>
          </div>
        </v-ons-list-item>

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
          <div class="left">
            <v-ons-icon icon="md-shield-security" class="list-item__icon"></v-ons-icon>
          </div>
          <div class="center">
            <v-ons-input type="password" placeholder="confirm password" v-model="user.confirmPassword"></v-ons-input>
          </div>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-button @click="signup" :disabled="signupDisabled" modifier="large">SIGN UP <v-ons-icon icon="md-chevron-right"></v-ons-icon></v-ons-button>
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
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
      }
    }
  },

  computed: {
    signupDisabled() {
      return !this.user.email || !this.user.password || !this.user.confirmPassword ||
        !this.user.firstName || !this.user.lastName;
    }
  },

  methods: {
    signup() {
      if (this.signupDisabled) {
        return;
      }

      if (this.user.password !== this.user.confirmPassword) {
        return
      }

      this.auth.signup(this.user).then(() => {
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
