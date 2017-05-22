<template>
  <div>
    <div class="borrow-list">
      <group gutter="0">
        <cell v-for="order in list"
              :title="order.name"
              :inline-desc="order.assetSN"
              :key="order.orderId"
              :link="getGoodDtlPath(order)"
              is-link>
          <div class="cell-icon"
              slot="icon"></div>

          <!--<div class="cell-icon"
              slot="icon"></div>--> 
          <!--<div class="div-row">      
            <div class="div-left">
              <label class="labelleft">{{order.name}}</label>
            </div>
            <div class="div-right">
              <label class="labelleft">产品编号:{{order.assetSN}}</label>
            </div>
          </div>
          <br/>
          <div class="div-row">      
            <div class="div-left">
              <label class="labelleft">领取时间:{{order.date}}</label>
            </div>
            <div class="div-right">
              <label class="labelleft">已还时间:{{order.returnDate}}</label>
            </div>
          </div>  
          <br/>
          <div class="div-row">      
            <div class="div-left">
              <label class="labelleft">应还时间:{{order.shouldReturnDate}}</label>
            </div>
            <div class="div-right">
            </div>
          </div>          -->

        </cell>
      </group>
      <load-more tip="正在加载"></load-more>
      
    </div>
  </div>
</template>

<script>
import { Group, Cell, LoadMore } from 'vux'

export default {
  name: 'BorrowList',
  data () {
    return {
      list: []
    }
  },
  // 请求数据
  mounted: function () {
    var me = this
    this.$http.get('/getMyBorrowList').then(function (result) {
      me.typeList = result.data.typelist
    }).catch(function (ex) {
      console.log(ex)
    })
  },
  components: {
    Group,
    Cell,
    LoadMore
  },
  methods: {
    onItemClick (goodListItem) {
      this.$router.push({ path: '/goods-detail', query: { goodsId: '' } })
    },
    getImgPath (path) {
      return '../mock' + path
    },
    getGoodDtlPath (goodListItem) {
      return { path: '/goods-detail', query: { goodsId: goodListItem.goodsId } }
    }
  }
}
</script>

<style scoped lange="less">
.cell-icon {
  height: 64px;
  width: 64px;
  margin-right: 13px;
  background-color: #eee;
}
</style>
