### react-echarts

- 这个不是install的
- 这个是用echarts 写的components
- 可以动态加载  
- redux更新   图表更新
- 异步加载是参考github上某个项目的(我直接拿来用了[项目找不到了])


##### 使用方法

- 异步加载使用说明  

```
import asyncComponent from './AsyncComponent'
const BarEcharts = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./echartsComponents/bar')) //柱状图组件
const PieEcharts = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./echartsComponents/pie'))  //饼图组件

```

#####  模块引入说明

- 例如下面的option [option参考echarts图表配置手册]

```

// import echarts from 'echarts'      echarts图表模块
// 使用pie
// 'echarts/lib/chart/' 是图表组件目录
// import 'echarts/lib/chart/pie'  目录 'echarts/lib/chart/'
// 'echarts/lib/component/' 是option配置组件目录

{
  tooltip: {   // import 'echarts/lib/component/tooltip'  目录 'echarts/lib/component/'
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: data.titleArr
  },
  series: [  // import 'echarts/lib/component/legend' 目录 'echarts/lib/component/'
    {
      name:'访问来源',
      type:'pie',
      radius: ['100%', '80%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: data.sourceArr
    }
  ]
}
```