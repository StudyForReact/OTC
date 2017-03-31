/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry
} from 'react-native';

import ScenesRoute from './src/routes'

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}
console.log(__DEV__)

AppRegistry.registerComponent('firstRN', () => ScenesRoute);
