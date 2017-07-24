import React, { PureComponent } from 'react'
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { GiftedForm } from 'react-native-gifted-form'
import { observer } from 'mobx-react/native'
import Bg from '../../static/personBg.png'
import ProfileImg from '../../static/mipmap-xxhdpi/ic_user_normal.png'
import BalanceImg from '../../static/mipmap-xxhdpi/ic_user_money.png'
import TradeImg from '../../static/mipmap-xxhdpi/ic_user_dingdan.png'
import ClaimImg from '../../static/mipmap-xxhdpi/ic_user_collect.png'
import { GOLBAL_WINDOW } from '../common'
import RootStore from '../mobx'

const Row = GiftedForm.RowWidget

@observer
export default class ProfileScene extends PureComponent {
  
  constructor (props) {
    super(props)
    const { navigate } = this.props.navigation
    this.store = RootStore
    this.state =  {
      dataSource: [
        {
          title: '我的信息',
          image: ProfileImg,
          onPress: () => {
            this.store.isLogin ? navigate('MyProfile') : navigate('Login')
          }
        },
        {
          title: '我的资产',
          image: BalanceImg,
          onPress: () => {
            this.store.isLogin ? navigate('MyBalance') : navigate('Login')
          }
        },
        {
          title: '交易记录',
          image: TradeImg,
          onPress: () => {
            this.store.isLogin ? navigate('TradeNote') : navigate('Login')
          }
        },
        {
          title: '提取分红',
          image: ClaimImg,
          onPress: () => {
            this.store.isLogin ? navigate('Claim') : navigate('Login')
          }
        }
      ]
    }
  }

  static navigationOptions = {
    title: '个人中心',
    header: ({state, setParams, navigate}) => ({
      style: {
        backgroundColor: '#fff'
      },
      right: <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              RootStore.isLogin ? navigate('Setting') : navigate('Login')
            }}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 }}
          >
            <Text style={{ color: '#555'}}>设置</Text>
          </TouchableOpacity>
    })
  }

  render () {
    const { navigate } = this.props.navigation
    const { isLogin, user } = this.store
    return (
      <ParallaxScrollView
        headerBackgroundColor="#333"
        contentBackgroundColor="#f5f5f5"
        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
        backgroundSpeed={10}

        renderBackground={() => (
          <View key="background">
            <Image source={Bg}/>
            <View style={{position: 'absolute',
              top: 0,
              width: GOLBAL_WINDOW.width,
              backgroundColor: 'rgba(0,0,0,.2)',
              height: PARALLAX_HEADER_HEIGHT}}
            />
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={ styles.parallaxHeader }>
            <Image style={ styles.avatar } source={{
              uri: isLogin ? user.avater : 'https://avatars2.githubusercontent.com/u/19566733?v=4&s=100',
              width: AVATAR_SIZE,
              height: AVATAR_SIZE
            }}/>
            <Text style={ styles.sectionSpeakerText }>
              {isLogin ? user.name : '您还未登录'}
            </Text>
            <Text style={ styles.sectionTitleText } onPress={() => isLogin ? '' : navigate('Login')}>
              {isLogin ? '欢迎回来！' : '登录/注册'}
            </Text>
          </View>
        )}
      >
        <View style={{height: 300, marginTop: 15}}>
          {
            this.state.dataSource.map(item => <Row key={item.title} {...item} />)
          }
        </View>
      </ParallaxScrollView>
    )
  }
}

const AVATAR_SIZE = 80;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    overflow: 'hidden'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: GOLBAL_WINDOW.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    flexDirection: 'column',
    paddingTop: 0
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});