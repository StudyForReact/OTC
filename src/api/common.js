import { SERVICE_PATH } from '../common/index'

/**
 * 
 * 接口地址： http://future.otcgo.cn/api/v1/#/
 */

export default {
  /**
   * 对订单签名
   * @method POST
   * @param nonce  {String, length = 8} 随机字段
   * @param id     {Number} 订单ID
   * @param signature {String, length = 128} 使用私钥进行签名后的内容
   * @return {result, txid}
   */
  sign: `${SERVICE_PATH}/sign`,

  /**
   * 获取指定地址的UID
   * @method GET
   * @param address  {String, length = 34} 小蚁地址
   * @return {uid, address}
   */
  getUidByAddress (address) {
    return `${SERVICE_PATH}/uid/${address}`
  },

  /**
   * 获取最新区块数
   * @method GET
   * @return {height}
   */
  getBlockHeight: `${SERVICE_PATH}/block/count`,

  /**
   * 获取市场
   * @method GET
   * @return {marketId, neocny, name, price, rate, volumnOfLast24Hours}
   */
  getMarket: (market = 'neocny') => {
    return `${SERVICE_PATH}/markets/${market}`
  }
}