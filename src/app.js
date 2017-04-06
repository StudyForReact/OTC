import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Button
} from 'react-native'
import { observer } from 'mobx-react/native'
import RootStore from './mobx'
import Slider from './components/Slider'
import img from '../static/baner.jpg'
import Search from './components/Search'
import Icon from './components/Icon'
import LeftImg from '../static/mipmap-xhdpi/ic_home_menu_bg.png'
import RightImg from '../static/mipmap-xhdpi/ic_home_msg_bg.png'
import Header from './components/Header'

@observer
export default class App extends PureComponent {

  static navigationOptions = {
    drawer: () => {
      label: 'Home'
    }
  }
  state = {
    unReadMsg: 0
  }

  navigateTo = () => {
    this.props.navigation.navigate('Home')
  }

  componentDidMount () {
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={RootStore.barStyle}
        />
        <Header
          rightIcon={RightImg}
          leftIcon={LeftImg}
          leftIconAction={() => this.props.navigation.navigate('DrawerOpen')}
        />
        <Slider
          dataSource={[{url: img},{url: img}]}
        />
        <Button
          onPress={this.navigateTo}
          title="点我跳转"
        >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});
