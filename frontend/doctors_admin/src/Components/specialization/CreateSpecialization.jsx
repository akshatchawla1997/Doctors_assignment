// CreateSpecialization.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSpecialization } from '../../redux/features/createSpecialisationSlice';

const CreateSpecialization = () => {
  const dispatch = useDispatch();
  const [specialization, setSpecialization] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpecialization(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await addSpecialization(specialization);
      console.log(response)
      
    } catch (error) {
      console.error("Error creating specialization:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Specialization</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Enter Specialization Name" 
          name='name'
          value={specialization.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateSpecialization;
