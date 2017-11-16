import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import 'onsenui';

// Onsen UI Styling and Icons
require('./styles/vivify-onsen-css-components.css');
require('onsenui/css/onsenui.css');

import axios from 'axios';
import env from 'env';

// Axios defaults
axios.defaults.baseURL = env.BASE_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

import App from './App';

Vue.config.productionTip = false

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App},
  beforeCreate() {
    this.$ons.platform.select('android');
  }
});
