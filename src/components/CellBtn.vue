<template>
  <div class="cell-btn">
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
            :key="i">
        <x-button mini plain>按钮</x-button>
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Tab, TabItem, Group, Cell, XButton } from 'vux'

export default {
  name: 'CellBtn',
  components: {
    Search,
    Tab,
    TabItem,
    Group,
    Cell,
    XButton
  }
}
</script>

<style scoped>
</style>
