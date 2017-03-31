import { StackNavigator } from 'react-navigation'
import App from './app'
import HomeScene from './scenes/HomeScene'

const ScenesRoute = {
  App: {
    screen: App
  },
  Home: {
    screen: HomeScene
  }
}

export default StackNavigator(ScenesRoute)
