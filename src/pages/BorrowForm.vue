<template>
  <div class="Borrow-Form">
    <img :src="GoodsDetail.img" class="img-demo"></img>
    
    <div class="content-div">
      <p class="title-p">产品编号</p>
      <div class="input-div">
        <input class="goods-input" v-model="GoodsDetail.assetSN"/>
        <span class="goods-span" v-if="GoodsDetail.duration>0">(领用时长 {{getDuration}}个月)</span>
      </div>
      <p class="title-p">领用说明</p>
      <span>{{ GoodsDetail.description }}</span>
    </div>
    
    <box gap="30px 20px 20px">
      <x-button class="btn-black"
                type="primary"
                action-type="button">领取</x-button>
     <x-button class="btn-black-cancle"
                type="primary"
                action-type="button">取消</x-button>
    </box>
  </div>
</template>

<script>
import { Group, XImg, Box, XInput, XButton, Cell } from 'vux'

export default {
  name: '',
  components: {
    Group,
    Cell,
    XImg,
    Box,
    XInput,
    XButton
  },
  data () {
    return {
      GoodsDetail: {},
      msg: 'test'
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
      return this.GoodsDetail.duration >= 0 ? this.GoodsDetail.duration / (60 * 60 * 24) : 0
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

.btn-black {
  background-color: blue;
}

.btn-black-cancle {
  background-color: #333;
}

.btn-black:active {
    color: #fff;
    background-color: #555;
}
</style>
