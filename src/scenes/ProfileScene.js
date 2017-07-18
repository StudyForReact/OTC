import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { GOLBAL_WINDOW } from '../common' 

export default class ProfileScene extends PureComponent {
  
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    title: '个人中心',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      }
    })
  }

  render () {
    return (
      <ParallaxScrollView
        backgroundColor="blue"
        contentBackgroundColor="white"
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <View style={{ height: 300, flex: 1 }}>
            <View></View>
          </View>
        )}>
        <View style={{ height: 500 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    )
  }
}