import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        user {
          firstName
          lastName
        }
      }
    }
  `;

  const { data: orderData, error } = useQuery(LIST_ORDER);
  if (error) {
    console.error("error", error);
  }

  return (
    <>
      <h2 className="text-center">Table of Category List</h2>

      <Row
        className="g-0 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort"
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1px solid black",
        }}
      >
        <Col
          md="2"
          className="d-flex flex-column mb-lg-0 pe-1 justify-content-center"
        >
          <div className=" text-md cursor-pointer sort">Order ID</div>
        </Col>
        <Col md="3" className="d-flex flex-column pe-1 justify-content-center ">
          <div className=" text-md cursor-pointer sort">NAME</div>
        </Col>
        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort">Amount</div>
        </Col>
        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort">Date</div>
        </Col>

        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className=" text-md cursor-pointer sort">Status</div>
        </Col>
        {/* <Col lg="1" className="d-flex flex-column pe-1 justify-content-center align-items-lg-center">
          <div className=" text-md cursor-pointer ">Check</div>
        </Col> */}
      </Row>

      {orderData && orderData?.getAllOrder?.length > 0 ? (
        orderData?.getAllOrder?.map((order, index) => (
          <Card
            key={index}
            className="mb-2 hover-border-primary mx-2"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid black",
            }}
          >
            <Card.Body
              className="pt-0 pb-0 sh-21 sh-md-8 my-3"
              style={{
                backgroundColor: "black",
                color: "white",
                border: "1px solid black",
              }}
            >
              <Row className="g-0 align-content-center cursor-default">
                <Col
                  xs="11"
                  md="2"
                  className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative"
                >
                  <div className="text-muted text-small d-md-none">Id</div>
                  <Link
                    to={`/admin/orderdetail/${order?.id}`}
                    className="text-truncate h-100 d-flex align-items-center"
                  >
                    <span maxLength={2}>{order?.id?.substring(0, 12)}...</span>
                  </Link>
                </Col>
                <Col
                  xs="6"
                  md="3"
                  className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2"
                >
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">
                    {order?.user?.firstName} {order?.user?.lastName}
                  </div>
                </Col>
                <Col
                  xs="6"
                  md="2"
                  className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3"
                >
                  <div className="text-muted text-small d-md-none">
                    Purchase
                  </div>
                  <div className="text-alternate">
                    <span>
                      <span className="text-small">₹ </span>
                      {order?.totalAmount}
                    </span>
                  </div>
                </Col>
                <Col
                  xs="6"
                  md="2"
                  className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4"
                >
                  <div className="text-muted text-small d-md-none">Date</div>
                  <div className="text-alternate">13.09.2023</div>
                </Col>
                <Col
                  xs="6"
                  md="2"
                  className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5"
                >
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge className="badge bg-dark">{order?.status}</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h2 className="text-center my-4 py-4">Order Not Found</h2>
      )}
    </>
  );
}

export default ListOrder;
