<template>
  <div class="app-view">
    <view-box ref="viewBox"
              :body-padding-bottom="$route.meta.tab ? '54px' : '0' ">
      <router-view class="view"></router-view>

      <tabbar slot="bottom"
              v-if="$route.meta.tab">
        <tabbar-item :link="{path:'/',query: {token: this.$route.query.token}}"
                     :selected="$route.name === 'index'">
          <span class="icon iconfont icon-lingwuzhongxin icon-20 tab-color"
                slot="icon"></span>
          <span class="icon iconfont icon-lingwuzhongxin_ icon-20 tab-color"
                slot="icon-active"></span>
          <span class="tab-color"
                slot="label">物品列表</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/about-me',query: {token: this.$route.query.token,page:1,pageSize:20}}"
                     :selected="$route.name === 'about-me'">
          <span class="icon iconfont icon-wodelingwu icon-20 tab-color"
                slot="icon"></span>
          <span class="icon iconfont icon-wodelingwu_ icon-20 tab-color"
                slot="icon-active"></span>
          <span class="tab-color"
                slot="label">我的领取</span>
        </tabbar-item>
      </tabbar>
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
    background-color: #efeff4;
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
  }

  .icon-20 {
    font-size: 20px;
  }

  .weui-bar__item_on .tab-color {
    color: #4683C5;
  }

  .weui-btn.weui-btn_primary {
    background-color: #4382c7;
  }

  .weui-btn.weui-btn_disabled.weui-btn_primary {
    background-color: lighten(#4382c7, 20%);
  }

  .vux-number-selector svg {
    fill: #555 !important;
  }

  .weui-tabbar:before {
    border-top: 0 none !important;
  }
</style>
