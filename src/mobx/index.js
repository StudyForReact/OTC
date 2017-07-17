import { observable } from 'mobx'

class RootStore {
  // 状态栏
  @observable barStyle = 'default'
  // 用户信息保存
  @observable user = {}
  // toast对象
  @observable toast = {
    show: false,
    content: '',
    time: 2000
  }
  // 获取当前是否记录登陆状态
  @observable isRemenber = false
}

const rootStore = new RootStore()

export default rootStore
