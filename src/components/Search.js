import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import { GOLBAL_WINDOW } from '../common'

/**
 * 搜索组件
 * 暂时废弃
 * @param {Object} props 
 */
const Search = ({...props}) => {
  const { action, textStyle, enbleInput } = props
  return (
    <View style={styles.search}>
      {
        enbleInput
        ? <TextInput
            style={styles.textInput}
            editable={true}
            maxLength={40}
            placeholder="请输入要搜索的区块高度"
            autoFocus={true}
          />
        : <TouchableOpacity
            style={styles.searchCon}
            activeOpacity={0.8}
            onPress={action}
          >
            <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
              <Image source={require('../../static/mipmap-hdpi/ic_home_category_search_bg.png')} style={{width: 15, height: 15}}/>
            </View>
            <Text style={[styles.text, textStyle]}>{props.placeholder || '请输入要搜索的内容'}</Text>
          </TouchableOpacity>
      }
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 14,
    color: '#999'
  },
  searchCon: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 30,
    width: GOLBAL_WINDOW.width - 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#eee',
    color: '#999',
    height: 35,
    width: 250,
    padding: 10,
    fontSize: 14,
    borderRadius: 10,
  }
})
