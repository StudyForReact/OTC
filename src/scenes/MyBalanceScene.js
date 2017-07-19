import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

export default class MyBalanceScene extends PureComponent {
  
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    title: '我的资产',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      }
    })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
      </View>
    )
  }
}