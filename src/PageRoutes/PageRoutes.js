import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Demo from '../Components/Demo/Demo';
import CreateProduct from '../Components/Admin/Product/CreateProduct';
import CreateCategory from '../Components/Admin/Category/CreateCategory';
import Dashboard from '../Components/Admin/Dashboard/Dashboard';

function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/CreateProduct' element={<CreateProduct />}/>
      <Route path='/CreateProduct' element={<CreateProduct />}/>
      <Route path='/CreateCategory' element={<CreateCategory />}/>
      <Route path='/CreateCategory' element={<CreateCategory />}/>
      <Route path='/rough' element={<Demo />}/>
      <Route path='/' element={<Demo />}/>
    </Routes>
  )
}

export default PageRoutes;