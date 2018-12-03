import Vue from 'vue'
import Router from 'vue-router'
const Msite = () => import('../pages/Msite/Msite.vue')
const ShadowMatic = () => import('../pages/ShadowMatic/ShadowMatic.vue')
const Category = () => import('../pages/Category/Category.vue')
const CartShop = () => import('../pages/CartShop/CartShop.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Interlayer = () => import('../pages/Interlayer/Interlayer.vue')
const Login = () => import('../pages/Login/Login.vue')


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
