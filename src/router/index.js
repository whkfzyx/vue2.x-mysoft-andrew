import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '@/components/AboutMe'
import Login from '@/components/Login'
import List from '@/components/UIList'
import Tabbar from '@/components/Tabbar'
import LoginCell from '@/components/LoginCell'
import CellList from '@/components/CellList'
import CheckboxList from '@/components/CheckboxList'
import CellBtn from '@/components/CellBtn'
import FormDetail from '@/components/FormDetail'
import FormDetailCell from '@/components/FormDetailCell'
import FormGroup from '@/components/FormGroup'
import FormSingle from '@/components/FormSingle'
import Search from '@/components/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: List,
      beforeEnter: (to, from, next) => {
        document.title = '组件列表'
        next()
      }
    },
    {
      path: '/demos/login-cell',
      component: LoginCell,
      beforeEnter: (to, from, next) => {
        document.title = '微信登录组件'
        next()
      }
    },
    {
      path: '/demos/login-app',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        document.title = 'APP登录组件'
        next()
      }
    },
    {
      path: '/demos/cell-list',
      component: CellList,
      beforeEnter: (to, from, next) => {
        document.title = '图文列表'
        next()
      }
    },
    {
      path: '/demos/checkbox-list',
      component: CheckboxList,
      beforeEnter: (to, from, next) => {
        document.title = '图文列表带复选'
        next()
      }
    },
    {
      path: '/demos/cell-btn',
      component: CellBtn,
      beforeEnter: (to, from, next) => {
        document.title = '纯文字带按钮列表'
        next()
      }
    },
    {
      path: '/demos/form-detail',
      component: FormDetail,
      beforeEnter: (to, from, next) => {
        document.title = '表单详情-带选项卡'
        next()
      }
    },
    {
      path: '/demos/form-detail-cell',
      component: FormDetailCell,
      beforeEnter: (to, from, next) => {
        document.title = '表单详情-不带选项卡'
        next()
      }
    },
    {
      path: '/demos/form-group',
      component: FormGroup,
      beforeEnter: (to, from, next) => {
        document.title = '分组表单输入'
        next()
      }
    },
    {
      path: '/demos/form-single',
      component: FormSingle,
      beforeEnter: (to, from, next) => {
        document.title = '未分组表单输入'
        next()
      }
    },
    {
      path: '/demos/about-me',
      name: 'about-me',
      component: AboutMe,
      beforeEnter: (to, from, next) => {
        document.title = '个人中心'
        next()
      }
    },
    {
      path: '/demos/tabbar',
      name: 'tabbar',
      component: Tabbar,
      beforeEnter: (to, from, next) => {
        document.title = '菜单导航'
        next()
      }
    },
    {
      path: '/demos/search',
      component: Search,
      beforeEnter: (to, from, next) => {
        document.title = '搜索栏'
        next()
      }
    }
  ]
})
