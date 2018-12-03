import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import Split from './components/Split/Split'
import CommonHeader from './components/CommonHeader/CommonHeader'
import VueLazyload from 'vue-lazyload'
import { Switch } from 'mint-ui';
Vue.config.productionTip = false

Vue.component('Split',Split)
Vue.component('CommonHeader',CommonHeader)
Vue.component(Switch.name, Switch);

import loading from './common/img/loading.gif'
Vue.use(VueLazyload, {
  loading
})


  new Vue({
    el:'#app',
    render: h=>h(App),
    router,
    store
  })


