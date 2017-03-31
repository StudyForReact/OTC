import React from 'react'
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

export const Header = (props) => {
  let Navigator = []
  // 左侧按钮不为空
  if (props.leftIcon !== undefined) {
    Navigator.push(
      <TouchableOpacity
        key={'leftIcon'}
        activeOpacity={0.75}
        style={styles.leftIcon}
        onpress={props.leftIconAction}
      >
        <Image source={props.leftIcon} style={styles.iconImage}></Image>
      </TouchableOpacity>
    )
  }
  // 标题
  if (props.title !== undefined) {
    Navigator.push(
      <Text style={style.title}>{props.title}</Text>
    )
  }

  return (
    <View style={styles.header}>
      <Text>header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 20,
    height: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});