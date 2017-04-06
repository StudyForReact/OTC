import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const SectionTitle = ({...props}) => {
  return (
    <View
      style={styles.sectionTitle}
    >
      <Text>
        Section
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
