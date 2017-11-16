export const ECHARTS_BAR_ACTION = 'ECHARTS_BAR_ACTION'
export function getEchartsBar() {
  return {
    type: ECHARTS_BAR_ACTION,
  }
}

export const ECHARTS_PIE_ACTION = 'ECHARTS_PIE_ACTION'
export function getEchartsPie() {
  return {
    type: ECHARTS_PIE_ACTION,
  }
}

export const ECHARTS_PIE2_ACTION = 'ECHARTS_PIE2_ACTION'
export function getEchartsPie2() {
  return {
    type: ECHARTS_PIE2_ACTION,
  }
}

export const ECHARTS_GAUGE_ACTION = 'ECHARTS_GAUGE_ACTION'
export function getEchartsGauge() {
  return {
    type: ECHARTS_GAUGE_ACTION,
  }
}

export const CLEAR_ECHART = 'CLEAR_ECHART'
export function clearEchart() {
  return {
    type: CLEAR_ECHART,
  }
}