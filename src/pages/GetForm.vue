<template>
  <div class="Get-Form">
    
    <card>
      <img slot="header" src="../mock/images/pic1.png" style="width:100%;display:block;">      
      <!--:src="GoodsDetail.img"-->
    </card>

    <card :header="{title:'领用最高频率'}" >
      <p slot="content" class="card-padding">
          <span class="maxLy"> {{GoodsDetail.frequency}}卷 / 人.月  </span>
          <span>(本月已领 <span class="yLy">{{GoodsDetail.alreadyHave}}卷</span>)</span>
      </p>
    </card>

    <card :header="{title:'领用数量'}">
      <p slot="content" class="card-padding">
          <group>
            <x-number title="" :value="1" :min="0" v-model="num" align="left" width="100px"></x-number>
          </group>
          <span class="stock">库存剩余 {{GoodsDetail.stock}} 卷  </span>
      </p>
      
    </card>
    <br />
    <div class="btnClass">
      <x-button type="primary" action-type="button" @click.native="doGet">领取</x-button>
      <x-button @click.native="doCancle">取消</x-button>
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
import { Group, Cell, Card, XNumber, XButton, XDialog } from 'vux'

export default {
  name: '',
  components: {
    Group,
    Cell,
    Card,
    XNumber,
    XButton,
    XDialog
  },
  data () {
    return {
      GoodsDetail: {},
      num: 0,
      showDialog: false,
      showMsg: ''
    }
  },
  methods: {
    doGet () {
      if (this.num === '0') {
        this.showMsg = '领用数量未填写'
        this.showDialog = true
        return
      }
      var _this = this
      this.$http.post('/submitborrow', {
        'goodsId': _this.GoodsDetail.goodsId,
        'num': _this.num,
        'assetSn': ''
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
  .Get-Form {
    width: 99%;
    height: 100%;
    background-color: #fff;
    padding-left: 1%;
  }
  .maxLy{
    font-size: 160%;
    padding-left: 14px
  }
  .yLy{
    color: blue
  }
  .btnClass{
    padding-left: 10px;
    padding-right: 10px
  }  
  .stock{
    font-size: 100%;
    padding-left: 10px
  }
</style>
