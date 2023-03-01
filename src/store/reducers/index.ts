import { combineReducers } from 'redux'
import { tokenReducer } from '../slice'

export const rootReducer = combineReducers({
  tokenStore: tokenReducer,
})
