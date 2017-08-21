import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import '@/base/css/font_386054_1xv8k5ba0ea02j4i/iconfont.css'
import '@/base/css/font_386481_g7zv91vlg08gp66r/iconfont.css'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: require('../components/Home/Home'),
      children: [
        {
          path: 'tuijian',
          component: require('../components/tuijian/tuijian')
        },
        {
          path: 'guanzhu',
          component: require('../components/guanzhu/guanzhu')
        }
      ]
    },
    {
      path: '/goodsForm',
      component: require('../components/goodsForm/goodsForm')
    },
    {
      path: '/shoppingCart',
      component: require('../components/shopping-cart/shoppingCart')
    },
    {
      path: '/personalHomepage',
      component: require('../components/personalHomepage/personalHomepage')
    }]
    // ,
    // {
    //   path: '*', redirect: '/Home/tuijian'
    // }
}
)
