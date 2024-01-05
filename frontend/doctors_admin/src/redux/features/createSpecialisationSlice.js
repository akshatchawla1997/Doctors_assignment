// features/createSpecialization.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSpecialization } from '../api';

export const addSpecialization = createAsyncThunk(
  'specializations/addSpecialization',
  async ({specializationName}) => {
    console.log(specializationName)
    const response = await createSpecialization(specializationName);
    console.log(response);
    return response?.data;
  }
);

const createSpecializationSlice = createSlice({
  name: 'specializations',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSpecialization.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addSpecialization.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(addSpecialization.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default createSpecializationSlice.reducer;
