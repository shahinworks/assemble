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
import Login from '../Components/SuperComponent/Login';
import Register from '../Components/SuperComponent/Register';
import Dash from '../Components/Admin/Dashboard/Dash';
import Body from '../Components/Sections/Header/Body';
import Home from '../Components/Home/Home';
 
function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="admin" element={<Dash />} >
      <Route exact path='CreateProduct' element={<CreateProduct />}/>
      <Route exact path='ListProduct' element={<ListProduct />}/>
      <Route exact path='CreateSubCategory' element={<CreateSubCategory />}/>
      <Route exact path='ListSubCategory' element={<ListSubCategory />}/>
      <Route exact path='CreateCategory' element={<CreateCategory />}/>
      <Route exact path='ListCategory' element={<ListCategory />}/>
      </Route>
      <Route path='/CreateCart' element={<CreateCart />}/>
      <Route path='/ListCart' element={<ListCart />}/>
      <Route path='/rough' element={<Demo />}/>
      {/* <Route path='/' element={<Demo />}/> */}




      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/rough' element={<Demo />}/>
      <Route path='/rough' element={<Demo />}/>
    </Routes>
  )
}

export default PageRoutes;