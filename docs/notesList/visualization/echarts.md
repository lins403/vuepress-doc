# echarts

- v4
- v5

## 1. events

```js
// https://echarts.apache.org/v4/zh/api.html
// 文档内容不全
console.dir(/* echartsInstance */)
```

```js
this.chart.on('click', params => {})
// 等价于
this.chart.on('click', 'series', params => {
  console.log(params);
})

// this.chart.on('click', 'title.text', params=>{})        //not work
// on的方法缺陷在于只能监听具体图形的事件，例如无法监听具体图形外的事件，标题、柱状图阴影部分的点击事件
```

getZr

```js
// echartsInstance.getZr().on('click' , params => {}) 监听画布
// echartsInstance.containPixel('grid', pointInPixel) 判断点击位置是否在坐标系里面
// convertFromPixel 根据像素点取到索引和点击位置坐标

this.chart.getZr().on('click', params => {
  const pointInPixel = [params.offsetX, params.offsetY]
  if (this.chart.containPixel('grid', pointInPixel)) {
    const pointInGrid = this.chart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
    // const options = this.chart.getOption()
    const city = this.chartOptions.xAxis.data[pointInGrid[0]]
    console.log(city)
  }
})
```

### 柱状图点击改变柱子颜色

```js
const AreaBarLinkage = {
  extends: AreaBar,
  data() {
    return {
      selectedDataIndex: 0
    }
  },
  created() {
    // extends或mixins中的钩子先执行
    const _this = this
    this.chartOptions.series[0].itemStyle = {
      color: params => (params.dataIndex === _this.selectedDataIndex ? 'orange' : '#C1232B')
    }
  },
  methods: {
    handleChartClick() {
      this.chart.getZr().on('click', params => {
        const pointInPixel = [params.offsetX, params.offsetY]
        if (this.chart.containPixel('grid', pointInPixel)) {
          const pointInGrid = this.chart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
          this.selectedDataIndex = pointInGrid[1]
          this.chart.resize()
        }
      })
    }
  }
}
```

## 2. action

### 饼图默认高亮

```js
handleChartClick() {
  let selectedDataIndex = 1

  this.chart.on('click', 'series', params => {
    selectedDataIndex = params.dataIndex
  })

  this.chart.dispatchAction({
    type: 'pieSelect',    // 效果并不好
    dataIndex: this.selectedDataIndex
  })


  //设置默认选中高亮部分
  this.chart.dispatchAction({
    type: 'highlight',
    dataIndex: selectedDataIndex
  })

  this.chart.on('mouseover', e => {
    //当检测到鼠标悬停事件，取消默认选中高亮
    this.chart.dispatchAction({
      type: 'downplay',
      dataIndex: selectedDataIndex
    })
    //高亮显示悬停的那块
    this.chart.dispatchAction({
      type: 'highlight',
      dataIndex: e.dataIndex
    })
  })

  //检测鼠标移出后显示之前默认高亮的那块
  this.chart.on('mouseout', e => {
    this.chart.dispatchAction({
      type: 'highlight',
      dataIndex: selectedDataIndex
    })
  })
}
```

## 3. theme

### 使用渐变色

```js
import LinearGradient from 'zrender/src/graphic/LinearGradient';

{
  series: [
    {
      type: "bar",
      showBackground: true,
      color: params => {
        const color = ["#2193b0", "#DD5E89"];
        const downcolor = ["#6dd5ed", "#F7BB97"];
/**
 * x, y, x2, y2 are all percent from 0 to 1
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [x2=1]
 * @param {number} [y2=0]
 * @param {Array.<Object>} colorStops
 * @param {boolean} [globalCoord=false]
 */
        return new LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: color[params.dataIndex % 2] // 0% 处的颜色
          },
          {
            offset: 1,
            color: downcolor[params.dataIndex % 2] // 100% 处的颜色
          }
        ])
      }
    }
  ]
}
```

## 4. 数据

[ECharts省份地图数据合集: 收录中国各个省份的地图JSON数据](https://gitee.com/MTrun/echarts-map-json)

## 5. 封装库

[GitHub - ecomfe/vue-echarts: Apache ECharts component for Vue.js.](https://github.com/ecomfe/vue-echarts)

[GitHub - DataV-Team/DataV: Vue数据可视化组件库](https://github.com/DataV-Team/DataV)

[vue-big-screen: 🔥一个基于 vue、datav、Echart 框架的大数据可视化（大屏展示）模板，提供数据动态刷新渲染、屏幕适应、内部图表自由替换、Mixins注入等功能，持续更新....](https://gitee.com/MTrun/big-screen-vue-datav)

[GitHub - hustcc/echarts-for-react: ⛳️ Apache ECharts components for React wrapper. 一个简单的 Apache echarts 的 React 封装。](https://github.com/hustcc/echarts-for-react)

## 6. 图表资源库

[图表配置工具](http://mincharts.com/)

# 参考

[echarts折线图添加区域点击事件，而不用去点小圆点（扩大点击范围）](https://blog.csdn.net/lightpass/article/details/81457410)

[Echarts中饼图默认高亮显示方法](https://blog.csdn.net/hen1183392934/article/details/86231329)