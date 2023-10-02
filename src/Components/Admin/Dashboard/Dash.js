import React from 'react';
import { Outlet } from "react-router-dom";
import { ProSidebarProvider, Sidebar, SidebarContext } from "react-pro-sidebar";
import Dashboard from './Dashboard';

function Dash() {
  return (
    <>
    <div className="your-element" style={{backgroundImage:"url('/barner2.png')",backgroundSize:"cover", position:" relative",backgroundReapeat:"no-repeat"
 }}>
      {/* <AdminNavbar /> */}
      <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Dashboard />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
      {/* <AdminFooter /> */}
      </div>
    </>
  )
}

export default Dash