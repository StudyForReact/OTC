import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image
} from 'react-native'
import { GOLBAL_WINDOW } from '../common'

const SliderItem = (props) => {
  let height = GOLBAL_WINDOW.width * props.ratio
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: props.index * GOLBAL_WINDOW.width,
        backgroundColor: '#000',
        width: GOLBAL_WINDOW.width,
        height: height
      }}
    >
      <Image
        resizeMode="cover"
        source={require('../../static/baner.jpg')}
        style={{
          width: GOLBAL_WINDOW.width,
          height: height
        }}
      />
    </View>
  )
}

export default class Silder extends Component {
  /**
   * 默认传入
   * @type {Object}
   */
  static defaultProps = {
    speed: 2000,
    autoPlay: false,
    ratio: 9 / 20,
    dataSource: [{
      path: ""
    }, {
      path: ""
    }]
  }
  /**
   * 类型检查
   * @type {Object}
   */
  static PropTypes = {
    speed: React.PropTypes.number,
    autoPlay: React.PropTypes.boolean,
    ratio: React.PropTypes.number
  }

  state = {
  }

  render () {
    return (
      <View
        style={{
          width: GOLBAL_WINDOW.width,
          height: GOLBAL_WINDOW.width * this.props.ratio,
          position: 'relative',
          backgroundColor: '#fff',
          overflow: 'hidden'
        }}
      >
        {
          this.props.dataSource.map((item, i) => {
            return (
              <SliderItem
                key={`${item.img}-${i}`}
                ratio={this.props.ratio}
                index={i}
              />
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  silderitem: {
    flex: 1
  }
})
