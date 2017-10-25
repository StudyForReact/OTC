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
    unReadMsg: 0
  }

  navigateTo = (name) => {
    this.props.navigation.navigate(name)
  }

  componentDidMount () {
    fetchUtil({
      url: Api.getBlockHeight
    })
    .then((data) => {
      alert(data)
    })
    .catch((err) => {
      alert(err)
    })
  }

  render () {
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
        <TradeTable />
        <CellItem name="NEO交易区" showIcon />
        <TradeTable type={1} />
        <CellItem name="CNY交易区" showIcon />
        <TradeTable type={1} />
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
