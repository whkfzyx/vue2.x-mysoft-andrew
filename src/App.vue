<template>
  <div class="app-view">
    <view-box ref="viewBox"
                :body-padding-bottom="$route.name === 'tabbar' ? '54px' : '0' ">
    <router-view class="view"></router-view>
    <!--<tabbar slot="bottom">
          <tabbar-item :link="{path:'/demos/login-app'}"
                       :selected="$route.name === 'login'">
            <span class="icon iconfont icon-smile icon-20"
                  slot="icon"></span>
            <span slot="label">登录</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/'}"
                       :selected="$route.name === 'demos'">
            <span class="icon iconfont icon-viewlist icon-20"
                  slot="icon"></span>
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :link="{path:'/demos/about-me'}"
                       :selected="$route.name === 'about-me'">
            <span class="icon iconfont icon-bussinessman icon-20"
                  slot="icon"></span>
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>-->
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    ViewBox,
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import './assets/less/iconfont.less';

body {
  background-color: #fbf9fe;
  user-select: none;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.app-view {
  height: 100%;
  // overflow: auto;
  // -webkit-overflow-scrolling: touch;
}

.icon-20 {
  font-size: 20px;
}

// 顶部导航栏文字颜色
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #333 !important;
}

// 搜索框取消按钮
.weui-search-bar__cancel-btn {
  color: #333 !important;
}

// 底部弹窗按钮颜色
.dp-header .dp-item.dp-left,
.dp-header .dp-item.dp-right,
.vux-popup-picker-header {
  color: #0076FF !important;
}
</style>
