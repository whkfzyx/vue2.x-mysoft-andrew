<!--物品详情-->
<template>
  <div class="goods-detail">
    <!--top image-->
    <div class="top-img">
      <img v-if="goodsInfo.img" :src="goodsInfo.img" :alt="goodsInfo.name">
    </div>

    <!--info 需要归还物品信息-->
    <div class="info" v-if="goodsInfo.need_return===0">
      <group-title>最高领用频率</group-title>
      <div class="info-item">
        <div class="main">{{goodsInfo.frequency}}/人·月</div>
        <div class="sub">（本周期内已领 <span class="num">{{goodsInfo.alreadyHave}}</span>）</div>
      </div>

      <group-title>领用数量</group-title>
      <div class="info-item">
        <x-number :title="''" :value="0" :min="0" :max="goodsInfo.stock" v-model="form.num"
                  @on-change="onNumChange"></x-number>
        <div class="sub form-height">（库存剩余 <span class="num">{{goodsInfo.stock}}</span>）</div>
      </div>
    </div>
    <!--无需归还物品信息-->
    <div class="info" v-else>
      <group-title>固定资产编号</group-title>
      <div class="info-item">
        <x-input title="" v-model="form.assetSn" class="input"></x-input>
      </div>

      <group-title>领用说明</group-title>
      <div class="info-item">
        <div class="sub">领用时长 <span class="num">{{goodsInfo.alreadyHave}}</span>，库存剩余 <span
          class="num">{{goodsInfo.stock}}</span>。
        </div>
      </div>
    </div>

    <!--button-->
    <div class="btns">
      <x-button type="primary" v-if="!goodsInfo.stock" disabled>无库存</x-button>
      <x-button type="primary" v-else-if="!goodsInfo.need_return&&form.num<=0" disabled>请输入领用数</x-button>
      <x-button type="primary" v-else>领取</x-button>
      <router-link to="/" class="btn-cancel">
        <x-button>取消</x-button>
      </router-link>
    </div>

    <!--modal-->
    <x-dialog v-model="showModal" class="dialog">
      <div class="img-box">
        <img src="https://oixyh3u6e.qnssl.com/livingearth/livingearth.png" style="max-width:100%">
      </div>
      <div class="msg">
        <div>
          领取成功！
        </div>
        <div>
          你本月已经领取 <span class="num">{{}}</span> 个了～
        </div>
        <div>
          省着点用哦～
        </div>
      </div>

      <div class="get" @click="showModal=false">
        <div class="get-btn">我知道啦</div>
      </div>
    </x-dialog>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle, XNumber, XButton, XDialog, dateFormat, XInput } from 'vux'
  import fetch from '../utils/fetch'
  import config from '../utils/config'

  export default {
    name: 'goodsDetail',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      XNumber,
      XButton,
      XDialog,
      dateFormat,
      XInput
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
        form: {num: 0, goodsId: '', assetSn: ''},
        showModal: true
      }
    },
    created () {
      this.loadDetail()
    },
    methods: {
      onNumChange: (value) => {
        console.log(value)
      },
      loadDetail () {
        fetch({
          url: config.API_SERVER + 'getgoodsdetail?goodsId=' + this.$route.query.goodsId + '&token=' + this.$route.query.token
        }).then((res) => {
          this.goodsInfo = res.data
        }).catch((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-detail {
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
          &.form-height {
            vertical-align: top;
            line-height: 48px;
          }
          &.input {
            border: 1px solid #ccc;
            border-radius: 6px;
            display: flex;
            width: 60%;
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
    .dialog {
      .msg {
        text-align: center;
        font-size: 18px;
        color: #555;
        .num {
          color: #1492d5;
        }
      }
      .get {
        margin: 15px auto;
        .get-btn {
          color: #fff;
          margin: 0 auto;
          display: inline-block;
          text-align: center;
          background-color: #4382c7;
          border-radius: 50px;
          padding: 3px 25px;
        }
      }
    }
  }
</style>
