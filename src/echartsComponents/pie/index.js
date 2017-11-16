import React from 'react'
import echarts from 'echarts'
import 'echarts/lib/chart/pie' // 圆形图
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class pie extends React.Component {
  constructor(props) {
    super(props)
    this.initChrarts = this.initChrarts.bind(this)
  }
  initChrarts = () => {
    // titleArr (图表的title)
    // sourceArr (图表的数据)
    // color (图表的color)
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
    const { width='100%', height='200px' } = this.props
    return <div ref={ ID => this.ID = ID } style={{ width, height }}></div>
  }
}

export default pie