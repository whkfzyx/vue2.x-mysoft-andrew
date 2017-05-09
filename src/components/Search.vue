<template>
  <div class="search">
    <search @on-result-click="resultClick"
            @on-change="getResult"
            @on-submit="showResult"
            :results="results"
            v-model="value"
            position="absolute"
            auto-scroll-to-top
            top="0"
            @on-focus="onFocus"
            @on-cancel="onCancel"></search>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'

export default {
  components: {
    Search,
    Group,
    Cell
  },
  methods: {
    resultClick (item) {
      window.alert('你点击了结果: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    showResult () {
      alert(this.value)
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} 结果: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
