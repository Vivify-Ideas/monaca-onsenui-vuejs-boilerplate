<template>
  <v-ons-page>
    <section style="margin: 5px;">
      <v-ons-button @click="signup()" style="margin-bottom: 5px;" modifier="large">Sign Up</v-ons-button>
      <v-ons-button @click="login()" modifier="large">Log In</v-ons-button>
    </section>
  </v-ons-page>
</template>

<script type="text/javascript">
import logInPage from './LogIn';
import signUpPage from './SignUp';

export default {
  props: ['pageStack', 'auth'],

  methods: {
    login() {
      this.$emit('push-page', logInPage);
    },

    signup() {
      this.$emit('push-page', signUpPage);
    }
  }
}
</script>
