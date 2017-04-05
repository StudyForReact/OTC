import React, { Component } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class HomeScene extends Component {

  static navigationOptions = {
    title: 'Home',
    header: {
      title: <Text>帅哥</Text>,
      backTitle: '返回',
      style: {
        marginTop: -22
      }
    }
  }

  render () {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 15}}>Home</Text>
      </View>
    )
  }
}
