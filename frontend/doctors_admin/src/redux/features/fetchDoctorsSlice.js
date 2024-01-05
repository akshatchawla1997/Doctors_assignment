// fetchDoctorsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDoctorsFromAPI } from '../api';  // Assuming you will create or already have this function in your API file

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors',
  async () => {
    const response = await fetchDoctorsFromAPI();
    console.log(response);
    return response.data;
  }
);

export const fetchDoctorsSlice = createSlice({
  name: 'scrapDetails',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: {
    [fetchDoctors.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      // Exclude the non-serializable headers and config properties
      const { headers, config, ...serializableData } = action.payload;
      state.data = serializableData;
    },
    [fetchDoctors.error]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default fetchDoctorsSlice.reducer;
