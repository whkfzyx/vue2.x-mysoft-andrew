import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/pages/AboutMe'
import OrderDetail from '@/pages/OrderDetail'
import GoodsDetail from '@/pages/GoodsDetail'
import GoodsList from '@/pages/GoodsList'
import Success from '@/pages/Success'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: GoodsList,
      meta: {
        tab: true
      }
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      component: OrderDetail
    },
    {
      path: '/goods-detail',
      name: 'goods-detail',
      component: GoodsDetail
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe,
      meta: {
        tab: true
      }
    }
  ]
})
