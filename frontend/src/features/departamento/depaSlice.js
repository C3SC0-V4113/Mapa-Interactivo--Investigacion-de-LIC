import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import depaService from './depaService'

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

// Obtener Departamentos
export const getDepa = createAsyncThunk(
    'depa/getAll',
    async (_, thunkAPI) => {
      try {
        return await depaService.getDepa();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const depaSlice = createSlice({
  name: 'departamento',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDepa.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDepa.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getDepa.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const {reset} =depaSlice.actions
export default depaSlice.reducer