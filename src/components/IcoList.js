import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
/**
 * ICO 列表
 * @param {*} param0 
 */
const IcoList = ({...props}) => {
  return (
    <View
      key={props.key}
      style={styles.icoList}
    >
      <Image
        source={{uri: props.dataSource.uri}}
        resizeMode='cover'
        style={{
        width: '100%'
      }} />
      <Text style={{fontSize: 15, color: '#333'}}>
        {props.dataSource.icoName}
      </Text>
      <Text style={{fontSize: 15, color: '#333'}}>
        {props.dataSource.icoPrice}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icoList: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 7
  }
})

export default IcoList
