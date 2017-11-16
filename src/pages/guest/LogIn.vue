<template>
  <v-ons-page>
    <v-ons-card>
      <form @submit="login" autocomplete="false">
        <v-ons-list>
          <v-ons-list-item modifier="nodivider">
            <div class="center">
              <v-ons-input type="email" placeholder="Email" float v-model="user.email"></v-ons-input>
            </div>
          </v-ons-list-item>

          <v-ons-list-item modifier="nodivider">
            <div class="center">
              <v-ons-input type="password" placeholder="Password" float v-model="user.password"></v-ons-input>
            </div>
          </v-ons-list-item>
          <v-ons-list-item modifier="nodivider">
            <v-ons-button @click="login" :disabled="loginDisabled" modifier="large">LOG IN <v-ons-icon icon="md-chevron-right"></v-ons-icon></v-ons-button>
          </v-ons-list-item>
        </v-ons-list>
      </form>
    </v-ons-card>
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
      }).catch((error) => {
        this.$ons.notification.alert(error.response.data.error.message);
      })

    }
  }
}
</script>
