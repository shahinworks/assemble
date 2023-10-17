import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

function CartFull() {
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log("state", state);
    const goToCart = () => {
        navigate('/cart', {state});
      }

  return (<>
  <div style={{paddingTop: "10%"}}> 
  <h1>Cart FULL SCREEN PAGE</h1>

  </div>
   
{/* <a href='/cart' > <Cart/>
</a> */}
  <Button variant='link' onClick={() => goToCart()}>
    <Cart/>
  </Button>
  </>
    
  )
}

export default CartFull