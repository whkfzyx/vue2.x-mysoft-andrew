<template>
  <div class="demo">
    <div>
        <img src="/image/pic14.png"  class="big-img"/>
    </div>
     <group>
      <form-preview header-label="产品名称"
                    :header-value="headervalue"
                    :body-items="list"></form-preview>
    </group>
  </div>
</template>

<script>
import { Group, Cell, FormPreview } from 'vux'
export default {
  name: 'demo',
  components: {
    Group,
    Cell,
    FormPreview
  },
  data () {
    return {
      list: [
      //   {label: '当前状态', value: '待还中'},
      //  {label: '领取时间', value: '2015-09-14 01:02:21'},
      //  {label: '应还时间', value: '2015-09-14 01:02:21'},
      //  {label: '领取流水', value: '121718910134150928210680762'},
      //  {label: '产品编号', value: '00132450001'},
      //  {label: '隶属部门', value: '行政'}
      ],
      imgurl: '',
      headervalue: ''
    }
  },
  methods: {
    loadList () {
      var grouplist = []
      this.$http.get('/getmyborrowdetail').then((res) => {
        var d = res.data.data
        this.imgurl = d.img
        this.headervalue = d.name
        grouplist.push({label: '当前状态', value: '待还中'})
        grouplist.push({label: '领取时间', value: '2015-09-14 01:02:21'})
        grouplist.push({label: '应还时间', value: d.shouldReturnDate})
        grouplist.push({label: '领取流水', value: d.orderId})
        grouplist.push({label: '产品编号', value: d.assetSN})
        grouplist.push({label: '隶属部门', value: d.department})
      }).catch((res) => { console.log(res) })
    }
  },
  created () {
    this.loadList()
  }
}

</script>

<style lang="less">
.big-img {
  width: 100%;
}
</style>
