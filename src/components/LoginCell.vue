<template>
  <div class="login-cell">
    <group>
      <x-input label-width="5em"
               title="用户名"
               placeholder="请输入用户名"
               v-model="user"></x-input>
      <x-input label-width="5em"
               title="密码"
               placeholder="请输入密码"
               type="password"
               v-model="pass"></x-input>
    </group>
    <box gap="30px 20px 20px">
      <x-button class="btn-black"
                type="primary"
                action-type="button"
                @click.native="loginSubmit">登录</x-button>
    </box>
    <div class="login-links">
      <a href=""
         class="vux-1px-r">注册账号</a>
      <a href="">忘记密码</a>
    </div>
  </div>
</template>

<script>
import { Group, XButton, XInput, Box, Loading, Toast } from 'vux'
const loginData = require('../mock/login.json')

export default {
  name: 'LoginCell',
  components: {
    Group,
    XButton,
    XInput,
    Box,
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
.icon-left {
  margin-right: 5px;
}

.btn-black {
  background-color: #333;
}

.btn-black:active {
    color: #fff !important;
    background-color: #555 !important;
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
