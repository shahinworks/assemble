import React, { useEffect, useState } from 'react';
import { gql, useMutation, useLazyQuery } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Cart } from 'react-bootstrap-icons';

function Checkout(props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  // CREATE ORDER 
  const CREATE_ORDER = gql`
    mutation CreateOrder($paymentMethod: String, $totalAmount: Float, $orderProducts: [OrderProducts], $shippingAddress: ID, $billingAddress: ID, $status: String) {
      createOrder(paymentMethod: $paymentMethod, totalAmount: $totalAmount, orderProducts: $orderProducts, shippingAddress: $shippingAddress, billingAddress: $billingAddress, status: $status) {
        id
        user {
          email
          firstName
          id
          mobileNo
        }
        paymentMethod
        totalAmount
        orderProducts {
          productId {
            id
            productName
            priveiwName
            images
            sellingPrice
          }
          price
          quantity
          packedImage
          shippedImage
          shippedBy
          trackingNo
          trackingUrl
        }
        shippingAddress {
          id
          firstName
          lastName
          mobileNo
          addressLine1
          addressLine2
          city
          state
          postalCode
          country
        }
        billingAddress {
          id
          firstName
          lastName
          mobileNo
          addressLine1
          addressLine2
          city
          state
          postalCode
          country
        }
        status
        paymentStatus
        paymentProof
        paymentId
      }
    }
  `;

  const [createOrder, {data}] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      toast.success("Order Created Successfully");
    },
    onError : (error) => {
      toast.error("Some Error Occured");
      console.error("ERROR ", error.message);
    }
  });

  const handleOrder = async () => {
    
    await createOrder({
      variables: {
        paymentMethod: "ONLINE",
        totalAmount: 200.00,
        orderProducts: state,
        shippingAddress: "652e290bd58f3805c49d4349",
        billingAddress: "652e290bd58f3805c49d4349",
        status: "pending"
      }
    });
  }

  const goToCart = () => {
    navigate('/cart', {state});
  }

  return (<>
  <div className='my-5 mx-5'>
    <h5>THE ASSEMBLE CLOTHING</h5>
  </div>
  <hr />
  <Button variant='link' onClick={() => goToCart()}>
    <Cart/>
  </Button>

  <Row>
    <Col className="col-lg-7">
    <div className='mt-5 mb-5'>
    <h3 className='mt-5 mb-5'>Checkout</h3>
    <Button onClick={() => handleOrder()}>Checkout Button</Button>
    </div>
    </Col>
    <Col className="col-lg-5">Cart Summary </Col>
  </Row>

   
  </>);
}

export default Checkout;