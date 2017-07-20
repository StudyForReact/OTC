import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { GiftedForm } from 'react-native-gifted-form'
import { observer } from 'mobx-react/native'
import RootStore from '../mobx'

const Row = GiftedForm.RowWidget
const RowValue = GiftedForm.RowValueWidget

@observer

export default class SettingScene extends PureComponent {
  
  constructor (props) {
    super(props)
  }

  static navigationOptions = {
    title: '设置',
    header: ({state, setParams}) => ({
      style: {
        backgroundColor: '#fff'
      }
    })
  }

  render () {
    const { logoutAction } = RootStore
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <Row  title="清除缓存" />
        <Row title="客服" />
        <Row title="修改密码" />

        <GiftedForm.SeparatorWidget />

        <RowValue title="版本" value='1.0.0' />

        <GiftedForm.SeparatorWidget />

        <TouchableOpacity
          key={'leftIcon'}
          activeOpacity={0.75}
          style={styles.logout}
          onPress={() => logoutAction}
        >
          <Text style={{ color: '#009cff', fontSize: 16 }}>退出登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logout: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})