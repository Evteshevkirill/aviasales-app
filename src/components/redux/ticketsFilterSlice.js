/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const ticketsFilterSlice = createSlice({
  name: 'ticketsFilter',
  initialState: { lowPrice: true, fast: false, optimal: false },
  reducers: {
    handlePrice(state) {
      state.lowPrice = true
      state.fast = false
      state.optimal = false
    },
    handleFast(state) {
      state.lowPrice = false
      state.fast = true
      state.optimal = false
    },
    handleOptimal(state) {
      state.lowPrice = false
      state.fast = false
      state.optimal = true
    },
  },
})
export const { handlePrice, handleFast, handleOptimal } = ticketsFilterSlice.actions
export default ticketsFilterSlice.reducer
