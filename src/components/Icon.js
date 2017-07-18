import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

/**
 * Icon 组件
 * @param {String} img icon图片资源
 * @param {String} showDoit 是否显示红点
 * @param {String} iconAction 点击事件
 * @param {String} iconStyle icon样式
 */
const Icon = ({...props}) => {
  const { img, showDoit, iconAction, iconStyle } = props
  return (
    <View style={[{
      width: 44,
      height: 44,
    }, iconStyle]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={iconAction}
        style={styles.icon}
      >
        <Image source={img} style={{width: 23, height: 23}}/>
        {showDoit ? <View  style={styles.doit}></View> : null}
      </TouchableOpacity>
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
  icon: {
    position: 'relative',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  doit: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red'
  }
})
