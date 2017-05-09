<template>
  <div class="checkbox-list">
    <view-box>
      <tab :line-width="2"
           active-color="#333">
        <tab-item selected>选项卡一</tab-item>
        <tab-item>选项卡二</tab-item>
        <tab-item>选项卡三</tab-item>
      </tab>
      <search :auto-fixed="false"></search>
      <group gutter="0">
        <checker class="checker-group"
                 v-model="demo"
                 default-item-class="demo-item"
                 selected-item-class="demo-item-selected"
                 @on-change="change"
                 type="checkbox">
          <checker-item v-for="i in 10"
                        :value="i"
                        :key="i"
                        :class="['check-cell', i === 1 ? '' : 'vux-1px-t']">
            <div class="cell-checkpoint">
              <icon class="cell-check cell-checked"
                    type="success"></icon>
              <icon class="cell-check cell-unchecked"
                    type="circle"></icon>
            </div>
            <div class="cell-icon"></div>
            <div class="cell-text">
              <p class="cell-h">文字标题</p>
              <p class="cell-p">描述副标题</p>
            </div>
          </checker-item>
        </checker>
      </group>
      <div class="check-bottom vux-1px-t"
           slot="bottom">
        <span class="check-text">
              已选：
              <span class="check-seril">{{demo.length}}</span>
        </span>
        <button @click="change"
                class="check-submit">按钮</button>
      </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Checker, CheckerItem, Search, Tab, TabItem, Group, Cell, CellBox, LoadMore, Icon } from 'vux'

export default {
  name: 'CheckList',
  components: {
    ViewBox,
    Checker,
    CheckerItem,
    Search,
    Tab,
    TabItem,
    Group,
    Cell,
    CellBox,
    LoadMore,
    Icon
  },
  data () {
    return {
      demo: []
    }
  },
  methods: {
    change () {
      console.log('change', this.demo)
    }
  }
}
</script>

<style scoped>
.checkbox-list {
  height: 100%;
}

.checker-group {
  padding-left: 15px;
}

.cell-icon {
  display: inline-block;
  height: 64px;
  width: 64px;
  margin-left: 35px;
  margin-right: 13px;
  background-color: #eee;
}

.cell-text {
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.cell-h {
  font-size: 18px;
  margin-bottom: 6px;
}

.cell-p {
  font-size: 13px;
  color: #9b9b9b;
}

.check-cell {
  padding: 10px 0px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.cell-checkpoint {
  display: inline-block;
  height: 16px;
}

.cell-check {
  position: absolute;
  left: 0;
  font-size: 16px;
  color: #333;
}

.demo-item .cell-checked,
.demo-item-selected .cell-unchecked {
  display: none;
}

.demo-item .cell-unchecked,
.demo-item-selected .cell-checked {
  display: inline-block;
}

.check-bottom {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 49px;
  line-height: 49px;
  padding-left: 15px;
  background-color: #fff;
}

.check-text {
  font-size: 14px;
  color: #888;
}

.check-seril {
  color: #333;
}

.check-submit {
  height: 100%;
  width: 98px;
  background-color: #000;
  font-size: 17px;
  color: #fff;
  border: 0;
  float: right;
  text-align: center;
}
</style>
