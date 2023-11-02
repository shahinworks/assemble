import React from 'react';
import AdminSideBar from './AdminSideBar';
import { Outlet } from "react-router-dom";
import AdminHeader from '../Sections/Header/AdminHeader';

function AdminDashboard() {
  return (<>
    <div className="your-element" 
    style={{backgroundImage:"url('/barner2.png')", backgroundSize:"cover", position:" relative", backgroundReapeat:"no-repeat"}}>
      <AdminHeader/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mx-0 px-0" style={{ backgroundColor: "black"}}>
            <AdminSideBar />
          </div>
          <div className="col-9 mx-0 px-0" style={{ backgroundColor: "black", color: "white"}}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default AdminDashboard;