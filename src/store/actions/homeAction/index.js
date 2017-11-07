import { createAction } from 'redux-actions'

import types from '../../actions/action-types'

const {
  HOME_DEMO
} = types

export const getHomeDemo = createAction(HOME_DEMO, () => {
  return [12, 324]
})