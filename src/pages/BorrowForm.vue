<template>
  <div class="Borrow-Form">
    <img :src="GoodsDetail.img" class="img-demo"></img>
    
    <div class="content-div">
      <p class="title-p">产品编号</p>
      <div class="input-div">
        <input class="goods-input" v-model="assetSN"/>
        <span class="goods-span" v-if="GoodsDetail.duration>0">(领用时长 </span>
        <span class="goods-span font-blue">{{getDuration}}个月)</span>
      </div>
      <p class="title-p">领用说明</p>
      <span>{{ GoodsDetail.description }}</span>
    </div>
    

    <!--<box gap="30px 20px 20px"> -->
    <div class="div-button">
      <x-button class="btn-black"
                  type="default"
                  action-type="button"
                  @click.native="doBorrow">领取</x-button>
      <x-button class="btn-black-cancle"
                  type="default"
                  action-type="button"
                  @click.native="doCancle">取消</x-button>
    <!--</box>-->
    </div>
    <div>
      <x-dialog v-model="showDialog" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': '#F8F8F8'}">
        <p style="text-align:center;" @click="showDialog = false">
          <span style='font-size:30px;'>{{showMsg}}</span>
          <br>
          <br>
          <x-icon type="ios-close-outline" style=""></x-icon>
        </p>
      </x-dialog>
    </div>
  </div>
</template>

<script>

import { Group, XImg, Box, XInput, XButton, Cell, XDialog } from 'vux'

export default {
  name: '',
  components: {
    Group,
    Cell,
    XImg,
    Box,
    XInput,
    XButton,
    XDialog
  },
  data () {
    return {
      GoodsDetail: {},
      assetSN: '',
      showDialog: false,
      showMsg: ''
    }
  },
  methods: {
    doBorrow () {
      if (!this.assetSN) {
        this.showMsg = '产品编号未填写'
        this.showDialog = true
        return
      }
      var _this = this
      this.$http.post('/submitborrow', {
        'goodsId': _this.GoodsDetail.goodsId,
        'num': 1,
        'assetSn': _this.assetSN
      })
      .then((res) => {
        this.$router.push({ path: '/success', query: { orderId: res.data.orderId } })
      })
      .catch((res) => {
        console.log(res)
        this.showMsg = res.message
        this.showDialog = true
      })
    },
    doCancle () {
      this.$router.go(-1)
    }
  },
  mounted: function () {
    var _this = this // 必须先缓存起来
    this.$http.get('/getgoodsdetail', {
      params: {
        'goodsId': this.$route.query.goodsId
      }
    })
    .then((res) => {
      _this.GoodsDetail = res.data
      document.title = _this.GoodsDetail.name
    })
    .catch((res) => {
      console.log(res)
    })
  },
  computed: {
    getDuration () {
      return this.GoodsDetail.duration >= 0 ? (this.GoodsDetail.duration / (60 * 60 * 24 * 30)).toFixed(0) : 0
    }
  }
}
</script>


<style scoped>
.Borrow-Form {
  width: 99%;
  height: 100%;
  background-color: #fff;
  padding-left: 1%;
}
.content-div {
  height: 20%;
}
.input-div{
  padding-bottom: 6px;
}
.goods-input{
  height: 30px;
  width: 50%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #EEEEEE;
  padding-left: 5px;
}
.goods-span{
  vertical-align: bottom;
  font-size: 10px;
}
.title-p{
  font-size: 12px;
  padding-bottom: 6px;
}
.img-demo {
  width: 100%;
  height: 50%;
}
.div-button {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 15px;
}
.btn-black {
  color: #ffffff;
  background-color: #4382c7;
}

.btn-black-cancle {
  color: #000;
  background-color: #F8F8F8;
}

.btn-black:active {
    background-color: #F8F8F8;
}
.font-blue {
  color: #4382C7;
}
</style>
