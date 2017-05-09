<template>
  <div class="cell-list">
    <tab :line-width="2"
         active-color="#333">
      <tab-item selected>选项卡一</tab-item>
      <tab-item>选项卡二</tab-item>
      <tab-item>选项卡三</tab-item>
    </tab>
    <search :auto-fixed="false"></search>
    <group gutter="0">
      <cell v-for="i in 10"
            title="文字标题"
            inline-desc="描述副标题"
            :key="i"
            is-link>
        <div class="cell-icon"
             slot="icon"></div>
      </cell>
    </group>
    <load-more tip="正在加载"></load-more>
  </div>
</template>

<script>
import { Search, Tab, TabItem, Group, Cell, LoadMore } from 'vux'

export default {
  name: 'CellList',
  components: {
    Search,
    Tab,
    TabItem,
    Group,
    Cell,
    LoadMore
  }
}
</script>

<style scoped>
.cell-icon {
  height: 64px;
  width: 64px;
  margin-right: 13px;
  background-color: #eee;
}
</style>
