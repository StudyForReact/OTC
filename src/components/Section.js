import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const Section = ({...props}) => {
  return (
    <View
      style={styles.section}
    >
      <Text>
        Section
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 5
  }
})

export default Section
