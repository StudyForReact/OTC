import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
import iconImg from '../../static/mipmap-xhdpi/ic_right_arrow_bg.png'
import Icon from './Icon'

/**
 * 块组件标题
 * @desc 暂时废弃
 * @param {Object} props 
 */
const CellItem = ({...props}) => {
  const { name, showIcon, customComponent, text = '去交易', link, icon } = props
  let component = null
  if (customComponent) {
    component = customComponent
  } else {
    component = showIcon ? <View style={styles.icon}><Text style={{
      fontSize: 14,
      color: '#666'
    }}>{ text }</Text><Image style={styles.iconImg} source={iconImg}  /></View> : null
  }
  return (
    <View
      style={styles.sectionTitle}
    >
      {icon ? <Icon /> : null}
      <Text style={styles.text}>
        {name}
      </Text>
      { component }
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    marginTop: 10
  },
  text: {
    fontSize: 16,
    color: '#333'
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconImg: {
    width: 22,
    height: 22
  }
})

export default CellItem
