import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/pages/AboutMe'
import BorrowForm from '@/pages/BorrowForm'
import GetForm from '@/pages/GetForm'
import GoodsDetail from '@/pages/GoodsDetail'
import GoodsList from '@/pages/GoodsList'
import Success from '@/pages/Success'

Vue.use(Router)

export default new Router({
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
      path: '/borrow-form',
      name: 'borrow-form',
      component: BorrowForm
    },
    {
      path: '/get-form',
      name: 'get-form',
      component: GetForm
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
