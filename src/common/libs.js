import axios from 'axios'

let Util = {
  get (url, successCall, errorCall) {
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((response) => successCall(response))
    .catch((err) => errorCall(err))
  },
  post (url, data, successCall, errorCall) {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => successCall(response))
    .catch((err) => errorCall(err))
  }
}

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
  alert(url)
  return new Promise((resolve, reject) => {
    typeof axios[method] === 'function'
    ? axios[method](url, param)
    .then(data => resolve(data))
    .catch(error => reject(error))
    : console.warn(`传入的请求方式不对，不存在${method}方法`)
  })
}
