import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const SectionTitle = ({...props}) => {
  const { name, showIcon } = props
  return (
    <View
      style={styles.sectionTitle}
    >
      <Text>
        {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7
  }
})

export default SectionTitle
