import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
// components
import SectionTitle from './SectionTitle'
import BrandList from './BrandList'

const Section = ({...props}) => {
  const { name, showIcon } = props
  return (
    <View
      style={styles.section}
    >
      <SectionTitle name={showIcon} showIcon={showIcon}  />
      <View style={styles.brandContainer}>
        {
          props.dataSource.map((item) => {
            return <BrandList {...props} />
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 5
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Section
