<template>
  <div class="form-detail-cell">
    <group>
      <cell v-for="i in 5"
            title="文字标题"
            value="文字内容"
            :key="i">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'FormDetailCell',
  components: {
    Group,
    Cell
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
