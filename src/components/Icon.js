import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

const Icon = ({...props}) => {
  return (
    <View style={[{
      width: 44,
      height: 44,
    }, props.iconStyle]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.iconAction}
        style={styles.icon}
      >
        <Image source={props.img} style={{width: 23, height: 23}}/>
        {props.showDoit ? <View  style={styles.doit}></View> : null}
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
