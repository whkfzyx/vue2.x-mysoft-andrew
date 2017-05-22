<!--领/借用成功提示-->
<template>
  <div class="order-success">
    <div class="top-img">
      <img src="../assets/success.png" alt="">
    </div>

    <!--msg-->
    <div class="title">领取成功</div>
    <div class="tips">要记得按时归还哦～</div>

    <div class="btns">
      <router-link to="/about-me">
        <x-button type="primary">确定</x-button>
      </router-link>
      <router-link to="/" class="back">
        <x-button>返回物品列表</x-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { XButton } from 'vux'

  export default {
    name: 'success',
    components: {
      XButton
    }
  }
</script>

<style lang="less" scoped>
  .order-success {
    text-align: center;
    .title {
      font-size: 30px;
      color: #000;
    }
    .tips {
      font-size: 20px;
      color: #555;
    }
    .btns {
      margin: 20px 20px 0 20px;
      .back {
        display: block;
        margin-top: 10px;
      }
    }
  }
</style>
