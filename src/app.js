import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});