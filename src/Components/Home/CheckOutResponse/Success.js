import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Cartitems from 'globalValue/CartItems/Cartitems';
import img from './success.png';

function Success() {
//   const { refetch } = Cartitems();
  const navigate = useNavigate();
  useEffect(() => {
    // refetch();
    setTimeout(() => {
      navigate('/shop/order');
    }, [4000]);
  }, []);
  return (
    <>
      <div className="text-center">
        <img style={{ height: '125px', width: '100px', borderRadius: '50px', marginTop: "10%" }} alt="tick" src={img} />
        <h1 className="my-2 mx-2">Payment Successful</h1>
      </div>
    </>
  );
}

export default Success;
