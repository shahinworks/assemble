import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Modal, Form } from "react-bootstrap";
import {Pencil, Trash} from 'react-bootstrap-icons';

function ListSize() {

  const [modal, showModal] = useState(false);
  const [sizeName, setSizeName] = useState('');
  const [sizeId, setSizeId] = useState('');


  const GET_ALL_SIZE = gql`
  query GetAllSize {
    getAllSize {
      id
      sizeName
    }
  }`;

  const { data, refetch } = useQuery(GET_ALL_SIZE);

  if(data){
    console.log("data", data);
  }


  //------------------------------------------------------
  // --------------function for handle EDIT start---------
  //------------------------------------------------------


  const EDIT_SIZE = gql`
  mutation UpdateSize($updateSizeId: ID, $sizeName: String) {
    updateSize(id: $updateSizeId, sizeName: $sizeName) {
      id
      sizeName
    }
  }`;


  const [EditData] = useMutation(EDIT_SIZE);

  function hadleEdit(id,name) {
    showModal(true);
    // console.log(id);
    setSizeId(id);
    setSizeName(name);
  }


  const handleSubmit = async () => {
    await EditData({
      variables: {
        updateSizeId: sizeId,
        sizeName: sizeName
      }
    });
    showModal(false);
    setSizeName("");
  }


  //------------------------------------------------------
  // --------------function for handle EDIT END---------
  //------------------------------------------------------


  //------------------------------------------------------
  // --------------function for handle DELETE start---------
  //------------------------------------------------------

  const DELETE_SIZE = gql`mutation DeleteSize($deleteSizeId: ID!) {
    deleteSize(id: $deleteSizeId) {
      id
      sizeName
    }
  }`;


  const [DeleteSize] = useMutation(DELETE_SIZE, {
    onCompleted: () => {
      refetch();
    }
  });




  async function handleDelete(id, name) {
    const shouldDelete = window.confirm(`Are you sure you want to delete "${name}"`);
    if (shouldDelete) {
      await DeleteSize({
        variables: {
          deleteSizeId: id
        }
      });
    }
  }


  //------------------------------------------------------
  // --------------function for handle DELETE END---------
  //------------------------------------------------------



  useEffect(() => {
    refetch();
  }, [refetch])

  return (<>
  <h2 className="my-5">List of Sizes</h2>

<Row className="g-0 align-content-left d-none d-lg-flex ps-1 pe-5 mb-1 custom-sort">
      <Col md="2" className="d-flex flex-column mb-lg-0 pe-1 justify-content-left">
        <div className=" text-md cursor-pointer fs-5"> Index No </div>
      </Col>
      <Col md="3" className="d-flex flex-column ps-2 justify-content-center ">
        <div className=" text-md cursor-pointer fs-5"> Size </div>
      </Col>
      <Col md="4" className="d-flex flex-column justify-content-center">
        <div className=" text-md cursor-pointer fs-5"> Actions </div>
      </Col>
    </Row>
    <Row>
      <Col className="mx-auto my-5">
        
      {data && data?.getAllSize?.map((item, index) => (
      <Card key={index} className="mb-2 hover-border-primary mx-1 mt-1" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >
          <Card.Body className="pt-0 pb-0 sh-21 sh-md-8 my-1"  >
         
          <Row className="g-0 align-content-center cursor-default">
              <Col xs="2" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1">
                <div className="text-alternate">{index}
                </div>
              </Col> 
              <Col xs="2" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-2 me-5">
                <div className="text-alternate">{item?.sizeName}</div>
              </Col>
              <Col xs="2" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-3">
              <Button className="btn btn-sm mx-0 mx-sm-2 mx-sm-4 btn-light" onClick={() => hadleEdit(item.id,item.sizeName )}>
                 <Pencil size={20} color="black"/>
                </Button>
              </Col>
              <Col xs="2" md="1" className=" d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-3">
              <Button className="btn btn-sm mx-0 mx-sm-2 mx-sm-4 btn-light" 
               onClick={() => handleDelete(item.id, item.sizeName)}>
              <Trash size={20} color="black" />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card> ))}
        
          {/* <Card>
            <Card.Body>

              <h2>Table of size</h2>
              <table className="table mt-2 border ">
                <thead className="table-head">
                  <tr className="border">
                    <th className="border">Sr No</th>
                    <th className="border">Size</th>
                    <th className="border">Edit</th>
                    <th className="border">Delete</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {data && data.getAllSize.map((item, index) => (
                    <tr className="border" key={item.id}>
                      <td className="border">{index + 1}</td>
                      <td className="border">{item.sizeName}</td>
                      <td className="border">
                        <Button className="btn btn-sm" onClick={() => hadleEdit(item.id,item.sizeName )}>
                           <Pencil size={20} color="black"/>
                        </Button>
                      </td>
                      <td className="border">
                        <Button className="btn btn-sm" onClick={() => handleDelete(item.id, item.sizeName)} >
                          <Trash size={20} color="black" />
                        </Button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </Card.Body>
          </Card> */}

          <Modal
            className="modal-right scroll-out-negative"
            show={modal}
            onHide={() => showModal(false)}
            scrollable
            dialogClassName="full"
          >
            <Modal.Header closeButton>
              <Modal.Title as="h5">Update Size</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Size Name</h5>
              <Form.Control type="text" name="sizeName" value={sizeName}
                onChange={(e) => setSizeName(e.target.value)} />
              <Button type='submit' className='my-2 btn btn-primary' onClick={handleSubmit}  >Submit</Button>
            </Modal.Body>
          </Modal>


        </Col>
      </Row>
    </>
  );
}

export default ListSize;
