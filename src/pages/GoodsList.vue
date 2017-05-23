<!--物品列表-->
<template>
  <div class="good-list">
    <div v-for="typeListItem in typeList" :key="typeListItem.typeId" class="grid-list">
      <group-title class="title">{{typeListItem.value}}</group-title>
      <grid :rows="4">
        <grid-item v-for="goodListItem in typeListItem.list" :key="goodListItem.goodsId"
                   :link="getGoodDtlPath(goodListItem)" class="grid-item">
          <div class="custom-img">
            <img :src="goodListItem.img">
          </div>
          <div class="custom-label">{{goodListItem.name}}</div>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle } from 'vux'
  import fetch from '../utils/fetch'
  import config from '../utils/config'

  export default {
    data () {
      return {
        typeList: [],
        test: '123'
      }
    },
    // 请求数据
    mounted: function () {
      let me = this
      fetch({
        url: config.API_SERVER + 'getgoodslist?token=831d0iP_myy_QsLmEAt8baiAWjhex4LyYi_myy_LkjZrRxQRbeeSrQ'
      }).then((result) => {
        me.typeList = result.data.typelist
      }).catch(function (ex) {
        console.log(ex)
      })
    },
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      getGoodDtlPath (goodListItem) {
        return {path: '/goods-detail', query: {goodsId: goodListItem.goodsId, token: this.$route.query.token}}
      }
    }
  }
</script>

<style scoped lang="less">
  .good-list {
    .grid-list {
      .title {
        background-color: #efeff4;
        margin: 20px 0 0 0;
        padding: 6px 20px;
      }
      .grid-item {
        padding: 8px 4px;
        .custom-img {
          position: relative;
          width: 100%;
          padding-top: 74.66%;
          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
        }
        .custom-label {
          text-align: center;
          color: #555;
          font-size: 14px;
          text-overflow: ellipsis;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
</style>
