import { StackNavigator } from 'react-navigation'
import App from './scenes/HomeScene'
import HomeScene from './scenes/CustomerScene'

// 路由配置
const ScenesRoute = {
  App: {
    screen: App,
    path: 'app'
  }
}

export default StackNavigator(ScenesRoute, {
  initialRouteName: 'App',
  headerMode: 'screen'
})
