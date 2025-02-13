import { combineReducers } from 'redux'

import transferCheckReducer from './transferCheckReducer'

const rootReducer = combineReducers({
  checkedTransfer: transferCheckReducer,
})

export default rootReducer
