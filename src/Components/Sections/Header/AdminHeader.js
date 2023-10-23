import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  }

  return (<>
    <h1 onClick={() => goToHomePage()}>Header</h1>
  </>);
}

export default AdminHeader;