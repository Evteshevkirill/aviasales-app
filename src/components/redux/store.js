import { configureStore } from '@reduxjs/toolkit'

import transferFilterReducer from './transferFilterSlice'
import ticketsReducer from './fetchTicketsSlice'
import ticketsFilterReducer from './ticketsFilterSlice'

export default configureStore({
  reducer: {
    fetchTickets: ticketsReducer,
    transferFilter: transferFilterReducer,
    ticketsFilter: ticketsFilterReducer,
  },
})
