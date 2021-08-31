# 1、创建项目

```
create-react-app my-app --typescript
```

# 2、启动项目

```
npm start
```

启动后打开浏览器，报错：

```
 ReactRefreshEntry.js:8 报错 Cannot read property 'forEach' of undefined
```

原因是`react-dev-tool`导致的报错，关闭即可。

# 3、安装 eslint

# 4、安装 prettier

# 5、vscode 安装 editorconfig 插件

# 6、使用 husky

# 6、使用 react-router

## 1、安装依赖

```shell
yarn add react-router-dom react-router-config @types/react-router-dom @types/react-router-config -D

// 按需加载组件
yarn add @loadable/component -D
```

# 7、引入组件库

```shell
// 使用 npm
npm install @material-ui/core@next @emotion/react @emotion/styled @material-ui/icons

// 使用 yarn
yarn add @material-ui/core@next @emotion/react @emotion/styled
```

# 8、使用 postcss-loader 将 px 转成 rem

安装`postcss-plugin-px2rem`插件。将代码中的 px 转成 rem。

```shell
npm i postcss-plugin-px2rem -D
```

配置 postcss-loader

```js
require('postcss-plugin-px2rem')({
  // 1. 换算基准，直接取750设计稿的px尺寸写样式即可。
  // 2. 配合lib-flexible使用750的设计稿, 这里直接将根节点的字体大小设置为75px, 此时750px对应的值应该是10rem
  rootValue: 75,
  // 保留的小数位
  unitPrecision: 5,
  // 媒体查询
  mediaQuery: true,
  // 需要排除在外的目录
  exclude: /(node_module)/i,
  // 在rem.js全局作用下，排除指定的文件的影响
  selectorBlackList: [],
  // 过滤属性
  propBlackList: ['border']
});
```

设置跟节点的字体大小，因为 rem 是相对于根节点的字体大小来设定的。
下载  `lib-flexible`

```html
<script>
  (function flexible(window, document) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;

    // adjust body font size
    function setBodyFontSize() {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + 'px';
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
      }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    // 设定 1rem 的大小为视口大小的1/10
    function setRemUnit() {
      var rem = docEl.clientWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }

    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit();
      }
    });

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body');
      var testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
      }
      docEl.removeChild(fakeBody);
    }
  })(window, document);
</script>
```

# 9、解决 jsx 中的 px 转 rem

自定义全局的 px2rem 方法。

# 10、解决上面设置 1rem 为 75px，导致 material-ui 样式中使用了 rem 的样式过大

可以考虑将 75px 调整为更小的值，但是考虑到要做平板的兼容，这种方案是行不通的。
因为 rem 的值是随着设备屏幕的宽度大小变化的， 所以说当设备的宽度很大时，material-ui 组件的字体一样会显得很大。

# 11、 postcss-px-to-viewport

选用该插件对所有的 px 转换成 vw 视窗尺寸。将我们的代码转成 vw 这样即能解决影响 material-ui 组件的样式问题又能达到和 rem 一样的效果。
