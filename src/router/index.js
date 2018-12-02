import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite'
import ShadowMatic from '../pages/ShadowMatic/ShadowMatic'
import Category from '../pages/Category/Category'
import CartShop from '../pages/CartShop/CartShop'
import Personal from '../pages/Personal/Personal'
import Interlayer from '../pages/Interlayer/Interlayer'
import Login from '../pages/Login/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component:  Msite,
      meta : {
        isShowFooter :true
      }
    },
    {
      path : '/shadowmatic',
      component: ShadowMatic,
      meta : {
        isShowFooter :true
      }
    },
    {
      path: '/category',
      component : Category,
      meta : {
        isShowFooter :true
      }
    },
    {
      path : '/cartshop',
      component : CartShop,
      meta : {
        isShowFooter :true
      }
    },
    {
      path : '/personal',
      component: Personal,
      meta : {
        isShowFooter :true
      }
    },
    {
      path : '/interlayer',
      component : Interlayer
    },
    {
      path : '/login',
      component : Login
    },
    {
      path : '/',
      redirect : '/interlayer'
    }
  ]

})
