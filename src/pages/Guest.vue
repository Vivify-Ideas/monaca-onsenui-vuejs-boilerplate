<template>
  <v-ons-page>
    <v-ons-tabbar
      swipeable position="auto"
      :tabs="tabs"
      :visible="true"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script type="text/javascript">
import logInPage from './guest/LogIn';
import signUpPage from './guest/SignUp';

export default {
  props: ['pageStack', 'auth'],

  data: function() {
    return {
      tabs: [
        {
          label: 'Log In',
          page: logInPage,
          props: {
            pageStack: this.pageStack,
            auth: this.auth
          }
        },
        {
          label: 'Sign up',
          page: signUpPage,
          props: {
            pageStack: this.pageStack,
            auth: this.auth
          }
        },
      ]
    }
  }
}
</script>
