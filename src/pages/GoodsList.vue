<template>
  <div class="demo">
    <group-title></group-title>
    <grid :rows="4">
      <grid-item v-for="i in 8"
                 :key="i">
        <img slot="icon"
             src="../mock/images/pic1.png">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick () {
      alert('123')
    }
  }
}
</script>

<style scoped lange="less">

</style>
