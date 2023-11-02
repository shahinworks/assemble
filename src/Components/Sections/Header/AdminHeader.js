import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }

  return (<>
    <div style={{cursor: "pointer"}}  onClick={() => goToHomePage()} >
    <h1 >Header</h1>
    </div>
  </>);
}

export default AdminHeader;