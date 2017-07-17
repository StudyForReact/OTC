import React, { PureComponent } from 'react'
import {
  View,
  StatusBar,
  Animated,
  StyleSheet,
  Platform,
  Text
} from 'react-native'
import { observer } from 'mobx-react/native'
import NetInfoDecorator from './common/NetInfoDecorator'
import AppNavigator from './routesStart'
import RootStore from './mobx'

@NetInfoDecorator
@observer
export default class App extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      promptPosition: new Animated.Value(0)
    }
  }

  componetWillReceiveProps (nextProps) {
    const { isConnected } = nextProps
    // 无网络连接
    if (!isConnected) {
      Animated.timing(this.state.promptPosition, {
        toValue: 1,
        duration: 200
      }).start(() => {
        setTimeout(() => {
          Animated.timing(this.state.promptPosition, {
            toValue: 0,
            duration: 200
          }).start()
        }, 2000)
      })
    }
  }

  render () {
    let positionY = this.state.promptPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, Platform.OS === 'ios' ? 20 : 0]
    })
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={RootStore.barStyle} />
        <AppNavigator />
        <Animated.View style={[styles.netInfoView, {top: positionY}]}>
          <Text style={styles.netInfoPrompt}>网络连接不上，请检查网络后再试</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  netInfoView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    position: 'absolute',
    right: 0,
    left: 0,
    backgroundColor: '#f5f5f5'
  },
  netInfoPrompt: {
    color: 'white',
    fontWeight: 'bold'
  }
})
