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

@observer
export default class App extends PureComponent {

  static navigationOptions = {
    title: 'App'
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
        <Slider
          dataSource={[{url: img},{url: img}]}
        />
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
