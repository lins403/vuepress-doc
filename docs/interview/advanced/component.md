# 组件封装

我们做后台管理系统的时候，其实我们接触最多的组件就是表格组件了，为了开发效率和代码的规范性，基于element-ui框架封装一个更好用的自定义组件。

一般管理系统对表格会有以下需求：可以分页（需要有分页条）、可以多选（表格带复选框）、顶部需要加一些操作按钮（查询、新增，删除等等）、表格每行行尾有操作按钮、表格行可以编辑、表格可以自定义字段格式

- 表格、查询、分页
- layout布局 (sideBar、navBar、tagsView)
- 函数式组件、mixins


## 分页功能

基于el-pagination的封装，定制统一风格。

最主要的目的是监听分页事件，自动触发新的接口请求来刷新表格数据，并且滚动至表格顶部

```vue
/**
* @pageNum: 当前内容在第几页
* @pageSize: 每次分页请求多少条数据
* @getList: 将pageNum和pageSize作为接口参数，请求新的表格数据
*/
<pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize" @pagination="getList" />
```

## 查询功能

基于el-form表单的封装，封装查询、重置查询条件、新增、导出Excel、批量删除等等按钮，并且添加按钮的权限过滤。

使用的时候传入一个数组，数组里面是一个个对象，关于表单item的描述信息，例如输入框或下拉框，字段名，默认值等等

```vue
/**
 * @data {Array<object>} 关于表单item的描述信息，例如输入框或下拉框，字段名，默认值等等
 */
<div class="com-searh-wrap">
  <search :show-export="true" :data="searchData" @search-reset="reset" @search-submit="searchSubmit" />
</div>
<script>
  export default {
    data() {
      return {
        searchData: [{
          type: 'input',	//input、select、switch、radio、daterange、datetimerange
          field: 'userName',
          label: '用户名',
          clearable: true,
          value: '',
          placeholder: '请输入'
        }],
      }
    }
  }
</script>
```

## 表格

1. 复选框

   ```vue
   <el-table-column v-if="selection" type="selection" :selectable="isSelectable" :reserve-selection="reserveSelection" :width="selectionWidth + 'px'" />
   ```

2. 序号

   ```vue
   <el-table-column v-if="index" type="index" width="70" label="序号" align="center" />
   ```

3. 多级表头和普通表头（el-table-column嵌套）

4. 自定义行字段模板（slot）

5. 自定义行操作按钮（render function）

6. 行字段可编辑（input）

```vue
<el-table>
		<template v-for="item in columns">
<!-- 多级表头，使用嵌套的el-table-column -->
      <table-column
        v-if="item.children && item.children.length"
        :key="item[item.key]"
        :show-overflow-tooltip="showOverflowTooltip"
        :child="item"
      />

<!-- 普通表头 -->
      <el-table-column
        v-else
        :key="item[item.key]"
        :show-overflow-tooltip="showOverflowTooltip"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
        :min-width="item.minWidth"
        :fixed="item.fixed"
        :align="item.align"
      >
        <template slot-scope="scope">
          
<!-- 自定义行字段模板 -->
          <table-slot
            v-if="item.slot"
            :row="scope.row"
            :column="item"
            :index="scope.$index"
          />

          <div v-else>
<!-- 使用render Function的情况，通常用它来添加行操作按钮 -->
            <table-item
              v-if="item.render"
              :render="item.render"
              :row="scope.row"
              :index="scope.$index"
            />
            
<!-- 双击编辑行字段 -->
            <span
              v-else-if="item.edit"
              style="display: inline-block; width: 100%;cursor: text;"
              title="双击可编辑"
              @dblclick="tableDbClick(scope.row, item.key, scope.$index)"
            >
              <span v-if="isEdit && editIndex===scope.$index && editKey===item.key">
                <el-input
                  :ref="'input' + item.key + scope.$index"
                  v-model="editValue"
                  style="width: auto;"
                  @blur="hideInput(scope.row, item.key, scope.$index)"
                  @keyup.enter.native="hideInput(scope.row, item.key, scope.$index)"
                />
              </span>
              <span v-else>
                <span>{{ scope.row[item.key] }}</span>
              </span>
            </span>
            
<!-- 普通字段 -->
            <span v-else>
              {{ scope.row[item.key] }}
            </span>
          </div>
        </template>
      </el-table-column>
    </template>
</el-table>
```

