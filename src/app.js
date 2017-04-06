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
import Util from './common/libs'
import appApi from './api/appApi'

@observer
export default class App extends PureComponent {

  static navigationOptions = {
    title: 'App',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      },
      right: <Icon img={RightImg} iconAction={() => alert('right')} />,
      left: <Icon img={LeftImg} iconAction={() => alert('left')} />,
      title: <Search action={() => alert('search')} />
    })
  }
  state = {
    unReadMsg: 0
  }

  navigateTo = () => {
    this.props.navigation.navigate('Home')
  }

  componentDidMount () {
    (async () => {
      await Util.get(appApi.banner, (response) => {
        console.log(response)
      }, error => {
        console.log(error)
      })
    })()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={RootStore.barStyle}
        />
        <Slider
          dataSource={[{url: img},{url: img}]}
          ratio={0.4}
          delay={6000}
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
