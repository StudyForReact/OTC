
import React from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
// Scene
import HomeScene from './scenes/HomeScene'
import ProfileScene from './scenes/ProfileScene'
import IcoScene from './scenes/IcoScene'
import SearchScene from './scenes/SearchScene'
import LoginScene from './scenes/LoginScene'
import RegistScene from './scenes/RegistScene'
import SettingScene from './scenes/SettingScene'
import MyBalanceScene from './scenes/MyBalanceScene'
import MyProfileScene from './scenes/MyProfileScene'
import ClaimScene from './scenes/ClaimScene'
import TradeNoteScene from './scenes/TradeNoteScene'

const styles = StyleSheet.create({
  icon: {
    width: 23,
    height: 23
  }
})
const HomeRouter = TabNavigator({
  // 默认首页
  Home: {
    screen: HomeScene,
    path: 'index/home',
    navigationOptions: {
      tabBar: {
        label: '首页',
        icon: ({tintColor}) => (
          <Image
              source={require('../static/mipmap-xhdpi/ic_home_normal.png')}
              style={[{tintColor: tintColor}, styles.icon]}
          />
        ),
      },
    }
  },
  // ico
  Ico: {
    screen: IcoScene,
    path: 'index/Ico',
    navigationOptions: {
      tabBar: {
        label: 'ico专区',
        icon: ({tintColor}) => (
          <Image
              source={require('../static/mipmap-xhdpi/address_empty.png')}
              style={[{tintColor: tintColor},styles.icon]}
          />
        ),
      },
    }
  },
  // 个人中心
  Profile: {
    screen: ProfileScene,
    path: 'index/profile',
    navigationOptions: {
      tabBar: {
        label: '个人中心',
        icon: ({tintColor}) => (
          <Image
              source={require('../static/mipmap-xhdpi/ic_user_normal.png')}
              style={[{tintColor: tintColor}, styles.icon]}
          />
        ),
      },
    }
  }
}, {
  animationEnabled: false, // 切换页面时不显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 禁止左右滑动
  backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#009cff', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  },
})

// 路由配置headerMode
const ScenesRoute = {
  Index: {
    screen: HomeRouter,
    path: 'index'
  },
  Search: {
    screen: SearchScene,
    path: 'search'
  },
  Login: {
    screen: LoginScene,
    path: 'login',
    headerMode: 'float'
  },
  Regist: {
    screen: RegistScene,
    path: 'regist',
    headerMode: 'float'
  },
  Setting: {
    screen: SettingScene,
    path: 'setting'
  },
  MyBalance: {
    screen: MyBalanceScene,
    path: 'myBalance'
  },
  MyProfile: {
    screen: MyProfileScene,
    path: 'myProfile'
  },
  TradeNote: {
    screen: TradeNoteScene,
    path: 'tradeNote'
  },
  Claim: {
    screen: ClaimScene,
    path: 'claim'
  }
}

export default StackNavigator(ScenesRoute, {
  initialRouteName: 'Index',
  headerMode: 'screen'
})
