<!--物品列表-->
<template>
  <div class="good-list">
    <div v-for="typeListItem in typeList" :key="typeListItem.typeId" class="grid-list">
      <group-title class="title">{{typeListItem.value}}</group-title>
      <grid :rows="4">
        <grid-item v-for="goodListItem in typeListItem.list" :key="goodListItem.goodsId"
                   :link="getGoodDtlPath(goodListItem)" class="grid-item">
          <div class="custom-img">
            <img v-if="goodListItem.img" :src="goodListItem.img">
          </div>
          <div class="custom-label">{{goodListItem.name}}</div>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    data () {
      return {
        typeList: [
          {
            typeId: '1',
            key: 'lowValue',
            value: '低值消耗',
            list: [
              {
                goodsId: '44234-634234-734641',
                name: '纸巾',
                img: '/image/pic1.png'
              },
              {
                goodsId: '24234-634234-734642',
                name: '中性笔',
                img: '/image/pic2.png'
              },
              {
                goodsId: '94234-634234-734643',
                name: '草稿本',
                img: '/image/pic3.png'
              },

              {
                goodsId: '44234-634234-734645',
                name: '马克笔',
                img: '/image/pic8.png'
              },
              {
                goodsId: '44234-634234-734645',
                name: '透明胶带',
                img: '/image/pic9.png'
              },
              {
                goodsId: '44234-634234-734645',
                name: '剪刀',
                img: '/image/pic10.png'
              },
              {
                goodsId: '44234-634234-734645',
                name: '文件夹',
                img: '/image/pic11.png'
              },
              {
                goodsId: '44234-634234-734645',
                name: '便利贴',
                img: '/image/pic13.png'
              }
            ]
          },
          {
            typeId: '2',
            key: 'fixedAsset',
            value: '固定资产',
            list: [
              {
                goodsId: '44234-634234-734646',
                name: '笔记本电脑',
                img: '/image/pic14.png'
              },
              {
                goodsId: '44234-634234-734645',
                name: '订书机',
                img: '/image/pic12.png'
              },
              {
                goodsId: '44234-634234-734646',
                name: '笔记本电脑',
                img: '/image/pic14.png'
              },
              {
                goodsId: '44234-634234-734645',
                name: '订书机',
                img: '/image/pic12.png'
              }
            ]
          },
          {
            typeId: '3',
            key: 'loveHouse',
            value: '爱心屋',
            list: [
              {
                goodsId: '44234-634234-734649',
                name: '雨伞',
                img: '/image/pic16.jpg'
              },
              {
                goodsId: '24234-634234-734650',
                name: '充电宝',
                img: '/image/pic15.jpg'
              },
              {
                goodsId: '94234-634234-734651',
                name: '热水袋',
                img: '/image/pic17.jpg'
              }
            ]
          }
        ]
      }
    },
    // 请求数据
    created: function () {
    },
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      getGoodDtlPath (goodListItem) {
        return {path: '/goods-detail', query: {goodsId: goodListItem.goodsId, token: this.$route.query.token}}
      }
    }
  }
</script>

<style scoped lang="less">
  .good-list {
    .grid-list {
      & + .grid-list {
        margin: 20px 0 0 0;
      }
      .title {
        margin: 0;
        background-color: #efeff4;
        padding: 6px 20px;
      }
      .weui-grids {
        margin-left: 6px;
        margin-right: 6px;
        &:after {
          border: 0 none;
        }
        &:before {
          border: 0 none;
        }
        .weui-grid:before {
          border: 0 none;
        }
        .weui-grid:after {
          border: 0 none;
        }
        .grid-item {
          padding: 8px 4px;
          .custom-img {
            position: relative;
            width: 100%;
            padding-top: 74.66%;
            background-image: url(../assets/default-bg-small.png);
            background-size: contain;
            img {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
            }
          }
          .custom-label {
            text-align: center;
            color: #555;
            font-size: 14px;
            text-overflow: ellipsis;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
