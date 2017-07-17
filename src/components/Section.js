import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'
// components
import CellItem from './CellItem'
import BrandList from './BrandList'

/**
 * 块组件
 * @desc 暂时废弃
 * @param {Object} props 
 */
const Section = ({...props}) => {
  return (
    <View
      style={styles.section}
    >
      <CellItem name={props.name} />
      <View style={styles.brandContainer}>
        {
          props.dataSource.map((item, index) => {
            return <BrandList dataSource={item} key={index} />
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
    marginBottom: 15
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 100
  }
})

export default Section
