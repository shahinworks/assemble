import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Demo from '../Components/Demo/Demo';
import CreateProduct from '../Components/Admin/Product/CreateProduct';
import ListProduct from '../Components/Admin/Product/ListProduct';
import CreateCategory from '../Components/Admin/Category/CreateCategory';
import Dashboard from '../Components/Admin/Dashboard/Dashboard';
import ListCategory from '../Components/Admin/Category/ListCategory';
import CreateSubCategory from '../Components/Admin/SubCategory/CreateSubCategory';
import ListSubCategory from '../Components/Admin/SubCategory/ListSubCategory';
import CreateCart from '../Components/Admin/Cart/CreateCart';
import ListCart from '../Components/Admin/Cart/ListCart';
 
function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/CreateProduct' element={<CreateProduct />}/>
      <Route path='/ListProduct' element={<ListProduct />}/>
      <Route path='/CreateSubCategory' element={<CreateSubCategory />}/>
      <Route path='/ListSubCategory' element={<ListSubCategory />}/>
      <Route path='/CreateCategory' element={<CreateCategory />}/>
      <Route path='/ListCategory' element={<ListCategory />}/>
      <Route path='/CreateCart' element={<CreateCart />}/>
      <Route path='/ListCart' element={<ListCart />}/>
      <Route path='/rough' element={<Demo />}/>
      {/* <Route path='/' element={<Demo />}/> */}
    </Routes>
  )
}

export default PageRoutes;