import axios from 'axios'
import { path } from './constant'

/**
 * 简单封装请求方法
 * 未做全局的配置，例如401状态下的统一处理
 *
 * @export
 * @param {any} opt
 * @returns {Promise}
 */
export default function fetchUtil (opt) {
  const { method = 'get', params, url } = opt
  const param = method === 'get' ? {
    params
  } : params
  return new Promise((resolve, reject) => {
    typeof axios[method] === 'function'
    ? axios[method](path + url, param)
    .then(({ data }) => resolve(data))
    .catch(error => reject(error))
    : console.warn(`传入的请求方式不对，不存在${method}方法`)
  })
}
