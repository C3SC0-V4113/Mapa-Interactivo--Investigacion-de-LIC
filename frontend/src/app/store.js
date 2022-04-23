import { configureStore } from '@reduxjs/toolkit';
import depaReducer from '../features/departamento/depaSlice'

export const store = configureStore({
  reducer: {
    depa: depaReducer,
  },
});
