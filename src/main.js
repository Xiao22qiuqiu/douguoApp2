// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import VueLazyload from 'vue-lazyload'  // 图片懒加载

import '@/base/css/font_386054_1xv8k5ba0ea02j4i/iconfont.css'
import '@/base/css/font_386481_g7zv91vlg08gp66r/iconfont.css'

Vue.config.productionTip = false

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
