// updateDoctorSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { updateDoc as updateDocAPI } from "../../api"; // Import the API function

export const updateDoctorSlice = createSlice({
  name: "updateDoctor",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateDoc.fulfilled, (state, action) => {
      // Handle the fulfilled state
    });
    builder.addCase(updateDoc.rejected, (state, action) => {
      // Handle the rejected state
    });
  },
});

export default updateDoctorSlice.reducer;

// Async thunk action to update doctor data
export const updateDoc = (formData, id) => async (dispatch) => {
  try {
    const response = await updateDocAPI(formData, id); // API call to update doctor data
    dispatch(updateDocSlice.actions.someAction(response.data)); // Dispatch the response data
  } catch (error) {
    dispatch(updateDocSlice.actions.someError(error)); // Handle error
  }
};
