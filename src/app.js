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

@observer
export default class App extends PureComponent {

  static navigationOptions = {
    title: 'APP',
    headerMode: 'screen',
    header: {
      visible: false,
      style: {
        marginTop: -22
      },
      title: <Search placeholder="请输入" searchAction={() => {alert('s')}} />
    }
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
          hidden
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
