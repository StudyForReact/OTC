import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native'
import RootStore from './mobx'

@observer
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showToast: false
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={RootStore.barStyle}
        ></StatusBar>
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
