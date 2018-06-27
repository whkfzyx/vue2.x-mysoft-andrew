<!--订单详情-->
<template>
  <div class="order-detail">
    <!--top image-->
    <div class="top-img">
      <img v-if="orderInfo.img"
           :src="orderInfo.img"
           :alt="orderInfo.name">
    </div>

    <form-preview header-label="产品名称"
                  :header-value="orderInfo.name"
                  :body-items="list"></form-preview>
  </div>
</template>

<script>
import { FormPreview, dateFormat } from 'vux'
import fetch from '../utils/fetch'
import config from '../utils/config'

export default {
  name: 'orderDetail',
  components: { FormPreview },
  data () {
    return {
      list: [],
      orderInfo: {}
    }
  },
  methods: {
    loadDetail () {
      fetch({
        url: config.API_SERVER + 'getmyborrowdetail?token=' + this.$route.query.token + '&orderId=' + this.$route.query.orderId
      }).then((res) => {
        let d = res.data
        this.orderInfo = d

        if (d.shouldReturnDate === 0) {
          this.list.push({
            label: '当前状态',
            value: '已结束'
          })
        } else if (d.shouldReturnDate !== 0 && d.returnDate === 0) {
          this.list.push({
            label: '当前状态',
            value: d.shouldReturnDate > Number(new Date()) ? '借用中' : '已超期'
          })
        } else if (d.shouldReturnDate !== 0 && d.returnDate !== 0) {
          this.list.push({
            label: '当前状态',
            value: '借用中'
          })
        }
        this.list.push({
          label: '领取时间',
          value: dateFormat(new Date(d.date * 1000), 'YYYY-MM-DD HH:mm:ss')
        })
        this.list.push({
          label: '应还时间',
          value: d.shouldReturnDate ? dateFormat(new Date(d.shouldReturnDate * 1000), 'YYYY-MM-DD HH:mm:ss') : '长期'
        })
        this.list.push({
          label: '领取流水',
          value: d.orderId
        })
        this.list.push({
          label: '产品编号',
          value: d.assetSN
        })
        this.list.push({
          label: '隶属部门',
          value: d.department
        })
      }).catch((res) => {
        console.log(res)
      })
    }
  },
  created () {
    this.loadDetail()
  }
}
</script>

<style lang="less">
.order-detail {
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
}
</style>
