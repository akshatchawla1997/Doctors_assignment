import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import CreateDoctor from './Components/doctordashboard/CreateDoctor'
import DoctorsList from './Components/doctordashboard/DoctorsList'
import { Layout } from './Components/layout/Layout';
import CreateSpecialization from './Components/specialization/CreateSpecialization';
import UpdateDoctor from './Components/doctordashboard/UpdateDoctor';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<DoctorsList />}/>
      <Route path='/add-doctor' element={<CreateDoctor />}/>
      <Route path='/add-specialization' element={<CreateSpecialization />}/>
      <Route path='/update-doctor' element={<UpdateDoctor />} />
    </Routes>
    </>
  )
}

export default App
