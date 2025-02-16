/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_BASE = 'https://aviasales-test-api.kata.academy'

// Получение searchId
export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async () => {
  const response = await fetch(`${API_BASE}/search`)
  const data = await response.json()
  return data.searchId
})

// Получение билетов
export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (searchId, { rejectWithValue }) => {
  try {
    if (!searchId) {
      throw new Error('searchId is required')
    }

    let allTickets = []
    let stop = false

    const fetchPage = async () => {
      const response = await fetch(`${API_BASE}/tickets?searchId=${searchId}`)

      if (response.status === 500) {
        return fetchPage()
      }

      const data = await response.json()

      allTickets = [...allTickets, ...data.tickets]

      stop = data.stop
    }

    while (!stop) {
      await fetchPage()
    }

    return allTickets
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const ticketsSlice = createSlice({
  name: 'tickets',
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
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false
        state.tickets = action.payload
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default ticketsSlice.reducer
