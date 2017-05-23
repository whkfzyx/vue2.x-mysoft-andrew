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
  import fetch from '../utils/fetch'
  import config from '../utils/config'

  export default {
    data () {
      return {
        typeList: [],
        test: '123',
        token: '9c83K2hSw8VrMGD_myy_pKxbWOf_my_Lgt2oJjWfYnaTAYDZ9JERg'
      }
    },
    // 请求数据
    mounted: function () {
      let me = this
      fetch({
        url: config.API_SERVER + 'getgoodslist?token=9c83K2hSw8VrMGD_myy_pKxbWOf_my_Lgt2oJjWfYnaTAYDZ9JERg'
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
        return {path: '/goods-detail', query: {goodsId: goodListItem.goodsId, token: this.token}}
      }
    }
  }
</script>

<style scoped lange="less">

</style>
