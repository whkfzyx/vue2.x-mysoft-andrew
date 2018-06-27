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
        <div class="overdue-badge"
             v-if="order.overTime"><img src="../assets/overdue.png"></div>
      </cell>
    </group>
    <load-more :tip="reachLastPage?'没有更多了':'正在加载'"
               :show-loading="false"></load-more>
  </div>
</template>

<script>
import { Group, Cell, LoadMore, dateFormat } from 'vux'
import fetch from '../utils/fetch'
import config from '../utils/config'

export default {
  name: 'AboutMe',
  data () {
    return {
      list: [],
      reachLastPage: false,
      currentPage: 1,
      pageSize: 20
    }
  },
  components: {
    Group,
    Cell,
    LoadMore
  },
  methods: {
    fetchPage () {
      if (!this.reachLastPage) {
        fetch({
          url: config.API_SERVER + 'getmyborrowlist?page=' + (this.currentPage || this.$route.query.page || 1) + '&pageSize=' + (this.pageSize) + '&token=' + this.$route.query.token
        }).then((result) => {
          this.list = this.list.concat(result.data.list)
          if (this.currentPage * this.pageSize <= parseInt(result.data.count)) {
            this.currentPage++
          } else {
            this.reachLastPage = true
          }
        }).catch(function (ex) {
          console.log(ex)
        })
      }
    },
    getGoodDtlPath (goodListItem) {
      return { path: '/order-detail', query: { orderId: goodListItem.orderId, token: this.$route.query.token } }
    },
    getDateString (item) {
      let str = ''
      if (item.overTime === 1) {
        str = '应还时间：' + dateFormat(new Date(parseInt(item.shouldReturnDate) * 1000), 'YYYY-MM-DD')
      } else if (item.overTime === 0 && item.returnDate !== 0) {
        str = '归还时间：' + dateFormat(new Date(parseInt(item.returnDate) * 1000), 'YYYY-MM-DD')
      } else if (item.overTime === 0 && item.returnDate === 0) {
        str = '归还时间：长期'
      } else {
        str = '领用时间: ' + dateFormat(new Date(parseInt(item.date) * 1000), 'YYYY-MM-DD')
      }

      return str
    },
    scrollLoad () {
      if (this.$scrollB()) {
        this.fetchPage()
      }
    }
  },
  mounted () {
    this.fetchPage()
    document.querySelector('#vux_view_box_body').removeEventListener('scroll', this.scrollLoad, false)
    document.querySelector('#vux_view_box_body').addEventListener('scroll', this.scrollLoad, false)
  },
  beforeDestroy () {
    document.querySelector('#vux_view_box_body').removeEventListener('scroll', this.scrollLoad, false)
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
