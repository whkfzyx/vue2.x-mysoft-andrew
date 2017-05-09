<template>
  <div class="login">
    <div class="login-flex">
      <div class="login-logo">
        <h1>LOGO</h1>
      </div>
  
      <div class="login-form">
        <div class="login-input vux-1px-b">
          <label for="user"
                 class="icon iconfont icon-account"></label>
          <input id="user"
                 v-model="user"
                 placeholder="用户名"></input>
        </div>
  
        <div class="login-input vux-1px-b">
          <label for="pass"
                 class="icon iconfont icon-security"></label>
          <input id="pass"
                 v-model="pass"
                 type="password"
                 placeholder="密码"></input>
        </div>
  
        <div class="login-submit">
          <button type="button"
                  @click="loginSubmit">登录</button>
        </div>
      </div>
  
      <div class="login-links">
        <a href=""
           class="vux-1px-r">注册账号</a>
        <a href="">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading, Toast } from 'vux'
const loginData = require('../mock/login.json')

export default {
  name: 'Login',
  components: {
    Loading,
    Toast
  },
  data () {
    return {
      msg: 'Hello World!',
      user: '',
      pass: '',
      LoginData: {}
    }
  },
  methods: {
    loginSubmit () {
      this.$vux.loading.show({
        text: '登录中...'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        if (this.user === this.LoginData.UserName && this.pass === this.LoginData.Password) {
          this.$vux.toast.show({
            text: '登录成功！'
          })
        } else {
          this.$vux.toast.show({
            text: '账号或密码错误！',
            type: 'cancel',
            width: '180px'
          })
        }
      }, 2000)
    },
    loadLogin () {
      this.$http.get(loginData)
        .then(function (res) {
          this.LoginData = res
        })
    },
    created () {
      this.loadLogin()
    }
  }
}
</script>

<style scoped>
.login {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.login-flex {
  width: 100%;
}

.login-logo {
  text-align: center;
  margin-bottom: 100px;
  font-size: 16px;
}

.login-form {
  padding: 0 50px;
}

.login-input {
  box-sizing: border-box;
  /*width: 275px;*/
  margin: 25px auto 0;
  padding: 5px 10px;
}

.login-input input {
  background-color: inherit;
  border: 0;
  font-size: 14px;
}

.login-input .icon {
  display: inline-block;
  min-width: 17px;
  font-size: 17px;
  margin-right: 18px;
  color: #B2B2B2;
}

.login-submit {
  margin-top: 30px;
  text-align: center;
}

.login-submit button {
  width: 100%;
  background-color: #000;
  color: #fff;
  line-height: 44px;
  font-size: 16px;
  border: 0;
  border-radius: 44px;
}

.login-links {
  text-align: center;
  margin-top: 20px;
  font-size: 0;
}

.login-links a {
  font-size: 12px;
  padding: 0 10px;
  color: #0076FF
}
</style>
