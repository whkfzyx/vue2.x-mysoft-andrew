<!--领/借用成功提示-->
<template>
  <div class="order-success">
    <div class="top-img">
      <img src="../assets/success.png" alt="">
    </div>

    <!--msg-->
    <div class="tips" v-if="this.$route.query.need_return">要记得按时归还哦～</div>

    <div class="btns">
      <router-link :to="{path:'/order-detail',query:{token:this.$route.query.token,orderId:this.$route.query.orderId}}">
        <x-button type="primary" action-type="button">确定</x-button>
      </router-link>
      <router-link :to="{path:'/', query:{token:this.$route.query.token}}" class="back">
        <x-button action-type="button">返回物品列表</x-button>
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
