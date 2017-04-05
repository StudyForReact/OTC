import React, {} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const Search = ({...props}) => {
  return (
    <View style={styles.search}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.searchAction}
      >
        <Text style={styles.text}>{props.placeholder || '请输入要搜索的内容'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    borderColor: '#eee'
  },
  text: {
    fontSize: 15
  }
})
