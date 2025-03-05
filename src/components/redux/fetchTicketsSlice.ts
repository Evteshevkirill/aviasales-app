/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchSearchId, fetchTickets } from '../Api/fetchTickets'
import { IFetchTicketsStateTypes, ITicket } from '../types/types'

const initialState: IFetchTicketsStateTypes = {
  tickets: [],
  searchId: null,
  loading: false,
  error: null,
}

const isAddTicketsAction = (action: any): action is PayloadAction<ITicket[]> => {
  return action.type === 'fetchTickets/addTickets'
}

const fetchTicketsSlice = createSlice({
  name: 'fetchTickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string | null
      })
      .addMatcher(isAddTicketsAction, (state, action: PayloadAction<ITicket[]>) => {
        state.tickets.push(...action.payload)
      })
  },
})

export default fetchTicketsSlice.reducer
