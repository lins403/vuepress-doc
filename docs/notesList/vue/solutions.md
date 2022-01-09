# 踩坑



## elementUI

1）el-tree 的选中数据变化，视图不能更新

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

