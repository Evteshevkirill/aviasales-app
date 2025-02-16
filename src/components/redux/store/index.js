import { configureStore } from '@reduxjs/toolkit'

import transferReducer from './transferSlice'
import ticketsReducer from './ticketsSlice'

export default configureStore({
  reducer: {
    transfer: transferReducer,
    tickets: ticketsReducer,
  },
})
