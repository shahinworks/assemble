import React from 'react';

function User() {
    const token = localStorage.getItem('token');

    console.log(token);

  return (
    <div>User</div>
  )
}

export default User;