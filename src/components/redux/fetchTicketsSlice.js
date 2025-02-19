/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
          return fetchTickets()
        }

        const data = await response.json()

        dispatch({ type: 'fetchTickets/addTickets', payload: data.tickets })

        stop = data.stop
      }

      while (!stop) {
        await fetchAllTickets()
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

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
