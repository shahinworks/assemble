import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import CartPage from '../../Home/CartSection/CartPage';
import { Modal, Button , Row} from 'react-bootstrap';

function CartPop({show, onHide}) {

    console.log("onHide: ", onHide)
    console.log("show: ", show );
  const navigate = useNavigate();

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

const [getCartData, {data: cartData, refetch}] = useLazyQuery(CART);

useEffect(() => {
  getCartData();
}, []);
const goToHomePage = () => {
    navigate('/');
  }


  useEffect(() => {
    refetch();
  }, [show, onHide]);
  return (<>
  <Modal className="modal-right scroll-out-negative" show={show} onHide={onHide} scrollable dialogClassName="full">
    <Modal.Header closeButton>
  <Modal.Title className='fw-bold' as="h5">Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body className='mx-0 px-0'>
      {cartData?.cart?.cartProducts?.length > 0 ? 
      <CartPage /> 
     :  <div>
      <p className='fs-6'> Your Cart is Currently Empty </p> <Button className='btn-dark' onClick={() => goToHomePage()}>Shop Now</Button></div>}
    </Modal.Body>
    <Modal.Footer className="border-0">
       <Row> <Button style={{backgroundColor: "black", color: "white"}}>Check Out</Button> </Row>
    </Modal.Footer>
  </Modal>

  </>)
}

export default CartPop