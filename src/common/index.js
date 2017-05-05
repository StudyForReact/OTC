import {
  Dimensions
} from 'react-native'

// api路径
export const SERVICE_PATH = 'http://58caimi.com'

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
