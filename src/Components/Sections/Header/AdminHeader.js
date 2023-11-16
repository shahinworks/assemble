import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }

  return (<>
    <div style={{cursor: "pointer"}} onClick={() => goToHomePage()} >
      <h1 className='text-center my-2'>ADMIN PANEL</h1>
    </div>
  </>);
}

export default AdminHeader;