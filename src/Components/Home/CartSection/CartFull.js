import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { Button, Col, Row } from 'react-bootstrap';

function CartFull() {


  const [ quantity, setQuantity] =  useState(0);

    const { state } = useLocation();
    const navigate = useNavigate();
    console.log("state", state);
    const goToCart = () => {
        navigate('/cart', {state});
      }

  const CART = gql`
    query Cart {
      cart {
        _id
        cartProducts {
          productId {
            id
            sellingPrice
            productName
            priveiwName
            images {
              imagePath
              color
              gender
            }
        }
          color
          gender
          size
          quantity
        }
      }
    }
  `;
  
    const [getCartData, {data: cartData, refetch}] = useLazyQuery(CART, {
      onCompleted: () => {
        setQuantity(cartData?.cart?.cartProducts[0]?.quantity);
        refetch();
      }
    });

    useEffect(() => {
      getCartData();
    }, []);

  const REMOVE_FROM_CART = gql`
    mutation RemoveFromCart($productId: ID) {
      removeFromCart(productId: $productId) {
        _id
        cartProducts {
          productId {
            id
          }
          color
          gender
          size
          quantity
        }
      }
    }
  `;

  const [removeFromCart,  {data: removeData}] = useMutation(REMOVE_FROM_CART);

  const handleRemove = async (id) => {
    await removeFromCart({
      variables: {
        productId: id
      }
    });
  }

  const HANDLE_CART_QUANTITY = gql`
    mutation AddToCart($productId: ID!, $quantity: Int!, $color: String, $gender: String, $size: String) {
      addToCart(productId: $productId, quantity: $quantity, color: $color, gender: $gender, size: $size) {
        _id
      }
    }
  `;

  const [handleCart, {data: cartValue}] = useMutation(HANDLE_CART_QUANTITY, {
    onCompleted: () => {
      refetch();
    }
  });

  const CartDecrement = (id, size, gender, color) => {
    console.log("CartDecrement", id);
    handleCart({
      variables: {
        productId: id,
        quantity: -1,
        size: size,
        gender: gender, 
        color: color,
      }
    });
    refetch();
  }

  const CartIncrement = (id, size, gender, color) => {
    console.log("CartIncrement", id);
    console.log(id, size, gender, color );
    handleCart({
      variables: {
        productId: id,
        quantity: 1,
        size: size,
        gender: gender, 
        color: color,
      }
    });
    refetch();
  }

  const [sum, setSum] = useState();

  useEffect(() => {
    getCartData();
  }, [cartValue]);

  useEffect(() => {
    setSum(cartData?.cart?.cartProducts?.reduce((acc, curr) => acc + curr?.quantity * curr?.productId?.sellingPrice, 0));
    // const sum = cartData?.cart?.cartProducts?.reduce((acc, curr) => acc + curr?.quantity * curr?.productId?.sellingPrice, 0);

    // console.log("sum", sum);
  }, [ cartData, cartValue ]);
  

  return (<>
    <div style={{paddingTop: "10%"}}> 
      <h1 className='mx-4'>Cart </h1>
    <Button variant='link' onClick={() => goToCart()}> <Cart/> </Button>
    {cartData?.cart?.cartProducts?.length > 0 && cartData?.cart?.cartProducts?.map((item, index) => 
    <div key={index} className='mb-1 mx-1 px-0 mt-1'>
      <Row className='my-2'>
        <Col className='col-2' />
        <Col className='mx-4 col-3'><img style={{height: "100px", width:"70px", border: "2px solid black"}} src={item?.productId?.images[0]?.imagePath[0] } alt="s"/></Col>
        <Col className='mx-5 col-4' > <p className='fs-6'>{item?.productId?.priveiwName}</p>
          <Row>
            <Col>
              <Button variant='outline-dark' disabled={item?.quantity <= 1} style={{border: "none"}} onClick={() => CartDecrement(item?.productId?.id, item?.size, item?.gender, item?.color)}>-</Button>
                <input  onChange={(e) => setQuantity(e.target.value)} value={item?.quantity} className="mx-2" style={{background: "none", border: "none", width: "30%", textAlign: "center"}} type='text'  min="0" pattern="[0-9]*"/>
              <Button variant='outline-dark' style={{border: "none"}} onClick={() => CartIncrement(item?.productId?.id, item?.size, item?.gender, item?.color)}>+</Button>
            </Col>
            <Col className='fw-bold'>₹ {item?.quantity * item?.productId?.sellingPrice}</Col>
            <Col><Button onClick={() => handleRemove(item?.productId?.id)} style={{marginRight: "0px", border: "none"}} className='my-0 py-0 d-inline me-0 ms-5' variant='outline-danger' > Remove </Button></Col>
            
          </Row>
        </Col>
      </Row>
    </div>)}
    <hr/>
    <div className='my-2'>
      <p className='fw-bold d-inline fs-5' style={{marginRight: "0", paddingRight: "0"}}>SUBTOTAL </p>
      <p className='fw-bold d-inline fs-5' style={{marginRight: "0", paddingRight: "0", alignItems: "end", alignContent: "end"}}> ₹ {sum}</p>
    </div>
    </div>
  </>
    
  )
}

export default CartFull