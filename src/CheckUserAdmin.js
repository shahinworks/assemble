import React , { useState, useEffect } from 'react'

function CheckUserAdmin() {
  const [ userRole, setUserRole] = useState('');
  const ROLE = localStorage.getItem('role');
  const isAdmin = ROLE.includes("admin");

  useEffect(() => {
    if(isAdmin){
        setUserRole("admin");
      }
  }, [ROLE, isAdmin ]);

  return userRole;
}

export default CheckUserAdmin;