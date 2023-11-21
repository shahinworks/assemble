import React from 'react'
import Footer from '../Sections/Footer/Footer'
import ShopHeader from '../Sections/Header/ShopHeader';
import { Outlet } from 'react-router-dom';

function ShopDashboard() {
  return (<>
    <ShopHeader/>
    <Outlet />
    <Footer/>
    </>);
}

export default ShopDashboard;