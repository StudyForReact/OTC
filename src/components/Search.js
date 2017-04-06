import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { GOLBAL_WINDOW } from '../common'

const Search = ({...props}) => {
  return (
    <View style={styles.search}>
      <TouchableOpacity
        style={styles.searchCon}
        activeOpacity={0.8}
        onPress={props.searchAction}
      >
        <Text style={[styles.text, props.textStyle]}>{props.placeholder || '请输入要搜索的内容'}</Text>
      </TouchableOpacity>
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
    lineHeight: 30,
    width: GOLBAL_WINDOW.width - 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})
