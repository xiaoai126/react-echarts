import React from 'react'
import echarts from 'echarts'
import 'echarts/lib/chart/bar'  // 引入图表 柱状图
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'

class gauge extends React.Component {
  constructor(props) {
    super(props)
    this.initChrarts = this.initChrarts.bind(this)
  }
  initChrarts = () => {
    const { option={} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts
    //设置options
    myChart.setOption(option)
    window.onresize = () => {
      myChart.resize()
    }
  }
  componentDidMount() {
    this.initChrarts()
  }
  componentDidUpdate() {
    this.initChrarts()
  }
  render() {
    const { width='100%', height='500px' } = this.props
    return <div ref={ ID => this.ID = ID } style={{ width, height }}></div>
  }
}

export default gauge