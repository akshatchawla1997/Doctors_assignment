import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:9000/',
});

export const specialization = () => API.get('specializations/');
export const createSpecialization = (specializationName) => {
  return API.post('specializations/', { name: specializationName }); // corrected this line
};
export const fetchDoctorsFromAPI = () => API.get('physicians/');
export const updateDocAPI = (formData, id) => API.patch(`physicians/${id}`, formData)
export const deleteDocAPI = (id) => API.delete(`physician/${id}`)