import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { Button, Col, Row , Modal} from 'react-bootstrap';
import toast from 'react-hot-toast';

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

  // const REMOVE_FROM_CART = gql`
  //   mutation RemoveFromCart($productId: ID) {
  //     removeFromCart(productId: $productId) {
  //       _id
  //       cartProducts {
  //         productId {
  //           id
  //         }
  //         color
  //         gender
  //         size
  //         quantity
  //       }
  //     }
  //   }
  // `;


  const REMOVE_FROM_CART = gql`
    mutation RemoveFromCart($productId: ID, $color: String, $size: String, $gender: String) {
      removeFromCart(productId: $productId, color: $color, size: $size, gender: $gender) {
        _id
      }
    }
  `;


  const [removeFromCart,  {data: removeData}] = useMutation(REMOVE_FROM_CART, {
    onCompleted: () => {
      toast.success("Item Removed from Cart");
      refetch();
    }
  });

  const handleRemove = async (id, color, gender, size) => {
    await removeFromCart({
      variables: {
        productId : id,
        color : color,
        gender : gender,
        size : size 
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
  
  const goToCheckOut = async () => {
    navigate('/checkout');

    // const newArray =  cartData?.cart?.cartProducts?.map((item) => {
    //   return {
    //       price : item?.productId?.sellingPrice,
    //       productId :  item?.productId?.id,
    //       quantity : item?.quantity,
    //     }
    // });

    // navigate('/checkout', {state: newArray });
    // onHide();
  }
  return (<>
    <div style={{paddingTop: "10%"}}> 
      <h1 className='mx-4 text-center mb-5' style={{fontSize: "40px", fontWeight:"bold"}}> Cart </h1>
      
    {/* <Button variant='link' onClick={() => goToCart()}> <Cart/> </Button> */}
    {cartData?.cart?.cartProducts?.length > 0 && cartData?.cart?.cartProducts?.map((item, index) => 
    <div key={index} className='mb-1 mx-1 px-0 mt-1'>
      <Row className='my-2'>
        <Col className='col-2' />
        <Col className='mx-4 col-2'>
          <img style={{height: "100px", width:"70px", border: "2px solid black"}} src={item?.productId?.images[0]?.imagePath[0] } alt="s"/>
        </Col>
        <Col className='mx-5 col-auto mt-0'> <p className='fw-bold fs-5'>{item?.productId?.priveiwName}</p>
          <Row>
            <Col>
              <Button variant='outline-dark' disabled={item?.quantity <= 1} style={{border: "none"}} onClick={() => CartDecrement(item?.productId?.id, item?.size, item?.gender, item?.color)}>-</Button>
                <input  onChange={(e) => setQuantity(e.target.value)} value={item?.quantity} className="mx-2" style={{background: "none", border: "none", width: "30%", textAlign: "center"}} type='text'  min="0" pattern="[0-9]*"/>
              <Button variant='outline-dark' style={{border: "none"}} onClick={() => CartIncrement(item?.productId?.id, item?.size, item?.gender, item?.color)}>+</Button>
            </Col>
            <Col className='fw-bold'>₹ {item?.quantity * item?.productId?.sellingPrice}</Col>
            <Col className='mt-0 pt-0'>
              <Button 
                onClick={() => handleRemove(item?.productId?.id, item?.color, item?.gender, item?.size )} 
                style={{marginRight: "0px", border: "none"}} 
                className='d-inline me-md-0 ms-md-5 mt-0 pt-0' 
                variant='outline-danger' > Remove  </Button>
            </Col>
            
          </Row>
        </Col>
      </Row>
    </div>)}
    <hr/>
    <Row className='my-2'>
      <Col className='col-8' />
      <Col className='col-auto' >
      <p className='fw-bold d-inline fs-5' style={{marginRight: "0", paddingRight: "0"}}>SUBTOTAL </p>
      <p className='fw-bold d-inline fs-5' style={{marginRight: "0", paddingRight: "0", alignItems: "end", alignContent: "end"}}> ₹ {sum}</p>
      </Col>
    </Row>
    </div>

    {cartData?.cart?.cartProducts?.length > 0 && <Modal.Footer className="border-0">
         <Button style={{backgroundColor: "black", color: "white"}} className='fs-5 fw-bold w-100' onClick={() => goToCheckOut()}>CHECKOUT</Button> 
      </Modal.Footer> }


  </>)
}

export default CartFull