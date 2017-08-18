// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import VueLazyload from 'vue-lazyload'  // 图片懒加载
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(MuseUI)

Vue.use(VueLazyload)  // 图片懒加载
/* eslint-disable no-new */

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
