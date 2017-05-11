# vue-mysoft-andrew

> 明源小管家-移动招领项目

## 版本说明

### v1.1 基于官方脚手架完成项目搭建

包括路由配置、模拟数据接口配置、项目结构设置等

### v1.0 导入官方示例脚手架

## 文件结构

```
src
├── App.vue # 主组件
├── assets
│   ├── fonts # 字体图标样式库
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   └── iconfont.woff
│   ├── images
│   └── less
│       ├── iconfont.less # 字体图标样式索引
│       └── reset.less    # 自定义样式
├── main.js # 主程序入口
├── mock 
│   ├── datas # 模拟数据
│   │   ├── getGoodsDetail.json    # 获取物品详情
│   │   ├── getGoodsList.json      # 获取物品列表
│   │   ├── getMyBorrowDetail.json # 获取已借物品详情
│   │   ├── getMyBorrowList.json   # 获取已借物品列表
│   │   └── submitBorrow.json      # 提交借物表单的返回数据
│   ├── images
│   │   └── ... # 模拟图片数据
│   └── index.js # 模拟接口程序
├── pages
│   ├── AboutMe.vue     # 我的领用
│   ├── BorrowForm.vue  # 借物表单
│   ├── GetForm.vue     # 领物表单
│   ├── GoodsDetail.vue # 产品详情
│   ├── GoodsList.vue   # 全部产品
│   └── Success.vue     # 领取成功
└── router
    └── index.js # 路由表
```

## 构建和安装命令

``` bash
# 安装依赖包
npm install

# 在localhost:8014 运行开发环境
npm run dev

# 在生产环境打包
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
