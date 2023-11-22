import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './failure.png';

function Failure() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/shop/order');
    }, [4000]);
  }, [navigate]);

  return (
    <>
      <div className="text-center">
        <img style={{ height: '100px', width: '100px', borderRadius: '50px' }} alt="tick" src={img} />
        <h1 className="my-2 mx-2">Payment Failed</h1>
      </div>
    </>
  );
}

export default Failure;
