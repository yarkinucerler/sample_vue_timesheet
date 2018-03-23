// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import * as moment from "moment"

import App from './App'
import './provider/filter'
import './assets/css/main.css'

Vue.use(VueResource)
Vue.config.productionTip = false

moment.locale(navigator.language.substring(0, 2))

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
