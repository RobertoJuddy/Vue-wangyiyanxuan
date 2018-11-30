import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite'
import ShadowMatic from '../pages/ShadowMatic/ShadowMatic'
import Category from '../pages/Category/Category'
import CartShop from '../pages/CartShop/CartShop'
import Personal from '../pages/Personal/Personal'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component:  Msite
    },
    {
      path : '/shadowmatic',
      component: ShadowMatic
    },
    {
      path: '/category',
      component : Category
    },
    {
      path : '/cartshop',
      component : CartShop
    },
    {
      path : '/personal',
      component: Personal
    },
    {
      path : '/',
      redirect : '/msite'
    }
  ]
})
