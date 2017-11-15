<template>
<v-ons-page>
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable
      width="200px"
      collapse=""
      side="left"
      :open.sync="openSide"
    >
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item
            v-for="page in pages"
            tappable
            modifier="chevron"
            @click="openPage(page)"
          >
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
          <v-ons-list-item tappable @click="logout">
            <div class="left"><v-ons-icon icon="fa-sign-out"></v-ons-icon></div>
            <div class="center">Log Out</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component :is="currentPage" :auth="auth" @open-page="openPage" :toggle-menu="toggleMenu"></component>
    </v-ons-splitter-content>
  </v-ons-splitter>
</v-ons-page>
</template>

<script type="text/javascript">
import homePage from './dashboard/Home';
import aboutPage from './dashboard/About';

export default {
  props: ['pageStack', 'auth'],

  data() {
    return {
      currentPage: 'Home',
      pages: ['Home'],
      openSide: false
    };
  },

  components: {
    Home: homePage,
    About: aboutPage
  },

  methods: {
    toggleMenu() {
      this.openSide = !this.openSide;
    },
    openPage(page) {
      this.currentPage = page;
      this.openSide = false;
    },
    logout() {
      this.$emit('logout');
    }
  }
}
</script>
