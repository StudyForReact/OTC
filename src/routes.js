import { DrawerNavigator } from 'react-navigation'
import App from './app'
import HomeScene from './scenes/HomeScene'

// 路由配置
const ScenesRoute = {
  App: {
    screen: App,
    path: 'app'
  },
  Home: {
    screen: HomeScene,
    path: 'home'
  }
}

export default DrawerNavigator(ScenesRoute)
