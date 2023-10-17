import React, { useEffect, useState } from 'react';
import { gql, useMutation, useLazyQuery, useQuery } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Cart } from 'react-bootstrap-icons';

function Checkout(props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [ shippingAddress , setShippingAddress] = useState("");
  
 const [shippingAsBilling, setShippingAsBilling] = useState(false);

  // GET_BILLING_ADDRESS 
  const GET_BILLING_ADDRESS  = gql`
    query GetAllAddressesByUser {
      getAllAddressesByUser {
        id
      }
    }
  `;

  const {data: billingAddress} = useQuery(GET_BILLING_ADDRESS);
  if(billingAddress){
    console.log("billingAddress", billingAddress?.getAllAddressesByUser[0]?.id);
  }

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
        shippingAddress: shippingData?.createAddress?.id,
        billingAddress: billingAddress?.getAllAddressesByUser[0]?.id,
        status: "pending"
      }
    });
  }

  const goToCart = () => {
    navigate('/cart', {state});
  }

  const CREATE_SHIPPING_ADDRESS = gql`
    mutation CreateAddress($addressLine1: String!, $city: String!, $state: String!, $postalCode: String!, $country: String!, $firstName: String, $lastName: String, $mobileNo: String, $addressLine2: String) {
      createAddress(addressLine1: $addressLine1, city: $city, state: $state, postalCode: $postalCode, country: $country, firstName: $firstName, lastName: $lastName, mobileNo: $mobileNo, addressLine2: $addressLine2) {
        id
      }
    }
  `;

  const [createShippingAddress, {data: shippingData}] = useMutation(CREATE_SHIPPING_ADDRESS, {
    onCompleted : () => {
      toast.success("Address Saved Successfully");
    },
    onError : (error) => {
      toast.error("Error ");
      console.error(error.message);
    }
  });
  if(shippingData){
    console.log(shippingData?.createAddress?.id)
  }
  
  const handleSubmitAddress = async() => {
    await createShippingAddress({
      variables: {
        addressLine1: shippingAddress,
        city: shippingAddress,
        state: shippingAddress,
        postalCode: shippingAddress,
        country: shippingAddress,
        addressLine2: shippingAddress,
        mobileNo: shippingAddress,
        lastName: shippingAddress,
        firstName: shippingAddress
      }
    });
  }

  useEffect(() => {
    if(setShippingAsBilling){
      setShippingAddress(billingAddress?.getAllAddressesByUser[0]?.id);
    } else {
      setShippingAddress(shippingData?.createAddress?.id);
    }
  }, [shippingAsBilling, shippingData?.createAddress?.id, billingAddress?.getAllAddressesByUser[0]?.id,]);


  // const setShippingAsBilling = () => {
  //   console.log("setShippingAsBilling", setShippingAsBilling);
  // }

  return (<>
    <div className='my-5 mx-5 d-flex'>
      <h5>THE ASSEMBLE CLOTHING</h5> 
      <Button variant='link' className='d-inline mr-0 pr-0 me-0' style={{marginLeft: "74%"}} onClick={() => goToCart()}>
        <Cart color='black' size={26}/>
      </Button>
    </div>
    <hr className='my-0 py-0'/>

    <Row className='mx-3'>
      <Col className="col-lg-7">
        <div className='mx-3'>
        <h5>Shippin Address</h5>
        <Form.Check type='checkbox' onChange={() => setShippingAsBilling(!shippingAsBilling)}/> <p className='mx-3'> Same as Billing Address</p>
  
        {!shippingAsBilling  && <>
        <h5>
          Add New Shipping Address
        </h5>
        <Form.Control  type='text' value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)}/>
          <Button onClick={() => handleSubmitAddress()}>Submit Address</Button> </>}
          
          
        </div>
      <div className='mt-5 mb-5'>
    <h3 className='mt-5 mb-5'>Checkout</h3>
    <Button onClick={() => handleOrder()}>Checkout Button</Button>
    </div>
      </Col>




    <Col className="col-lg-5 my-0 py-0" style={{backgroundColor: "#fafafa"}}>Cart Summary </Col>
  </Row>

   
  </>);
}

export default Checkout;