import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const BrandList = ({...props}) => {
  return (
    <View
      style={styles.brandList}
    >
      <Image source={uri: this.props.uri} style={{width: '100%', mode: Image.resizeMode.contain}} />
      <Text style={{fontSize: 15, color: '#333'}}>
        {this.props.brandName}
      </Text>
      <Text style={{fontSize: 15, color: '#333'}}>
        {this.props.brandPrice}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  brandList: {
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7
  }
})

export default BrandList
