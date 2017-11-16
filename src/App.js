import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as indexAction from './actions'
import asyncComponent from './AsyncComponent'
import { setBarOption, setGaugeOption, setPieOption2, setMapOption } from './echartsComponents/echartsConfig'

const BarEcharts = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./echartsComponents/bar')) //柱状图组件
const PieEcharts = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./echartsComponents/pie'))  //饼图组件
const GaugeEcharts = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./echartsComponents/gauge'))  //仪表盘组件
const MapEcharts = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./echartsComponents/map'))  //地图组件

class App extends Component {
  componentWillMount() {
    const { getEchartsBar, getEchartsGauge, getEchartsPie2 } = this.props
    getEchartsBar()
    getEchartsGauge()
    getEchartsPie2()
  }
  componentWillUnmount() {
    const { getClean } = this.props
    getClean()
  }
  render() {
    const { echartsBar, echartsPie2, echartsGauge } = this.props
    return (
      <div className="App">
        <div>
          <BarEcharts option={setBarOption(echartsBar)}/>
        </div>
        <br/>
        <div>
          <GaugeEcharts option={setGaugeOption(echartsGauge)}/>
        </div>
        <br/>
        <div>
          <PieEcharts option={setPieOption2(echartsPie2)} height={'500px'}/>
        </div>
        <br/>
        <div>
          <MapEcharts option={setMapOption()} height={'500px'}/>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => ({
  echartsBar: state.echartsBar,
  echartsPie: state.echartsPie,
  echartsPie2: state.echartsPie2,
  echartsGauge: state.echartsGauge,
})

const mapDispatchToProps = dispatch => ({
  getEchartsBar: bindActionCreators(indexAction.getEchartsBar,dispatch),
  getEchartsPie: bindActionCreators(indexAction.getEchartsPie,dispatch),
  getEchartsPie2: bindActionCreators(indexAction.getEchartsPie2,dispatch),
  getEchartsGauge: bindActionCreators(indexAction.getEchartsGauge,dispatch),
  getClean: bindActionCreators(indexAction.clearEchart,dispatch),
})

export default connect(mapStateToProp, mapDispatchToProps)(App)
