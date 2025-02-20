/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import { fetchSearchId, fetchTickets } from '../Api/fetchTickets'

const fetchTicketsSlice = createSlice({
  name: 'fetchTickets',
  initialState: {
    tickets: [],
    searchId: null,
    loading: false,
    error: null,
  },
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
        state.error = action.payload
      })
      .addCase('fetchTickets/addTickets', (state, action) => {
        state.tickets.push(...action.payload)
      })
  },
})

export default fetchTicketsSlice.reducer
