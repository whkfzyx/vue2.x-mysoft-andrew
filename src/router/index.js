import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/pages/AboutMe'
import OrderDetail from '@/pages/OrderDetail'
import GoodsDetail from '@/pages/GoodsDetail'
import GoodsList from '@/pages/GoodsList'
import Success from '@/pages/Success'
import router from '../router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: GoodsList,
      meta: {
        tab: true,
        title: '物品领用'
      },
      beforeEnter: (to, from, next) => {
        if (to.query.token) {
          Vue.cookie.set('token', to.query.token)
          router.replace({path: '/'})
        }
        next()
      }
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      component: OrderDetail,
      meta: {
        title: '流水详情'
      }
    },
    {
      path: '/goods-detail',
      name: 'goods-detail',
      component: GoodsDetail,
      meta: {
        title: '物品详情'
      }
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
      meta: {
        title: '领取成功'
      }
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe,
      meta: {
        tab: true,
        title: '我的领取'
      }
    }
  ]
})
