import { combineReducers } from '@reduxjs/toolkit';
import fetchSpecialisationReducer from './features/fetchSpecialisationSlice';
import createSpecializationReducer from './features/createSpecialisationSlice';
import fetchDoctorsSliceReducer from './features/fetchDoctorsSlice';

export const rootReducer = combineReducers({
  details: fetchSpecialisationReducer,
  specializations: createSpecializationReducer,
  doctors: fetchDoctorsFromAPI
  // other reducers
});
