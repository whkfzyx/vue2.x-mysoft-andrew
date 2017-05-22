<!--低值易耗详情-->
<template>
  <div class="low-value-detail">
    <!--top image-->
    <div class="top-img">
      <img v-if="goodsInfo.img" :src="goodsInfo.img" :alt="goodsInfo.name">
    </div>

    <!--info-->
    <div class="info">
      <group-title>最高领用频率</group-title>
      <div class="info-item">
        <div class="main">{{goodsInfo.frequency}}/人·月</div>
        <div class="sub">（本周期内已领 <span class="num">{{goodsInfo.alreadyHave}}</span>）</div>
      </div>

      <group-title>领用数量</group-title>
      <div class="info-item">
        <x-number :title="''" :value="0" :min="0" :max="goodsInfo.stock" v-model="form.num"
                  @on-change="onNumChange"></x-number>
        <div class="sub stock">（库存剩余 <span class="num">{{goodsInfo.stock}}</span>）</div>
      </div>
    </div>

    <!--button-->
    <div class="btns">
      <x-button type="primary" :disabled="form.num<=0">领取</x-button>
      <router-link to="/" class="btn-cancel">
        <x-button>取消</x-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle, XNumber, XButton } from 'vux'

  export default {
    name: 'lowValueDetail',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      XNumber,
      XButton
    },
    data () {
      return {
        goodsInfo: {
          goodsId: '21313',  // 物品ID
          type: 'lowValue', // 物品类型
          name: '中性笔',  // 物品名称
          img: 'https://oixyh3u6e.qnssl.com/livingearth/livingearth.png', // 图片
          description: '', // 描述信息，可能为空
          frequency: 4, // 月领取上限
          alreadyHave: 2,   // 本月已领数量
          duration: 0, // 可借用时长，单位：秒。为0表示不限制时长
          stock: 100  // 库存
        },
        form: {num: 0}
      }
    },
    methods: {
      onNumChange: (value) => {
        console.log(value)
      }
    }
  }
</script>

<style lang="less" scoped>
  .low-value-detail {
    .top-img {
      position: relative;
      width: 100%;
      padding-top: 74.66%;
      background-size: contain;
      background-image: url(../assets/default-bg-img.png);
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
    .info {
      .info-item {
        margin: 0 20px;
        > div {
          display: inline-block;
          &.main {
            font-size: 24px;
            font-weight: bold;
            color: #000;
          }
          &.sub {
            font-size: 18px;
            color: #555;
          }
          &.stock {
            vertical-align: top;
            line-height: 48px;
          }
          .num {
            color: #1492d5;
          }
        }
      }
    }
    .btns {
      margin: 10px 20px 0 20px;
      .btn-cancel {
        display: block;
        margin-top: 10px;
      }
    }
  }
</style>
