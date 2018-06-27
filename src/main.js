import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

Vue.use(VueRouter)

import { LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin } from 'vux'
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LocalePlugin)

FastClick.attach(document.body)

Vue.prototype.$scrollB = () => {
  const winH = window.innerHeight
  const scrollTop = document.querySelector('#vux_view_box_body').scrollTop
  const listH = document.querySelector('#vux_view_box_body').firstChild.offsetHeight
  console.log(winH + ',' + scrollTop)
  console.log(listH)
  return winH + scrollTop >= listH
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
