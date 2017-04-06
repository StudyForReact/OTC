import {
  Dimensions
} from 'react-native'

// api路径
export const SERVICE_PATH = 'http://aten35.ticp.net:8081/yffs/rest/app'

// 获取设备的宽高
export const GOLBAL_WINDOW = {
  width: Dimensions.get('window').width,
  heiht: Dimensions.get('window').height
}
