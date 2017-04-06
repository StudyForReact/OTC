import React, { PureComponent } from 'react'
import {
  View,
  Image
} from 'react-native'
import Carousel from 'react-native-looped-carousel'
import { GOLBAL_WINDOW } from '../common'

export default class Slider extends PureComponent {
  static propTypes = {
    delay: React.PropTypes.number,
    style: React.PropTypes.object,
    ratio: React.PropTypes.number,
    autoPlay: React.PropTypes.bool,
    pageInfo: React.PropTypes.bool,
    onAnimateNextPage: React.PropTypes.func,
    arrows: React.PropTypes.bool
  }

  static defaultProps = {
    delay: 2000,
    style: {
      'width': GOLBAL_WINDOW.width,
      'height': GOLBAL_WINDOW.width * 0.54,
    },
    ratio: 0.54,
    autoPlay: true,
    pageInfo: false,
    pageInfoTextSeparator: "/",
    pageInfoTextStyle: null,
    arrows: false,
    arrowsStyle: null,
    arrowsContainerStyle: null,
    leftArrowText: 'Left',
    rightArrowText: 'Right',
    bullets: true,
    bulletStyle: {
      margin: 5,
      backgroundColor: 'rgba(0,0,0,.5)',
      borderWidth: 0
    },
    bulletsContainerStyle: {
      bottom: -10
    },
    chosenBulletStyle: {
      margin: 5,
      backgroundColor: '#52B124'
    },
    onAnimateNextPage: () => {
      console.log('debug')
    },
    dataSource: []
  }

  render () {
    return (
      <View style={[this.props.style, {height: GOLBAL_WINDOW.width * this.props.ratio}]}>
        <Carousel
          {...this.props}
          style={{height: GOLBAL_WINDOW.width * this.props.ratio}}
        >
          {
            this.props.dataSource.map((item, index) => {
              return (
                <View style={[this.props.style, {height: GOLBAL_WINDOW.width * this.props.ratio}]} key={index}>
                  <Image
                    style={[this.props.style, {height: GOLBAL_WINDOW.width * this.props.ratio}]}
                    resizeMode='cover'
                    source={item.url}
                  >
                  </Image>
                </View>
              )
            })
          }
        </Carousel>
      </View>
    )
  }
}
