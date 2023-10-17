import React from 'react';
import { useLocation } from 'react-router-dom';

function CartFull() {
    const { state } = useLocation();
    console.log("state", state);
  return (
    <div>CartFull</div>
  )
}

export default CartFull