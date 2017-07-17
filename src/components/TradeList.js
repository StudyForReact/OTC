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
      style={styles.TradeList}
    >
      <Text>ssss</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  TradeList: {
    height: 40,
    position: 'relative',
    flexDirection: 'row',
    padding: 5
  }
})

export default TradeList
