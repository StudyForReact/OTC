import { handleActions } from 'redux-actions'
import types from '../../actions/action-types'

const {
  HOME_DEMO
} = types

export default handleActions({
  [HOME_DEMO]: {
    next(state, action) {
      return { ret: true, data: action.payload }
    },

    throw(state, action) {
      return { ret: false, statusText: action.payload, data: [] }
    }
  }
}, { ret: true, statusText: '', data: [] })