import React, { useEffect, useState } from 'react';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { Button, Col, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';

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
    }
  });
  
  // if(cartData){
  //   console.log("cartData", cartData);
  // }

  // console.log("cartData", cartData);

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

  const [removeFromCart,  {data: removeData}] = useMutation(REMOVE_FROM_CART, {
    onCompleted: () => {
      toast.success("Removed from Cart");
    }
  });

  const handleRemove = async (id) => {
    await removeFromCart({
      variables: {
        productId: id
      }
    });
  }

  if(removeData){
    console.log("removeData", removeData);
  }

  // const HANDLE_CART_QUANTITY = gql`
  //   mutation AddToCart($productId: ID!, $quantity: Int!) {
  //     addToCart(productId: $productId, quantity: $quantity) {
  //       _id
  //       cartProducts {
  //         productId {
  //           id
  //           priveiwName
  //           productName
  //           images
  //           sellingPrice
  //         }
  //         quantity
  //       }
  //     }
  //   }
  // `;

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
    })
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
    })
  }


  const [sum, setSum] = useState();

  useEffect(() => {
    getCartData();
  }, [cartValue]);

  useEffect(() => {
    setSum(cartData?.cart?.cartProducts?.reduce((acc, curr) => acc + curr?.quantity * curr?.productId?.sellingPrice, 0));
    // const sum = cartData?.cart?.cartProducts?.reduce((acc, curr) => acc + curr?.quantity * curr?.productId?.sellingPrice, 0);

    // console.log("sum", sum);
  }, [cartData, cartValue]);

//  const sum = cartData?.cart?.cartProducts?.reduce((acc, curr) => acc + curr?.quantity * curr?.productId?.sellingPrice);
//  console.log("sum", sum);

  return (<>
    {cartData?.cart?.cartProducts?.length > 0 && cartData?.cart?.cartProducts?.map((item, index) =>  
    <div key={index} className='mb-1 mx-1 px-0 mt-1'>
      <Row className='my-2'>
        <Col className='col-3'><img style={{height: "100px", width:"70px", border: "2px solid black"}} src={item?.productId?.images[0]?.imagePath[0] } alt="s"/></Col>
        <Col className='col-9'>
          <div className='fs-6'>{item?.productId?.priveiwName} 
          <Button onClick={() => handleRemove(item?.productId?.id)} style={{marginRight: "0px", border: "none"}} className='my-0 py-0 d-inline me-0 ms-5' variant='outline-danger' > X </Button>
         </div> 
          <Row>
            <Col>
              <Button variant='outline-dark' disabled={item?.quantity <= 1} style={{border: "none"}} onClick={() => CartDecrement(item?.productId?.id, item?.size, item?.gender, item?.color)}>-</Button>
                <input  onChange={(e) => setQuantity(e.target.value)} value={item?.quantity} className="mx-1" style={{background: "none", border: "none", width: "30%", textAlign: "center"}} type='text'  min="0" pattern="[0-9]*"/>
              <Button variant='outline-dark' style={{border: "none"}} onClick={() => CartIncrement(item?.productId?.id, item?.size, item?.gender, item?.color)}>+</Button>
            </Col>
            <Col className='fw-bold'>₹ {item?.quantity * item?.productId?.sellingPrice}</Col>
          </Row>
        </Col>
      </Row>
    </div>)}
    <hr/>
    <div className='my-2'>
      <p className='fw-bold d-inline fs-5' style={{marginRight: "40px", paddingRight: "50px"}}> SUBTOTAL </p>
      <p className='fw-bold d-inline fs-5' style={{ marginLeft: "70px", alignItems: "end", alignContent: "end"}}> ₹ {sum}</p>
    </div>
  </>)
}

export default CartPage;