<template>
  <div class="demo">
     <group gutter="0">
        <cell v-for="order in list"        
              :title="order.name"
              :inline-desc="getLyDateString(order.date)"
              :key="order.orderId"
              :link="getGoodDtlPath(order)"
              is-link>
           
          <label v-if="order.assetSN">产品编号:{{order.assetSN}}</label>  
          <!--<label>已还时间:{{order.returnDate}}</label>-->
          <br/>  
          <label v-if="order.returnDate">已还时间:{{getDateString(order.returnDate)}}</label>
          <label v-else-if="order.shouldReturnDate">应还时间:{{getDateString(order.shouldReturnDate)}}</label>
          
        </cell>
      </group>      
      <!--<load-more tip="正在加载"></load-more>-->
      
  </div>
</template>

<script>
import { Group, Cell, LoadMore, dateFormat } from 'vux'

export default {
  data () {
    return {
      list: [],
      test: '123'
    }
  },
  name: 'AboutMe',
  components: {
    Group,
    Cell,
    LoadMore,
    dateFormat
  },
  // 请求数据
  mounted: function () {
    var me = this
    this.$http.get('/getmyborrowlist').then(function (result) {
      me.list = result.data.list
    }).catch(function (ex) {
      console.log(ex)
    })
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
    },
    getDateString (iDate) {
      var myDate = new Date(iDate)
      var myYear = myDate.getFullYear()
      var myMonth = myDate.getMonth() + 1
      var myDay = myDate.getDate()
      var myMonthStr = myMonth < 10 ? ('0' + myMonth) : (myMonth + '')
      var myDayStr = myDay < 10 ? ('0' + myDay) : (myDay + '')
      var result = myYear + '-' + myMonthStr + '-' + myDayStr
      return result
    },
    getLyDateString (iDate) {
      var result = ''
      result = this.getDateString(iDate)
      result = '领用时间:' + result
      return result
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
.div-row {
  width:100%;
  float:left;
}
.div-left {
  width:50%;
  float:left;
}
.div-right {
  width:50%;
  float:right;
}
</style>
