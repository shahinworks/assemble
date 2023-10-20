import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card, Col, Row, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListOrder() {

  const LIST_ORDER = gql`
  query GetAllOrder {
    getAllOrder {
      id
      paymentId
      paymentMethod
      paymentProof
      paymentStatus
      status
      totalAmount
      orderProducts {
        productId {
          id
          productName
          priveiwName
          sellingPrice
          images
          size
          color
          gender
          discount
          gst
          description
          stock
        }
        price
        quantity
        packedImage
        shippedImage
        shippedBy
        trackingNo
        trackingUrl
      }
      user {
        firstName
        lastName
      }
    }
  }
  
  `;

  const {data: orderData} = useQuery(LIST_ORDER);
  if(orderData) {
    console.log("Data", orderData);
  }

  return (<>
  <h2 className='text-center'>Table of Category List</h2>
   

   {orderData && orderData?.getAllOrder?.length > 0 ?
        orderData?.getAllOrder?.map((order, index) => (
          <Card key={index} className="mb-2 hover-border-primary mx-2">
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8 my-3">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <Link to={`/admin/order/detail/${order?.id}`} className="text-truncate h-100 d-flex align-items-center">
                    <span maxLength={2}>{order?.id?.substring(0, 12)}...</span>
                  </Link>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">
                    {order?.user?.firstName} {order?.user?.lastName}
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Purchase</div>
                  <div className="text-alternate">
                    <span>
                      <span className="text-small">₹ </span>
                      {order?.totalAmount}
                    </span>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Date</div>
                  <div className="text-alternate">13.09.2023</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge className="badge bg-dark">{order?.status}</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ) )  : <h2 className='text-center my-4 py-4'>Order Not Found</h2>}
  </>)
}

export default ListOrder;