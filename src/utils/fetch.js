import axios from 'axios'
import config from './config'

export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create()
    instance(options)
      .then(response => {
        const res = response.data
        if (!res.success) {
          // Token 过期了
          if (res.errcode === 4001) {
            // 重新登录页
            location.href = config.LOGIN_PAGE
          }
          reject(res)
        }
        resolve(res)
      })
      .catch(error => {
        console.error('发生异常错误,请刷新页面重试,或联系程序员')
        console.log(error) // for debug
        reject(error)
      })
  })
}
