import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const BrandList = ({...props}) => {
  alert(props.dataSource.uri)
  return (
    <View
      key={props.key}
      style={styles.brandList}
    >
      <Image
        source={{uri: props.dataSource.uri}}
        resizeMode='cover'
        style={{
        width: '100%'
      }} />
      <Text style={{fontSize: 15, color: '#333'}}>
        {props.dataSource.brandName}
      </Text>
      <Text style={{fontSize: 15, color: '#333'}}>
        {props.dataSource.brandPrice}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  brandList: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 7
  }
})

export default BrandList
