<!--物品列表-->
<template>
  <div>
    <div class="good-list"
         v-for="typeListItem in typeList"
         :key="typeListItem.typeId">
      <group-title>{{typeListItem.value}}</group-title>
      <grid :rows="4">
        <grid-item v-for="goodListItem  in typeListItem.list"
                   :key="goodListItem.goodsId"
                   :link="getGoodDtlPath(goodListItem)">
          <img slot="icon"
               :src="goodListItem.img">
          <span slot="label">{{goodListItem.name}}</span>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    data () {
      return {
        typeList: [],
        test: '123'
      }
    },
    // 请求数据
    mounted: function () {
      this.$http.get('http://local.wechattest.com/andrew/api/getgoodslist?token=60909YlpcOVk7_myy_9ieK2yLKUgwnApBz6txamFgsRiUk9_my_JQ').then(function (result) {
        this.typeList = result.data.data.typelist
      }.bind(this)).catch(function (ex) {
        console.log(ex)
      })
    },
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      onItemClick (goodListItem) {
        this.$router.push({path: '/goods-detail', query: {goodsId: ''}})
      },
      getImgPath (path) {
        return '../mock' + path
      },
      getGoodDtlPath (goodListItem) {
        return {path: '/goods-detail', query: {goodsId: goodListItem.goodsId}}
      }
    }
  }
</script>

<style scoped lange="less">

</style>
