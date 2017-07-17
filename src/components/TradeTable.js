import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import TradeList from './TradeList'
import { TRADE_HEAD, GOLBAL_WINDOW } from '../common' 

const TradeHeader = ({...props}) => {
  const { data } = props
  return (
    <View style={styles.tradeHeader}>
      {
        data.map(item => {
          return <View key={item.key}>
            <Text style={styles.headeListText}>{ item.text }</Text>
          </View>
        })
      }
    </View>
  )
}

const TradeTable = ({...props}) => {
  return (
    <View style={styles.tableWrap}>
      <TradeHeader data={TRADE_HEAD} />
      <TradeList />
    </View>
  )
}

const styles = StyleSheet.create({
  tableWrap: {
    backgroundColor: '#fff'
  },
  tradeHeader: {
    padding: 7,
    width: GOLBAL_WINDOW.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headeListText: {
    color: '#000'
  }
})
export default TradeTable