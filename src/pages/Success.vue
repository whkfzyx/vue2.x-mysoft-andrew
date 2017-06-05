<!--领/借用成功提示-->
<template>
  <div class="order-success">
    <div class="top-img">
      <img src="../assets/success.png" alt="">
    </div>

    <!--msg-->
    <div class="tips" v-if="this.$route.query.need_return==='1'">要记得按时归还哦～</div>

    <div class="btns">
      <router-link :to="{path:'/order-detail',query:{token:this.$route.query.token,orderId:this.$route.query.orderId}}">
        <x-button type="primary" action-type="button">查看详情</x-button>
      </router-link>
      <router-link :to="{path:'/', query:{token:this.$route.query.token}}" class="back">
        <x-button action-type="button">继续领物</x-button>
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
    height: 100%;
    background-color: #fff;
    text-align: center;
    .top-img {
      text-align: center;
      padding-top: 20px;
      padding-bottom: 20px;
      img {
        width: 50%;
        height: auto;
      }
    }
    .tips {
      font-size: 14px;
      color: #888;
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
