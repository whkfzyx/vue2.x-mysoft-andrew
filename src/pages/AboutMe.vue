<!--我的领用记录列表-->
<template>
  <div class="my-borrow-list">
    <group gutter="0">
      <cell v-for="order in list"
            :title="order.name"
            :inline-desc="getDateString(order)"
            :key="order.orderId"
            :link="getGoodDtlPath(order)"
            class="order-item"
            is-link>
        <div class="overdue-badge" v-if="order.overTime"><img src="../assets/overdue.png"></div>
      </cell>
    </group>

    <load-more :tip="'正在加载'" :show-loading="false"></load-more>
  </div>
</template>

<script>
  import { Group, Cell, LoadMore } from 'vux'
  import fetch from '../utils/fetch'
  import config from '../utils/config'
  import moment from 'moment'

  export default {
    name: 'AboutMe',
    data () {
      return {
        list: []
      }
    },
    components: {
      Group,
      Cell,
      LoadMore
    },
    // 请求数据
    created: function () {
      let me = this
      fetch({
        url: config.API_SERVER + 'getmyborrowlist?page=' + this.$route.query.page + '&pageSize=' + this.$route.query.pageSize + '&token=' + this.$route.query.token
      }).then(function (result) {
        me.list = result.data.list
      }).catch(function (ex) {
        console.log(ex)
      })
    },
    methods: {
      getGoodDtlPath (goodListItem) {
        return {path: '/order-detail', query: {orderId: goodListItem.orderId, token: this.$route.query.token}}
      },
      getDateString (item) {
        let str = ''
        if (item.overTime === 1 && item.returnDate === '0') {
          str = '应还时间：' + moment(parseInt(item.shouldReturnDate) * 1000).format('YYYY-MM-DD')
        } else if (item.overTime === 0 && item.returnDate !== '0') {
          str = '归还时间：' + moment(parseInt(item.returnDate) * 1000).format('YYYY-MM-DD')
        } else {
          str = '领用时间: ' + moment(parseInt(item.date) * 1000).format('YYYY-MM-DD')
        }

        return str
      }
    }
  }
</script>
<style scoped lang="less">
  .my-borrow-list {
    .order-item {
      position: relative;
      overflow: hidden;
      .overdue-badge {
        width: 80px;
        height: auto;
        position: absolute;
        bottom: -55px;
        right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .cell-icon {
    height: 64px;
    width: 64px;
    margin-right: 13px;
    background-color: #eee;
  }

  .div-row {
    width: 100%;
    float: left;
  }

  .div-left {
    width: 50%;
    float: left;
  }

  .div-right {
    width: 50%;
    float: right;
  }
</style>
