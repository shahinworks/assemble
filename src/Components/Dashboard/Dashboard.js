import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Footer/Footer';

function Dashboard() {
  return (<>
  <Outlet/>
  <Footer />

  </>)
}

export default Dashboard;