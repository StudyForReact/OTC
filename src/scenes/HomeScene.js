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
import SectionTitle from '../components/SectionTitle'
import img from '../../static/banner_KAC-ANS.jpg'
import img1 from '../../static/banner_LZG-LZJ.jpg'
import Icon from '../components/Icon'
import LeftImg from '../../static/apple-touch-icon-152x152.png'
import RightImg from '../../static/mipmap-xhdpi/ic_home_category_search_bg.png'
import Util from '../common/libs'
import appApi from '../api/appApi'

@observer
export default class HomeScene extends PureComponent {

  static navigationOptions = {
    title: 'Home',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      },
      right: <Icon img={RightImg} iconAction={() => alert('暂未开放')} />,
      left: <Icon img={LeftImg} />,
      title: '蓝鲸淘'
    })
  }

  state = {
    unReadMsg: 0
  }

  navigateTo = () => {
    this.props.navigation.navigate('Home')
  }

  componentDidMount () {
    (async () => {
      await Util.get(appApi.banner, (response) => {
        console.log(response)
      }, error => {
        console.log(error)
      })
    })()
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
        <SectionTitle name="ANS各平台信息" showIcon />
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
