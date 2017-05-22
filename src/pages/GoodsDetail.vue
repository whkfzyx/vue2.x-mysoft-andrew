<template>
  <div class="demo">
  
    <img :src="imgurl"
         class="big-img" />
    <form-preview header-label="产品名称"
                  :header-value="headervalue"
                  :body-items="list"
                  :footer-buttons="btnconfirm"></form-preview>
    <date-format></date-format>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  FormPreview,
  dateFormat,
  Clocker
} from 'vux'
export default {
  name: 'demo',
  components: {
    Group,
    Cell,
    FormPreview,
    dateFormat,
    Clocker
  },
  data () {
    return {
      list: [],
      imgurl: '',
      headervalue: '',
      btnconfirm: [{
        style: 'primary',
        text: '确定',
        onButtonClick: (name) => {
          window.history.go(-1)
        }
      }]
    }
  },
  methods: {
    loadList () {
      this.$http.get('/getmyborrowdetail').then((res) => {
        var d = res.data.data
        this.imgurl = d.img
        this.headervalue = d.name

        this.list.push({
          label: '当前状态',
          value: '待还中'
        })
        this.list.push({
          label: '领取时间',
          value: dateFormat(d.date, 'YYYY-MM-DD HH:mm:ss')
        })
        this.list.push({
          label: '应还时间',
          value: dateFormat(d.shouldReturnDate, 'YYYY-MM-DD HH:mm:ss')
        })
        this.list.push({
          label: '领取流水',
          value: d.orderId
        })
        this.list.push({
          label: '产品编号',
          value: d.assetSN
        })
        this.list.push({
          label: '隶属部门',
          value: d.department
        })
      }).catch((res) => {
        console.log(res)
      })
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
