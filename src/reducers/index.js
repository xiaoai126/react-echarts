import { combineReducers } from 'redux'
import { ECHARTS_BAR_ACTION, ECHARTS_PIE_ACTION, ECHARTS_PIE2_ACTION, ECHARTS_GAUGE_ACTION, CLEAR_ECHART } from '../actions'

const barObj = {
  color: '#3398DB',
  titleArr: [],
  sourceArr:[],
}
const echartsBar = (state=barObj, { type }) => {
  switch (type) {
    case ECHARTS_BAR_ACTION:
      state = {
        color: '#3398DB',
        titleArr: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        sourceArr: [10, 52, 200, 334, 390, 330, 220],
      }
      return state
    case CLEAR_ECHART:
      return state=barObj
    default:
      return state
  }
}

const pieObj = {
  titleArr: [],
  sourceArr:[],
}
const echartsPie = (state=pieObj, { type }) => {
  switch (type) {
    case ECHARTS_PIE_ACTION:
      state = {
        titleArr: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        sourceArr: [
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1548, name:'搜索引擎'}
        ],
      }
      return state
    case CLEAR_ECHART:
      return state=pieObj
    default:
      return state
  }
}


const pieObj2 = {
  scale: 1,
  echartData: [{
    value: 0,
    name: '没有数据'
},{
  value: 0,
  name: '没有数据'
}],
}
const echartsPie2 = (state=pieObj2, { type }) => {
  switch (type) {
    case ECHARTS_PIE2_ACTION:
      state = {
        scale: 1,
        echartData: [{
            value: 2154,
            name: '清华大学'
        }, {
            value: 3854,
            name: '潍坊学院'
        }, {
            value: 3515,
            name: '青岛职业技术学院'
        }, {
            value: 3515,
            name: '淄博师范高等专科'
        }, {
            value: 3854,
            name: '鲁东大学'
        }, {
            value: 2154,
            name: '山东师范大学'
        }],
      }
      return state
    case CLEAR_ECHART:
      return state=pieObj2
    default:
      return state
  }
}


const gaugeObj = {
  sourceArr: [{value: 0, name: '没有数据请获取数据'}]
}

const echartsGauge = (state=gaugeObj, { type }) => {
  switch (type) {
    case ECHARTS_GAUGE_ACTION:
      state = {
        sourceArr: [{value: 80, name: '完成率'}],
      }
      return state
    case CLEAR_ECHART:
      return state=gaugeObj
    default:
      return state
  }
}

export default combineReducers({
  echartsBar,
  echartsPie,
  echartsPie2,
  echartsGauge,
})