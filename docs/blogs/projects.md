# 踩坑

.vue 文件中 css 使用实例变量（<mark>vue2中css无法响应式更新</mark>）

```vue
<script>
export default {
  data(){
    return{
      blockStatus: true
    }
  }
}
</script>

<style lang="scss" scoped vars="{ blockStatus }">
.container {
  /** @if var(--blockStatus) { **/
  @if blockStatus {
    pointer-events: none;
  }@else {
    pointer-events: auto;
  }
}
</style>
```

https://juejin.cn/post/6856668819344392206

# 寸

项目的token、cookie、store等

# React

[styled-jsx](https://github.com/vercel/styled-jsx)

[styled-components](https://github.com/styled-components/styled-components)

[图形算法（邻接矩阵）在前端领域的应用](https://zhuanlan.zhihu.com/p/95593315)

[人生苦短，我用Python（目录）](https://www.cnblogs.com/haiyan123/p/8387770.html)
