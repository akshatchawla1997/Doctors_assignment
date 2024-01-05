import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { specialization } from '../api';

export const fetchSpecialisation = createAsyncThunk(
  'details/specialisationdetails',
  async () => {
    const response = await specialization();
    return response.data;
  }
);

const fetchSpecialisationSlice = createSlice({
  name: 'details',
  initialState: {
    data: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecialisation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpecialisation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default fetchSpecialisationSlice.reducer;
