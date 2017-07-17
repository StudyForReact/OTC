import React, { Component } from 'react'
import { NetInfo } from 'react-native'

/**
 * 监听组件的网络变化高阶组件装饰器
 * @param {React Component} WrappedComponent 
 */
const NetInfoDecorator = WrappedComponent => class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isConnected: true
    }
  }

  componentDidMount () {
    NetInfo.isConnected.addEventListener('change', this._handleNetworkConnectivityChange)
  }

  _handleNetworkConnectivityChange = isConnected => this.setState({isConnected})

  render () {
    return <WrappedComponent {...this.props} {...this.state} />
  }
}

export default NetInfoDecorator
