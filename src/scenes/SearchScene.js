import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from '../components/Icon'
import Search from '../components/Search'
import RightImg from '../../static/mipmap-xhdpi/ic_home_category_search_bg.png'

export default class SearchScene extends PureComponent {
  
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    title: '搜索',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      },
      title: <Search placeholder="请输入要查询的区块高度" enbleInput />,
      right: <TouchableOpacity
            activeOpacity={0.8}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 }}
          >
            <Text style={{ color: '#555'}}>搜索</Text>
          </TouchableOpacity>
    })
  }
  searchAction = () => {
    alert(1)
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Text>搜索结果</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rightButton: {
    width: 100,
    height: 44
  },
  buttonSearch: {
    color: '#000',
    fontSize: 14
  }
})