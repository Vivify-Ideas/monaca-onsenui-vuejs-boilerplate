<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button></v-ons-back-button>
      </div>
      <div class="center">SIGN UP</div>
    </v-ons-toolbar>

      <form @submit="signup" autocomplete="false">
        <v-ons-list>
          <v-ons-list-item modifier="nodivider">
            <div class="center">
              <v-ons-input type="email" float placeholder="Email" v-model="user.email"></v-ons-input>
            </div>
          </v-ons-list-item>

          <v-ons-list-item modifier="nodivider">
            <div class="center">
              <v-ons-input float type="password" placeholder="Password" v-model="user.password"></v-ons-input>
            </div>
          </v-ons-list-item>

          <v-ons-list-item modifier="nodivider">
            <div class="center">
              <v-ons-input float type="password" placeholder="Confirm password" v-model="user.confirmPassword"></v-ons-input>
            </div>
          </v-ons-list-item>
          <v-ons-list-item modifier="nodivider">
            <v-ons-button @click="signup" :disabled="signupDisabled" modifier="large">Sign up</v-ons-icon></v-ons-button>
          </v-ons-list-item>
        </v-ons-list>
      </form>
  </v-ons-page>
</template>

<script type="text/javascript">
import dashboardPage from '@/pages/Dashboard';

export default {
  props: ['pageStack', 'auth'],

  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  computed: {
    signupDisabled() {
      return !this.user.email || !this.user.password || !this.user.confirmPassword;
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
          password: '',
          confirmPassword: ''
        };
      })

    }
  }
}
</script>
