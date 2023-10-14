import React, { useEffect, useState } from 'react';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { Button, Col, Row } from 'react-bootstrap';

function CartPage() {
  const [ productId, setProductId] = useState("");
  const [ quantity, setQuantity] =  useState(0);
   
  // GETTING CART ITEMS
  const CART = gql`
    query Cart {
      cart {
        _id
        cartProducts {
          productId {
            id
            priveiwName
            productName
            images
            sellingPrice
          }
          quantity
        }
      }
    }
  `;

  const [getCartData, {data: cartData}] = useLazyQuery(CART, {
    onCompleted: () => {
      setQuantity(cartData?.cart?.cartProducts?.quantity);
    }
  });

  useEffect(() => {
    getCartData();
  }, []);


  const HANDLE_CART_QUANTITY = gql`
    mutation AddToCart($productId: ID!, $quantity: Int!) {
      addToCart(productId: $productId, quantity: $quantity) {
        _id
        cartProducts {
          productId {
            id
            priveiwName
            productName
            images
            sellingPrice
          }
          quantity
        }
      }
    }
  `;

  const [handleCart, {data: cartValue}] = useMutation(HANDLE_CART_QUANTITY);
  if(cartValue){
    console.log("cartValue", cartValue);
  }

  const CartDecrement = (id) => {
    console.log("CartDecrement", id);
    handleCart({
      variables: {
        productId: id,
        quantity: -1
      }
    })
  }

  const CartIncrement = (id) => {
    console.log("CartIncrement", id);
    handleCart({
      variables: {
        productId: id,
        quantity: 1
      }
    })
  }


  useEffect(() => {
    getCartData()
  }, [cartValue]);
 
  const numbers = cartData?.cart?.cartProducts
  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);


  return (<>
    {cartData?.cart?.cartProducts?.length > 0 && cartData?.cart?.cartProducts?.map((item) => 
    <div key={item?.productId?.id} className='mb-1 mx-1 px-0 mt-1'>
      <Row className='my-2'>
        <Col className='col-3'><img style={{height: "100px", width:"70px", border: "2px solid black"}} src={item?.productId?.images } alt="s"/></Col>
        <Col className='col-9'> <p className='fs-6'>{item?.productId?.priveiwName}</p>
          <Row>
            <Col>
              <Button variant='outline-dark' style={{border: "none"}} onClick={() => CartDecrement(item?.productId?.id)}>-</Button>
                <input  onChange={(e) => setQuantity(e.target.value)} value={item?.quantity} className="mx-2" style={{background: "none", border: "none", width: "30%", textAlign: "center"}} type='text'  min="0" pattern="[0-9]*"/>
              <Button variant='outline-dark' style={{border: "none"}} onClick={() => CartIncrement(item?.productId?.id)}>+</Button>
            </Col>
            <Col className='fw-bold'>₹ {item?.quantity * item?.productId?.sellingPrice}</Col>
          </Row>
        </Col>
      </Row>
    </div>)}
    <hr/>
    <div className='my-2'>
      <h4 className='fw-bold'>SUBTOTAL ₹ {}</h4>
    </div>
  </>)
}

export default CartPage;