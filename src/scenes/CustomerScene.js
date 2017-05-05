import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import backImg from '../../static/mipmap-hdpi/ic_back_arrow_bg.png'
import Icon from '../components/Icon'

export default class HomeScene extends PureComponent {
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    title: '客服',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      },
      titleStyle: {
        color: '#000'
      },
      tintColor: '#999'
    })
  }

  state = {
    title: '我改变了title'
  }

  render () {
    return (
      <View style={{flex: 1,backgroundColor: '#f5f5f5',flexDirection: 'column'}}>
        <Text style={{fontSize: 15}}>Home</Text>
      </View>
    )
  }
}
