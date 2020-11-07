// @ts-ignore
__webpack_public_path__ = (window as any).assetUrl || '';

import './core/event_bus'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});