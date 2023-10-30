import React, { useEffect, useState } from 'react';

function CheckStuff() {
    const [ userRole, setUserRole] = useState('');
    const ROLE = localStorage?.getItem('role');
    const isAdmin = ROLE?.includes("admin");

    useEffect(() => {
        if(isAdmin){
            setUserRole("admin");
          }
          console.log("ss");
          console.log("userRole", userRole);
      }, [isAdmin , ROLE]);
    
      console.log("ROLE",  ROLE);
      console.log("isAdmin", isAdmin);
      console.log("userRole", userRole);
  
  return  userRole ;
}

export default CheckStuff;