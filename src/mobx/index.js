import { observable } from 'mobx'

class RootStore {
  @barStyle = 'light-content'
  @userInfo = {}
}

const rootStore = new RootStore()
export default rootStore
