import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import { observer } from 'mobx-react/native'
import RootStore from '../mobx'
import Slider from '../components/Slider'
import Section from '../components/Section'
import CellItem from '../components/CellItem'
import Icon from '../components/Icon'
import TradeTable from '../components/TradeTable'
import img from '../../static/banner_KAC-ANS.jpg'
import img1 from '../../static/banner_LZG-LZJ.jpg'
import LeftImg from '../../static/apple-touch-icon-152x152.png'
import RightImg from '../../static/mipmap-xhdpi/ic_home_category_search_bg.png'
import fetchUtil from '../common/libs'
import Api from '../api'
import { List } from 'immutable'

@observer
export default class HomeScene extends PureComponent {

  static navigationOptions = {
    title: '返回',
    header: ({state, setParams, navigate}) => ({
      style: {
        backgroundColor: '#fff'
      },
      right: <Icon img={RightImg} iconAction={() => navigate('Search')} />,
      left: <Icon img={LeftImg} />,
      title: <Text style={{
        fontSize: 18,
        color: '#000'
      }}>蓝鲸淘</Text>
    })
  }

  state = {
    unReadMsg: 0,
    timer: null,
    marketData: List([])
  }

  navigateTo = (name) => {
    this.props.navigation.navigate(name)
  }

  /**
   * 获取全部市场
   * 
   * @memberof HomeScene
   */
  getAllMarket = () => {
    const neocnyMarket = fetchUtil({
      url: Api.getMarket()
    })
    const gascnyMarket = fetchUtil({
      url: Api.getMarket('gascny')
    })
    const kacneoMarket = fetchUtil({
      url: Api.getMarket('kacneo')
    })
    return Promise.all([neocnyMarket, gascnyMarket, kacneoMarket])
  }

  /**
   * 轮询市场数据
   *
   * @memberof HomeScene
   */
  setIntervalMarket = () => {
    this.state.timer = setInterval(() => {
      
    }, 1000)
  }

  async componentDidMount () {
    const data = await this.getAllMarket()
    this.setState({
      marketData: this.state.marketData.concat(data.map((item, index) => ({
        market: item.marketId,
        newPrice: index === 2 ? '开拍学院' : 'neo区块链',
        highPrice: item.price,
        lowPrice: item.rate,
        tradeNum: item.volumnOfLast24Hours
      })))
    })
  }

  componentWillUnmount () {
    this.setState({
      timer: null
    })
  }
  render () {
    const { marketData } = this.state
    console.log(marketData)
    return (
      <View style={styles.container}>
        <Slider
          dataSource={[{
            url: img
          },{
            url: img1
          }]}
        />
        <CellItem name="NEO各平台信息" showIcon />
        <TradeTable/>
        <CellItem name="NEO交易区" showIcon />
        <TradeTable type={1} list={marketData.slice(2)} />
        <CellItem name="CNY交易区" showIcon />
        <TradeTable type={1} list={marketData.slice(0, 2)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  }
});
