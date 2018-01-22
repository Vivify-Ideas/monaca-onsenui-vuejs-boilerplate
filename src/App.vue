<template>
  <v-ons-navigator :page-stack="pageStack">
    <component
      v-for="page in pageStack"
      :is="page"
      :page-stack="pageStack"
      :auth="auth"
      :authenticated="authenticated"
      @logout="logout"
      @push-page="pageStack.push($event)"
    ></component>
  </v-ons-navigator>
</template>

<style lang="sass">
  @import "./styles/app";
</style>

<script>
import guestPage from './pages/Guest';
import dashboardPage from './pages/Dashboard';
import AuthService from './auth/AuthService'

const auth = new AuthService()
const { authenticated } = auth

export default {
  data() {
    return {
      pageStack: authenticated ? [dashboardPage] : [guestPage],
      authenticated,
      auth
    }
  },

  methods: {
    logout() {
      this.auth.logout();
      if (this.pageStack.length === 1) {
        this.pageStack = [guestPage];
      } else {
        this.pageStack.pop();
      }
    }
  }
}
</script>
