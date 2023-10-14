import React, { useEffect } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { Col, Row } from 'react-bootstrap';

function CartPage() {
  
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

  const [getCartData, {data: cartData}] = useLazyQuery(CART);

  useEffect(() => {
    getCartData();
  }, []);


  return (<>
    {cartData?.cart?.cartProducts?.length > 0 && cartData?.cart?.cartProducts?.map((item) => 
     <div key={item} className='mb-1 mx-1 px-0'>
     <Col><img style={{height: "100px", width:"70px", border: "2px solid black"}} src={item?.productId?.images } alt="s"/></Col>
     <Col>
     </Col>
   </div>
   )}
  </>)
}

export default CartPage;