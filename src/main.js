import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import Split from './components/Split/Split'
import CommonHeader from './components/CommonHeader/CommonHeader'
Vue.config.productionTip = false

Vue.component('Split',Split)
Vue.component('CommonHeader',CommonHeader)

  new Vue({
    el:'#app',
    render: h=>h(App),
    router,
    store
  })


