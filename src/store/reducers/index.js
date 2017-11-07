import { combineReducers } from 'redux'

import home from './home'

export default function getReducers(navReducer) {
  return combineReducers({
    home,
    nav: navReducer
  })
}