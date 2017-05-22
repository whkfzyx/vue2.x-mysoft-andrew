import axios from 'axios'
import router from '../router'
import config from './config'

export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 2000
    })
    instance(options)
      .then(response => {
        const res = response.data
        if (res.code !== 20000) {
          console.log(options) // for debug
          // Token 过期了
          if (res.code === 50008) {
            this.$vux.alert.show({
              title: '',
              content: res.message,
              onShow () {
                console.log('Plugin: I\'m showing')
              },
              onHide () {
                console.log('Plugin: I\'m hiding now')
              }
            })
            setTimeout(() => {
              this.$vux.alert.hide()
            }, 3000)

            // 重新登录页
            router.push({path: config.LOGIN_PAGE})
          }
          reject(res)
        }
        resolve(res)
      })
      .catch(error => {
        this.$vux.alert.show({
          title: '',
          content: '发生异常错误,请刷新页面重试,或联系程序员',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })

        console.log(error) // for debug
        reject(error)
      })
  })
}
