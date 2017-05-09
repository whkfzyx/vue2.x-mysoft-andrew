<template>
  <div class="form-detail">
    <tab :line-width="2"
         active-color="#333">
      <tab-item selected>选项卡一</tab-item>
      <tab-item>选项卡二</tab-item>
      <tab-item>选项卡三</tab-item>
    </tab>
    <group>
      <form-preview header-label="文字标题"
                    header-value="突出文字内容"
                    :body-items="list"></form-preview>
    </group>
  </div>
</template>

<script>
import { Search, Tab, TabItem, Group, Cell, LoadMore, XButton, FormPreview } from 'vux'

export default {
  name: 'FormDetail',
  components: {
    Search,
    Tab,
    TabItem,
    Group,
    Cell,
    LoadMore,
    XButton,
    FormPreview
  },
  data () {
    return {
      list: [{
        label: '文字标题',
        value: '文字内容'
      },
      {
        label: '文字标题',
        value: '文字内容'
      },
      {
        label: '文字标题',
        value: '文字内容'
      },
      {
        label: '文字标题',
        value: '文字内容'
      },
      {
        label: '文字标题',
        value: '文字内容'
      }]
    }
  }
}
</script>

<style scoped>

</style>
