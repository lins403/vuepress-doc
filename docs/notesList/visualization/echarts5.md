# echarts5

## 按需引入

方式一：

```js
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
```

[按需引入 ECharts 图表和组件 | Handbook - Apache ECharts](https://echarts.apache.org/handbook/zh/basics/import)

方式二：

```js
import 'echarts/lib/component/grid'	//xAxis,yAxis
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
```