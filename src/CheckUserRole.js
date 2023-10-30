import React, { useEffect, useState } from 'react';

function CheckUserRole() {
  const [ userRole, setUserRole] = useState('');
  const ROLE = localStorage.getItem('role');
  const isAdmin = ROLE.includes("admin");

  useEffect(() => {
    if(isAdmin){
        setUserRole("admin");
      }
  }, [ROLE, isAdmin ]);

  console.log("ROLE",  ROLE);
  console.log("isAdmin", isAdmin);

  return userRole;
}

export default CheckUserRole;
