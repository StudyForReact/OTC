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
export default Util
