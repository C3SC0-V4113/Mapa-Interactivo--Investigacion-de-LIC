import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import depaService from './depaService'

const initialState = {
    depa: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

// Obtener Departamentos
export const getDepa = createAsyncThunk(
    'departamentos/get',
    async (id, thunkAPI) => {
      try {
        return await depaService.getDepaId(id);
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
        state.depa = action.payload
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