import {
  Dimensions
} from 'react-native'

// api路径
export const SERVICE_PATH = 'http://future.otcgo.cn/api'

// 获取设备的宽高
export const GOLBAL_WINDOW = {
  width: Dimensions.get('window').width,
  heiht: Dimensions.get('window').height
}

// app颜色定义
export const COLOR_SETTING = {
  price: '',
  normalText: '#666',
  darkText: '#333',
  weakText: '#999',
  borderColor: '#eee',
  white: '#fff',
  black: '#000',
  green: '#'
}

export const TRADE_HEAD = [{
  text: '交易市场',
  key: '1'
},{
  text: '最新价',
  key: '2'
}, {
  text: '最高价',
  key: '3'
}, {
  text: '最低价',
  key: '4'
}, {
  text: '交易量',
  key: '5'
}]