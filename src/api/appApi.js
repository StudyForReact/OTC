import { SERVICE_PATH } from '../common/index'

// 首页加载的api接口
export default {
  /**
   * 获取首页资源位接口
   * @params appId  {Number} 应用ID
   * @params posId  {Number} 资源位ID
   * @params device {Number} 适用设备类型
   * @params ppi    {Number} 图片质量 （ 以iOS定义为标准定义：1、1x；2、2x；3、3x，默认为：2，即2x。）
   * 接口地址： http://docs.58caimi.com/apidocs/#api-ads-getAds
   */
  banner: `${SERVICE_PATH}/v1/crm/ads`
}
