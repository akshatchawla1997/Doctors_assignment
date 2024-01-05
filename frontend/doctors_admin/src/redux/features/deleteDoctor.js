import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Assuming you have an API function called deletedocAPI to delete the doctor
import { deletedocAPI } from '../../api/doctors'; 

// Async thunk for deleting a doctor
export const deleteDoctor = createAsyncThunk(
  'doctors/deleteDoctor',
  async (id, thunkAPI) => {
    const response = await deletedocAPI(id);
    return response.data;
  }
);

const deleteDoctorSlice = createSlice({
  name: 'deleteDoctor',
  initialState: {
    loading: false,
    error: null,
    success: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(deleteDoctor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default deleteDoctorSlice.reducer;
