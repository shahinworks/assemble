import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { USER_ROLE } from "../constants";

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

import Home from '../Components/Home/Home';
import Shop from '../Components/Home/Shop';
import About from '../Components/Home/About';
import Product from '../Components/Home/Product';
import CreateSize from '../Components/Admin/Size/CreateSize';
import ListSize from '../Components/Admin/Size/ListSize';
import CreateColor from '../Components/Admin/Color/CreateColor';
import ListColor from '../Components/Admin/Color/ListColor';
import HomePageSlider from '../Components/Admin/HomePageSlider/HomePageSlider';
import User from '../Components/Admin/User/User';
import DashHome from '../Components/Admin/Dashboard/DashHome';
import ListSlider from '../Components/Admin/HomePageSlider/ListSlider';
import UserDashboard from '../Components/Dashboard/UserDashboard';
import AdminDashboard from '../Components/Dashboard/AdminDashboard';
import Error from '../Components/SuperComponent/Error';
import Wishlist from '../Components/Home/Wishlist/Wishlist';
import Checkout from '../Components/Home/Checkout/Checkout';
import CartFull from '../Components/Home/CartSection/CartFull';
import Profile from '../Components/Home/User/Profile';
import Forgot from '../Components/SuperComponent/Forgot';
import ResetPassword from '../Components/SuperComponent/ResetPassword';
import ListOrder from '../Components/Admin/Order/ListOrder';
import OrderDetail from '../Components/Admin/Order/OrderDetail';
import UpdateProduct from '../Components/Admin/Product/UpdateProduct';
import ListGender from '../Components/Admin/Gender/ListGender';
import CreateGender from '../Components/Admin/Gender/CreateGender';
import Swiper from '../Components/Home/Swiper';
import FAQ from '../Components/Sections/FAQ';

// Custom route guard HOC
function PrivateRoute({ element, requiredRole }) {
  // const userRole = CheckUserAdmin();
   
  const userRole = localStorage.getItem('userRole');

  if (userRole === requiredRole) {
    return element;
  } else {
    return <Navigate to="/login" />; // Redirect to the login page if the user doesn't have the required role
  }
}
 
function PageRoutes() {
  return (
    <Routes>
      <Route path='/' element={<UserDashboard />} >
        <Route index  element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/wishlist' element={<Wishlist />} />
        <Route exact path='/cart' element={<CartFull />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/faq' element={<FAQ />} />
      </Route>
     
      <Route exact path="admin" element={<AdminDashboard />} > 
      <Route exact path='User' element={<PrivateRoute element={<User/>} requiredRole="admin" />} /> 
      <Route exact path='CreateProduct' element={<PrivateRoute element={<CreateProduct />} requiredRole="admin" />} />
      <Route exact path='ListProduct' element={<PrivateRoute element={<ListProduct />} requiredRole="admin" />} />
      <Route exact path='UpdateProduct' element={<PrivateRoute element={<UpdateProduct />} requiredRole="admin" />} />
      <Route exact path='CreateSubCategory' element={<PrivateRoute element={<CreateSubCategory />} requiredRole="admin" />} />
      <Route exact path='ListSubCategory' element={<PrivateRoute element={<ListSubCategory />} requiredRole="admin"/>} />
      <Route exact path='CreateCategory' element={<PrivateRoute element={<CreateCategory />} requiredRole="admin" />} />
      <Route exact path='ListCategory' element={<PrivateRoute element={<ListCategory />} requiredRole="admin" />} />
      <Route exact path='CreateSize' element={<PrivateRoute element={<CreateSize />} requiredRole="admin" />} />
      <Route exact path='ListSize' element={<PrivateRoute element={<ListSize />} requiredRole="admin" />} />
      <Route exact path='CreateColor' element={<PrivateRoute element={<CreateColor />} requiredRole="admin" />} />
      <Route exact path='ListColor' element={<PrivateRoute element={<ListColor />} requiredRole="admin" />} />
      <Route exact path='CreateGender' element={<PrivateRoute element={<CreateGender />} requiredRole="admin" />} />
      <Route exact path='ListGender' element={<PrivateRoute element={<ListGender />} requiredRole="admin" />} />
      <Route exact path='CreateSlider' element={<PrivateRoute element={<HomePageSlider />} requiredRole="admin" />} />
      <Route exact path='ListSlider' element={<PrivateRoute element={<ListSlider />} requiredRole="admin" />} />
      <Route exact path='ListOrder' element={<PrivateRoute element={<ListOrder />} requiredRole="admin" />} />
      <Route exact path='orderdetail/:orderID' element={<PrivateRoute element={<OrderDetail />} requiredRole="admin" />} />


      {/* <Route exact path='CreateProduct' element={<CreateProduct />}/>
      <Route exact path='ListProduct' element={<ListProduct />}/>
      <Route exact path='UpdateProduct' element={<UpdateProduct />}/>
      <Route exact path='CreateSubCategory' element={<CreateSubCategory />}/>
      <Route exact path='ListSubCategory' element={<ListSubCategory />}/>
      <Route exact path='CreateCategory' element={<CreateCategory />}/>
      <Route exact path='ListCategory' element={<ListCategory />}/>
      <Route exact path='CreateSize' element={<CreateSize />}/>
      <Route exact path='ListSize' element={<ListSize />}/>
      <Route exact path='CreateColor' element={<CreateColor />}/>
      <Route exact path='ListColor' element={<ListColor />}/>
      <Route exact path='CreateGender' element={<CreateGender />}/>
      <Route exact path='ListGender' element={<ListGender />}/>
      <Route exact path='CreateSlider' element={<HomePageSlider />}/>
      <Route exact path='ListSlider' element={<ListSlider />}/>
      <Route exact path='ListOrder' element={<ListOrder />}/>
      <Route exact path='orderdetail/:orderID' element={<OrderDetail />}/> */}
      </Route>



      <Route path='/CreateCart' element={<CreateCart />}/>
      <Route path='/ListCart' element={<ListCart />}/>
      <Route path='/rough' element={<Demo />}/>
      <Route path='/checkout' element={<Checkout />}/>
     
      
    

     
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgot' element={<Forgot />}/>
      <Route path='/reset' element={<ResetPassword />}/>
      <Route path='*' element={<Error />}/>
      <Route path='/rough' element={<Demo />}/>
      <Route path='/swiper' element={<Swiper />}/>
    </Routes>
  )
}

export default PageRoutes;




