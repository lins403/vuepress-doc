# 踩坑

.vue 文件中 css 使用实例变量（==vue2中css无法响应式更新==）

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



