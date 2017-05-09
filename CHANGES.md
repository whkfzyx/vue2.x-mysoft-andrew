# 脚手架修改记录
## 1.添加postcss-px2rem插件
### 功能：
增加淘宝自适应支持
### 修改记录：
build/vue-loader.conf.js

```js
postcss: [
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1']
    }),
    require('postcss-px2rem')({remUnit: 75})
]
```

package.json

```json
"postcss-px2rem": "^0.3.0",
```

index.html

```html
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```

css

```css
font-size: 24px; /*px*/
height: 30px; /*px*/
border-left: 1px solid #D8D8D8; /*no*/
```

