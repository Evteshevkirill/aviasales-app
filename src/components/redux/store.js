import { configureStore } from '@reduxjs/toolkit'

import transferFilterReducer from './transferFilterSlice'
import ticketsReducer from './fetchTicketsSlice'
import ticketsFilterReducer from './ticketsFilterSlice'

export const store = configureStore({
  reducer: {
    fetchTickets: ticketsReducer,
    transferFilter: transferFilterReducer,
    ticketsFilter: ticketsFilterReducer,
  },
})