7. 空数据

  ```vue
  <div slot="empty" style="margin: 20px 0 10px 0;">
    <div class="empty-content">
      <img src="@/assets/img/noneData.png" alt class="nodata">
      <span style="display: block;font-size: 20px;letter-spacing: 10px;">····暂无数据····</span>
    </div>
  </div>
  ```



### 封装的组件类型

1. table-column（跟table有代码重复，但因为不知道嵌套几层，所以单独抽取为一个组件）

2. table-item（函数式组件，返回使用props传递的render function）

3. table-slot（函数式组件，`$scopedSlots`）

   ```js
   render: (h, ctx) => {
     return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.key]({
       row: ctx.props.row,
       column: ctx.props.column,
       index: ctx.props.index
     }))
   }
   ```

4. table-mixins（混入表格通用的字段和方法）

#### 细节事项

1. getList的api接口可以通过table自定义，也可以严格按照路由名称统一规范
2. table组件通过provide提供实例，子组件通过inject来接收实例

### 使用

```vue
<com-table :columns="columns" :data="listData" :loading="loading" @select-cell="selectCell" >
  <!-- 
		<template slot="roleName" slot-scope="{ row }">
	-->
	<template #roleName="{ row }">
		<!-- 
			this.$scopedSlots['roleName'](scope)  
			// scope:{row,column,index} 
		-->
    <el-tag>{{ row.roleName }}</el-tag>
  </template>
</com-table>
```

```js
data () {
  return {
    listData: [], // 表格数据
    columns: Object.freeze([
      {
        title: '用户名',
        key: 'userName',
        align: 'center'
      },
      {
        title: '性别',
        key: 'sex',
        align: 'center',
        dicData: [
          {
            label: "bug",
            value: "error"
          }
        ]
      },
      {
        title: '手机号码',
        key: 'phone',
        width: '120',
        align: 'center'
      },
      {
        title: '所属角色',
        key: 'roleName',
        slot: true,
        align: 'center'
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        minWidth: '160',
        fixed: 'right',
        render: (h, params, index) => {
          return h('div', [
            h(
              'el-button', {
                props: {
                  type: 'success',
                  plain: true,
                  size: 'mini'
                },
                on: {
                  click: () => {
                    params.id = params.id.toString()
                    this.showDialog('', params, 'Info', '用户详细信息')
                  }
                }
              },
              '查看'
            )
          ])
        }
      }
    ]),
  }
}
```

```js
    // 多选
    selectCell (val) {
      this.multipleSelection = val
    }
```

### 综合

我们这个项目只是，封装了table和pagination，dialog没有再封装，而是共享外面的dialog层，中间的表单内容提取为单独的组件，通过动态组件来渲染。

需要权衡封装度和易用性，可以把search、pagination、dialog都封装进table中，减少字段的冗余，但是会增加复杂度，并且降低灵活性

```vue
<template> 
<div class="table">
  <com-table :columns="columns" :data="listData" :loading="loading" @select-cell="selectCell" />
  
	<pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize" @pagination="getList" />
  
  <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false" append-to-body :title="dialogTitle">
    <component
      :is="dialogComponent"
      v-if="dialogVisible"
      :id="id"
      @closeDialog="closeDialog"
      @getData="getData"
      @getList="getList" />
  </el-dialog>
</div>
</template>
```

## 其它

### Echarts图表

封装实现一个echarts图表容器，定义默认主题和resize事件的监听

### 富文本

二次开发，基于开源的富文本编辑器再封装，例如开源的quill或者是wangEditor，wangEditor的UI更漂亮一些，封装富文本的初始化方式和自定义事件，例如在图片上传前后添加自定义的功能。

```vue
<base-editor v-model.trim="form.infoData" :options="editorOption" />
```

### 树结构

1. 封装el-tree和input的输入过滤
2. 封装select框的下拉树，但我们使用的是第三方库@riophae/vue-treeselect

### svg

基于webpack的svg-sprite-loader，可以引用本地的svg文件；

```js
// vue.config.js
config.module
  .rule('icons')
  .test(/\.svg$/)
  .include.add(resolve('src/assets/icons'))
  .end()
  .use('svg-sprite-loader')
  .loader('svg-sprite-loader')
  .options({
    symbolId: 'icon-[name]'
	})
  .end()
```

```js
// src/assets/icons/index.js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

封装svg标签，支持传入一个字符串标识符来使用对应的svg

```vue
<!-- icon-class 为 icon 的名字; class-name 为 icon 自定义 class-->
<svg-icon icon-class="password"  class-name='custom-class' />
```

