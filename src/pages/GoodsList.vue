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
               src="../mock/images/pic1.png">
                <span slot="label">{{goodListItem.name}}</span>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
import Axios from 'axios'

export default {
  data () {
    return {
      typeList: [],
      msg: '123'
    }
  },
  // 请求数据
  mounted: function () {
    var me = this
    Axios.get('/getgoodslist').then(function (result) {
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
    getGoodDtlPath (goodListItem) {
      return { path: '/goods-detail', query: { goodsId: goodListItem.goodsId } }
    }
  }
}
</script>

<style scoped lange="less">

</style>
