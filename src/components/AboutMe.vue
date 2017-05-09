<template>
  <div class="about-me">
    <div class="model-header">
      <div class="header-img"></div>
      <p class="header-p">用户名称<i class="icon iconfont icon-more"></i></p>
    </div>
    <flexbox class="model-part" :gutter="0">
      <flexbox-item>
        <div class="flex-demo">
          <div class="flex-img"></div>
          <p class="flex-p">模块1</p>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">
          <div class="flex-img"></div>
          <p class="flex-p">模块2</p>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">
          <div class="flex-img"></div>
          <p class="flex-p">模块3</p>
        </div>
      </flexbox-item>
    </flexbox>
    <group>
      <cell title="设置1"
            is-link>
      </cell>
    </group>
    <group>
      <cell v-for="i in 3"
            :title="'设置'+i"
            is-link
            :key="i">
      </cell>
    </group>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Group, Cell } from 'vux'

export default {
  name: 'AboutMe',
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell
  }
}
</script>

<style scoped>
.model-header{
  padding: 15px;
  background-color: #000;
  text-align: center;
}

.header-img{
  box-sizing: border-box;
  height: 90px;
  width: 90px;
  margin: 0 auto 10px;
  border-radius: 45px;
  border: 5px solid #333;
  background-color: #888;
}

.header-p{
  color:#fff;
  font-size: 16px;
}

.model-part{
  background-color: #242424;
}

.flex-demo{
  text-align: center;
  padding: 10px 0;
}

.flex-demo:active{
  background-color: #444;
}

.flex-img{
  display: block;
  background-color: #888;
  margin: auto;
  height: 29px;
  width: 29px;
}

.flex-p{
  color: #fff;
  font-size: 12px;
  line-height: 12px;
  margin-top: 5px;
}
</style>
