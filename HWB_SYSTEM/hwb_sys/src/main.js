import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this
  },
  router,
  store,
  vuetify: new Vuetify,
  render: h => h(App)
}).$mount('#app')