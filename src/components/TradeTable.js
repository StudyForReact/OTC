import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import TradeList from './TradeList'
import { TRADE_HEAD, GOLBAL_WINDOW } from '../common' 

/**
 * 交易块头部
 * @param {Array} data 交易块头部数据源
 */
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

/**
 * 交易块
 * @param {Array} data 交易块数据源
 */
const TradeTable = ({...props}) => {
  return (
    <View style={styles.tableWrap}>
      <TradeHeader data={TRADE_HEAD} />
      <TradeList />
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
    color: '#000',
    width: GOLBAL_WINDOW.width / 5,
    textAlign: 'center'
  }
})
export default TradeTable