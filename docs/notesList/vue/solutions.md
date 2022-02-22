# 踩坑

## elementUI

### 1) 按需引入

```js
// src/element-demand.js
import { Button } from 'element-ui'
export default {
  install(Vue) {
    Vue.use(Button)
  }
}
```

```scss
/* icon字体路径变量 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

/* 基础scss文件 */
@import '~element-ui/packages/theme-chalk/src/base.scss';

/* 按需引入组件的scss文件 */
@import '~element-ui/packages/theme-chalk/src/button.scss';
```

```js
// main.js
import partialElement from './element-demand'
import './element-variables.scss'

Vue.use(partialElement)
new Vue({
  render: h => h(App)
}).$mount('#app')
```

`npm run build -- --report`

❌这个时候打包结果中，模块大小与全局引入时的一致，并没有经过tree-shaking，webpack还是把所有的都打包了

✅要在引入一个babel插件：**[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)**

```bash
npm i babel-plugin-component -D
```

```js
// babel.config.js
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
```

### 2）el-tree 的选中数据变化，视图不能更新

solution1：

```vue
<el-dialog :visible.sync="dialogVisible" title="用户角色配置" append-to-body width="345px">
  <div v-if="dialogVisible" class="tree-wrap">
    <el-tree ref="treeRef" :current-node-key="currentNodekey" />
  </div>
</el-dialog>
```

solution2：

```js
this.$nextTick(() => {
	this.$refs.treeRef.setCurrentKey(this.currentNodekey)
})
```

### 3）el-tree 长列表太卡

[el-tree 长列表太卡的问题，我们解决了！](https://zhuanlan.zhihu.com/p/264350578)

- 虚拟滚动

### 4）封装dialog的loading效果(loading service)

```js
import { Loading } from 'element-ui'

methods:{
  async beforeOpen(done, type) {
    done()
    let loadingInstance
    this.$nextTick(() => {
      loadingInstance = Loading.service({
        fullscreen: false,
        target: '.el-dialog__body'	//document.querySelector
      })
    })
    const res = type === 'edit' ? await getUserEdit(this.form.id) : type === 'view' ? await getUser(this.form.id) : {}
    // 加200ms的延迟避免屏闪
    await new Promise(resolve => {
      setTimeout(resolve, 200)
    })
    if (res.data) this.form = res.data.data
    this.$nextTick(() => {
      loadingInstance.close()
    })
  },
}
```

### 5）el-table底边框

```css
.el-table::before {
	height: 0px;
}
```



## vuejs

### 1）数据嵌套太深无法响应式更新

```vue
<template>
	<outer-component :config="config" />
</template>

<script>
  export default {
    data(){
      return{
        config: {
          ...this.baseConfig,
          data: []
        }
      }
    },
    mounted(){
      const data = (await getData()).data.data
      
      /**** 无法响应式更新 ****/
      this.config.data = data
      this.config.data.push(...data)
      this.config.data.splice(0, 1, ...data)
      /**** 无法响应式更新 ****/
      
      /** 响应式更新整个对象 **/
      this.config = {
        ...this.baseConfig,
        data
      }
      /** 响应式更新整个对象 **/
      
      /** 其它方法 **/
      this.$forceUpdate()
      
    }
  }
</script>
```



## 全局

### axios拦截器白名单

```js
const statusWhiteList = []
const apiWhiteList = []
axios.interceptors.response.use(res => {
  NProgress.done();
	const status = res.data.code || res.status;
  const message = res.data.msg || res.data.error_description || '未知错误';
  
  // 状态码白名单
  // 如果在白名单里则自行catch逻辑处理
  if (statusWhiteList.includes(status)) return Promise.reject(res);
  
  if (status !== 200) {
    // api白名单
    if (apiWhiteList.includes(res.config.url.replace(/(.*?)\?.*/g, '$1'))){
      return Promise.reject(new Error(message));
    }
    myMessage.error(message)
    return Promise.reject(new Error(message))
  }
})
```

```js
handleError(err){
  const errorMsg = err.toString().replace('Error: ', '')
  this.$confirm(<div style="white-space:pre-wrap;word-wrap:break-word;max-height:800px;overflow:scroll;">{errorMsg}</div>, '错误提示', {
    showConfirmButton: false,
    cancelButtonText: '关闭',
    type: 'error'
  })
  .then(() => {})
  .catch(() => {})
}
```

