import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index"

// plugins
import AtUI from "at-ui"
import VueGtm from 'vue-gtm'

import "at-ui-style/css/at.css"
import "./assets/css/main.scss"

// widget setup
// (optional) 'Custom elements polyfill'
import "document-register-element/build/document-register-element"
// vue-custom-element by karol-f
import vueCustomElement from "vue-custom-element"
Vue.use(vueCustomElement)

Vue.use(AtUI)
Vue.config.productionTip = false

// new Vue is not needed anymore, as you're initializing the app through vue-custom-element
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

Vue.use(VueGtm, {
  id: 'GTM-N5SWMJW', // Your GTM ID
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  vueRouter: router // Pass the router instance to automatically sync with router (optional)

})
const VueAnalytics = require('vue-analytics').default
Vue.use(VueAnalytics, {
  id: 'UA-141115741-1',
  router
  // customResourceURL: 'https://ptopads.com/vuidget/js/customga.js'
})

// use vue-custom-element
App.store = store
App.router = router
Vue.customElement('vue-widget', App)
