import '@babel/polyfill'
import Vue from 'vue'

import './plugins/vuetify';
import './plugins/router';

import App from './App.vue';
import router from './plugins/router.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
