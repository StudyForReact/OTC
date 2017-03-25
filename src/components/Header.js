import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = (props) => {
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
  }
});