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
    dataSource: React.PropTypes.array.isRequried,
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
    bulletStyle: null,
    bulletsContainerStyle: null,
    chosenBulletStyle: null,
    onAnimateNextPage: () => {
      console.log('debug')
    },
    dataSource: () => []
  }

  render () {
    return (
      <View style={this.props.style}>
        <Carousel
          {...this.props}
        >
          {
            this.props.dataSource.map((item) => {
              return (
                <View style={this.props.style}>
                  <Image
                    style={this.props.style}
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
