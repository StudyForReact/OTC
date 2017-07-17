import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

const TradeList = ({...props}) => {
  return (
    <View
      key={props.key}
      style={styles.brandList}
    >
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

export default TradeList
