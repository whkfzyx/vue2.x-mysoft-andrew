<template>
  <div class="tabbar">
    <tabbar>
      <tabbar-item>
        <span class="icon iconfont icon-smile icon-20"
              slot="icon"></span>
        <span slot="label">登录</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/'}">
        <span class="icon iconfont icon-viewlist icon-20"
              slot="icon"></span>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <span class="icon iconfont icon-bussinessman icon-20"
              slot="icon"></span>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'Tanbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
.icon-20 {
  font-size: 20px;
}
</style>
