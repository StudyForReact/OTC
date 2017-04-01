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
import Slider from './components/Silder'

@observer
export default class App extends PureComponent {

  static navigationOptions = {
    title: 'App'
  }

  navigateTo = () => {
    alert('jump')
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={RootStore.barStyle}
        />
        <Slider></Slider>
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
