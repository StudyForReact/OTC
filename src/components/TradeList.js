import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import { GOLBAL_WINDOW } from '../common' 

/**
 * 交易列表组件
 * @param {String} market 交易市场 
 * @param {String} newPrice 最新价 
 * @param {String} highPrice 最高价 
 * @param {String} lowPrice 最低价 
 * @param {String} tradeNum 交易量 
 * @return {React Component}
 */
const TradeList = ({...props}) => {
  const { market = '元宝网', newPrice = '0.00', highPrice = '0.00', lowPrice = '0.00', tradeNum = '0' } = props
  return (
    <View
      key={props.key}
      style={styles.TradeList}
    >
      <Text style={styles.listText}>{ market }</Text>
      <Text style={[styles.listText, styles.red]}>{ newPrice }</Text>
      <Text style={[styles.listText, styles.green]}>{ highPrice }</Text>
      <Text style={styles.listText}>{ lowPrice }</Text>
      <Text style={styles.listText}>${ tradeNum }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  TradeList: {
    position: 'relative',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  listText: {
    color: '#666',
    fontSize: 14,
    width: GOLBAL_WINDOW.width / 5,
    textAlign: 'center'
  },
  red: {
    color: '#e40101'
  },
  green: {
    color: '#65ac05'
  }
})

export default TradeList
