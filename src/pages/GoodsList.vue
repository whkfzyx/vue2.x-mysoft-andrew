<template>
  <div>
    <div class="good-list"
         v-for="typeListItem in typeList"
         :key="typeListItem.typeId">
      <group-title>{{typeListItem.value}}</group-title>
      <grid :rows="4">
        <grid-item v-for="goodListItem  in typeListItem.list"
                   :key="goodListItem.goodsId"
                   :link="getGoodDtlPath(goodListItem,typeListItem)">
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
    var me = this
    this.$http.get('/getgoodslist').then(function (result) {
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
    onItemClick (goodListItem) {
      this.$router.push({ path: '/goods-detail', query: { goodsId: '' } })
    },
    getImgPath (path) {
      return '../mock' + path
    },
    getGoodDtlPath (goodListItem, typeListItem) {
      var objPath = { path: '/get-form', query: { goodsId: goodListItem.goodsId } }
      if (typeListItem.value === '固定资产') {
        objPath.path = '/borrow-form'
      }
      return objPath
    }
  }
}
</script>

<style scoped lange="less">

</style>
