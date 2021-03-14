import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCompositionAPI from '@vue/composition-api'


import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
