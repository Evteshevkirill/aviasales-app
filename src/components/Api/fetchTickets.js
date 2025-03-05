/* eslint-disable no-await-in-loop */
/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_BASE = 'https://aviasales-test-api.kata.academy'
// Получение searchId
export const fetchSearchId = createAsyncThunk('fetchTickets/fetchSearchId', async () => {
  const response = await fetch(`${API_BASE}/search`)
  const data = await response.json()
  return data.searchId
})
// Получение билетов
export const fetchTickets = createAsyncThunk(
  'fetchTickets/fetchTickets',
  async (searchId, { dispatch, rejectWithValue }) => {
    try {
      let stop = false
      const fetchAllTickets = async () => {
        if (stop) return
        const response = await fetch(`${API_BASE}/tickets?searchId=${searchId}`)
        if (response.status === 500) {
          return fetchTickets(searchId)
        }
        const data = await response.json()
        dispatch({ type: 'fetchTickets/addTickets', payload: data.tickets })
        stop = data.stop
      }
      while (!stop) {
        await fetchAllTickets()
      }
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
)
