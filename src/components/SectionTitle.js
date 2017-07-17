import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
import iconImg from '../../static/mipmap-xhdpi/ic_right_arrow_bg.png'

/**
 * 块组件标题
 * @desc 暂时废弃
 * @param {Object} props 
 */
const SectionTitle = ({...props}) => {
  const { name, showIcon, customComponent, text } = props
  let component = null
  if (customComponent) {
    component = customComponent
  } else {
    component = showIcon ? <View style={styles.icon}><Text style={{
      fontSize: 14,
      color: '#666'
    }}>去交易</Text><Image style={styles.iconImg} source={iconImg}  /></View> : null
  }
  return (
    <View
      style={styles.sectionTitle}
    >
      <Text style={styles.text}>
        {name}
      </Text>
      {component}
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

export default SectionTitle
