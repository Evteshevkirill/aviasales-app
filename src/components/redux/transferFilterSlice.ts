/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const transferSlice = createSlice({
  name: 'transferFilter',
  initialState: { checkedAll: true, checkedNot: true, checkedOne: true, checkedTwo: true, checkedThree: true },
  reducers: {
    checkAll(state) {
      Object.keys(state).forEach((key) => {
        const keyTyped = key as keyof typeof state
        state[keyTyped] = true
      })
    },
    checkNot(state) {
      state.checkedNot = !state.checkedNot
    },
    checkOne(state) {
      state.checkedOne = !state.checkedOne
    },
    checkTwo(state) {
      state.checkedTwo = !state.checkedTwo
    },
    checkThree(state) {
      state.checkedThree = !state.checkedThree
    },
    checkAllAuto(state) {
      state.checkedAll = true
    },
    unCheckAll(state) {
      state.checkedAll = false
    },
    clearCheck(state) {
      Object.keys(state).forEach((key) => {
        const keyTyped = key as keyof typeof state
        state[keyTyped] = true
      })
    },
  },
})

export const { checkAll, checkNot, checkOne, checkTwo, checkThree, checkAllAuto, unCheckAll, clearCheck } =
  transferSlice.actions
export default transferSlice.reducer
