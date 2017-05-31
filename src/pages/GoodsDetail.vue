<!--物品详情-->
<template>
  <div class="goods-detail">
    <!--top image-->
    <div class="top-img">
      <img v-if="goodsInfo.img" :src="goodsInfo.img" :alt="goodsInfo.name">
    </div>

    <!--info 无需要归还物品信息-->
    <div class="info" v-if="goodsInfo.need_return===0">
      <group gutter="10px">
        <cell :title="'物品名称'" :value="goodsInfo.name"></cell>
        <cell :title="'最高领用频率'" :value="goodsInfo.frequency+'/人·月'"></cell>
        <cell :title="'本月已领'" :value="goodsInfo.alreadyHave"></cell>
        <x-number :title="'领用数量'" :value="0" :min="0" :max="parseInt(goodsInfo.stock)" v-model="form.num"></x-number>
        <cell :title="'库存剩余'" :value="goodsInfo.stock"></cell>
      </group>
    </div>

    <!--需归还物品信息-->
    <div class="info" v-else>
      <group gutter="10px">
        <cell :title="'物品名称'" :value="goodsInfo.name"></cell>
        <cell :title="'领用时长'" :value="(parseInt(goodsInfo.duration)/86400).toFixed(1)+' 天'"></cell>
        <x-input :title="'固定资产编号'" placeholder="（填写编号）" v-model="form.assetSn" class="input"></x-input>
        <cell :title="'库存剩余'" :value="goodsInfo.stock"></cell>
      </group>
      <div class="desc" v-if="goodsInfo.description">
        {{goodsInfo.description}}
      </div>
    </div>

    <!--button-->
    <div class="btns">
      <x-button type="primary" v-if="!goodsInfo.stock" disabled>无库存</x-button>
      <x-button type="primary" v-else-if="!goodsInfo.need_return&&form.num<=0" disabled>请输入领用数</x-button>
      <x-button type="primary" v-else @click.native="onSubmit">领取</x-button>
      <router-link :to="{path: '/', query: {token: this.$route.query.token}}" class="btn-cancel">
        <x-button>取消</x-button>
      </router-link>
    </div>

    <!--modal-->
    <x-dialog v-model="showModal" class="dialog">
      <div class="img-box">
        <img src="../assets/limit-tips.jpg" style="max-width:100%;height:auto;">
      </div>
      <div class="msg">
        <div>
          领取成功！
        </div>
        <div>
          你本月已经领取 <span class="num">{{alreadyHave}}</span> 个了～
        </div>
        <div>
          省着点用哦～
        </div>
      </div>

      <div class="get">
        <router-link
          :to="{path: '/success', query: {token: this.$route.query.token, orderId: orderId, need_return: this.goodsInfo.need_return}}">
          <div class="get-btn">我知道啦</div>
        </router-link>
      </div>
    </x-dialog>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle, XNumber, XButton, XDialog, dateFormat, XInput, Cell, Group } from 'vux'
  import fetch from '../utils/fetch'
  import config from '../utils/config'
  import router from '../router'

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
      XInput,
      Cell,
      Group
    },
    data () {
      return {
        goodsInfo: {
          goodsId: '',  // 物品ID
          type: '', // 物品类型
          name: '',  // 物品名称
          img: '', // 图片
          description: '', // 描述信息，可能为空
          frequency: 0, // 月领取上限
          alreadyHave: 0,   // 本月已领数量
          duration: 0, // 可借用时长，单位：秒。为0表示不限制时长
          stock: 0  // 库存
        },
        form: {num: 1, goodsId: '', assetSn: ''},
        showModal: false,
        alreadyHave: 0,
        orderId: ''
      }
    },
    created () {
      this.loadDetail()
    },
    methods: {
      onSubmit () {
        let patt = new RegExp('^[a-zA-Z]+[0-9]+$')
        if (this.form.assetSn && !patt.test(this.form.assetSn)) {
          this.$vux.alert.show({
            title: '验证',
            content: '固定资产编号必须字母开头，数字结尾'
          })
        } else {
          fetch({
            url: config.API_SERVER + 'submitborrow?&token=' + this.$route.query.token,
            method: 'POST',
            data: {...this.form, goodsId: this.$route.query.goodsId}
          }).then((resp) => {
            if ((resp.data.alreadyHave > parseInt(this.goodsInfo.frequency)) && this.goodsInfo.need_return === 0) {
              this.alreadyHave = resp.data.alreadyHave
              this.orderId = resp.data.orderId
              this.showModal = true
            } else {
              router.push({
                path: '/success',
                query: {
                  token: this.$route.query.token,
                  orderId: resp.data.orderId,
                  need_return: this.goodsInfo.need_return
                }
              })
            }
          }).catch((res) => {
            console.log(res)
          })
        }
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
      .desc {
        margin: 10px 15px;
        color: #999;
        font-size: 14px;
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
