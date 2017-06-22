<!--我的领用记录列表-->
<template>
  <div class="my-borrow-list" ref="wrap">
    <ul class="list-group">
      <li class="order-item" v-for="order in list" :key="order.orderId"
          @click="getGoodDtlPath(order)">
        <div class="row1">
          <div class="title">{{order.name}}</div>
          <div class="sn" v-if="order.assetSn">资产编号：{{order.assetSn}}</div>
        </div>
        <div class="date">{{getDateString(order)}}</div>
        <div class="overdue-badge" v-if="order.overTime"><img src="../assets/overdue.png"></div>
        <i class="arrow"></i>
        <div class="mask" v-if="order.needReturn==0||order.returnDate!=0"></div>
      </li>
    </ul>

    <mugen-scroll :handler="fetchPage" :should-handle="!loadingPage" scroll-container="wrap">
      <div class="load-more-tips">{{reachLastPage ? '没有更多了' : '正在加载'}}</div>
    </mugen-scroll>
  </div>
</template>

<script>
  import fetch from '../utils/fetch'
  import config from '../utils/config'
  import moment from 'moment'
  import MugenScroll from 'vue-mugen-scroll'
  import router from '../router'

  export default {
    name: 'AboutMe',
    data () {
      return {
        list: [],
        reachLastPage: false,
        currentPage: 1,
        loadingPage: false
      }
    },
    components: {
      MugenScroll
    },
    methods: {
      fetchPage () {
        if (!this.reachLastPage) {
          this.loadingPage = true
          fetch({
            url: config.API_SERVER + 'getmyborrowlist?page=' + (this.currentPage || this.$route.query.page || 1) + '&pageSize=' + (this.$route.query.pageSize || 20)
          }).then((result) => {
            this.list = this.list.concat(result.data.list)
            this.loadingPage = false
            let maxPage = Math.floor((parseInt(result.data.count) + 20 - 1) / 20)
            if (this.currentPage < maxPage) {
              this.currentPage += 1
            } else {
              this.reachLastPage = true
            }
          }).catch(function (ex) {
            this.loadingPage = false
            console.log(ex)
          })
        }
      },
      getGoodDtlPath (goodListItem) {
        router.push({path: '/order-detail', query: {orderId: goodListItem.orderId, token: this.$route.query.token}})
      },
      getDateString (item) {
        let str = ''
        if (item.needReturn === 1 && item.returnDate === 0 && item.shouldReturnDate !== 0) {
          str = '应还时间：' + moment(parseInt(item.shouldReturnDate) * 1000).format('YYYY-MM-DD')
        } else if (item.needReturn === 1 && item.returnDate !== 0) {
          str = '归还时间：' + moment(parseInt(item.returnDate) * 1000).format('YYYY-MM-DD')
        } else if (item.needReturn === 1 && item.shouldReturnDate === 0) {
          str = '归还时间：长期'
        } else {
          str = '领用时间：' + moment(parseInt(item.date) * 1000).format('YYYY-MM-DD')
        }

        return str
      }
    }
  }
</script>

<style scoped lang="less">
  .my-borrow-list {
    height: 100%;
    overflow-y: scroll;
    ul.list-group {
      list-style: none;
      background-color: #efeff4;
      li.order-item {
        padding: 8px 14px;
        background-color: #fff;
        display: block;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .1);
        margin: 10px 10px 0 10px;
        .mask {
          z-index: 2;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, .6);
        }
        .row1 {
          &:after {
            display: block;
            clear: both;
            height: 0;
            visibility: hidden;
            content: '.';
          }
          .title, .sn {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            float: left;
            width: 50%;
          }
          .title {
            color: #000;
            font-size: 18px;
          }
          .sn {
            color: #888;
            font-size: 10px;
            line-height: 28px;
          }
        }
        .date {
          color: #888;
          font-size: 14px;
        }
        .overdue-badge {
          width: 80px;
          height: auto;
          position: absolute;
          top: 8px;
          right: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        i.arrow {
          z-index: 3;
          position: absolute;
          right: 8px;
          top: 26px;
          background-image: url(../assets/arrow.png);
          display: block;
          width: 16px;
          height: 16px;
        }
      }
    }
    .load-more-tips {
      text-align: center;
      margin: 20px;
      color: #999;
      font-size: 14px;
    }
  }
</style>
