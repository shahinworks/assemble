import React, { useEffect } from "react";
import { Card, Col, Row, Button , Modal, Form} from "react-bootstrap";
import { gql, useMutation, useQuery } from "@apollo/client";
import {Pencil, Trash} from 'react-bootstrap-icons';
import { useState } from "react";

function ListCategory() {

  const [modal, showModal] = useState(false);

  const GET_ALL_CATEGORY = gql`
  query GetAllCategory {
    getAllCategory {
      id
      categoryName
    }
  }`;

  const { data, refetch } = useQuery(GET_ALL_CATEGORY);

  useEffect(() => {
    refetch();
  }, []);

  // EDIT

  const [categoryName, setCategoryName] = useState('');
  const [categroryId, setCategoryId] = useState('');

  const EDIT_CATEGORY = gql`
    mutation UpdateCategory($updateCategoryId: ID, $categoryName: String) {
      updateCategory(id: $updateCategoryId, categoryName: $categoryName) {
        id
        categoryName
      }
    }
  `;

  const [editCategory , {data: dataEdit}] = useMutation(EDIT_CATEGORY);

  function handleEdit(id) {
    showModal(true);
    setCategoryId(id);
  }

  const handleSubmit = async () => {
    await editCategory({
      variables: {
        updateCategoryId: categroryId,
        categoryName: categoryName
      }
    });
  }

  return (
    <>
      <Row>
        <Col className="mx-auto my-5">
          <Card className="bg-dark" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
            <Card.Body  style={{ backgroundColor: "black", color: "white", border: "1px solid black" }}>
              
              <h2>Table of Category List</h2>
              <table  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table mt-2 border ">
                <thead  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table-head">
                  <tr  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}}  >
                    <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >Index</th>
                    <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}}  >Category Name</th>
                    <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}} >Action</th>
                    {/* <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}} className="border">Delete</th> */}
                  </tr>
                </thead>
                <tbody  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table-body">
                  { data && data.getAllCategory.map((item , index) => (
                     <tr  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} key={item.id}>
                     <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >{index + 1}</td>
                     <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >{item.categoryName}</td>
                     <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >
                       <Button className="btn btn-sm btn-light mx-2" onClick={() => handleEdit(item.id)}>
                        <Pencil size={20} color="black"/>
                       </Button>

                       <Button className="btn btn-sm btn-light"> 
                        <Trash size={20} color="black" />
                       </Button>
                     </td>
                   </tr>
                   
                  ))}
                 
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Modal
        className="modal-right scroll-out-negative"
        show={modal}
        onHide={() => showModal(false)}
        scrollable
        dialogClassName="full"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5">Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5>Category Name</h5>
        <Form.Control type="text" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        <Button type='submit' className='my-2 btn btn-light' onClick={() => handleSubmit()}>Submit</Button>

          {/* <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
            <Form onSubmit={updateCategory}>
              {originalCategory && (
                <div className="mb-3">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" defaultValue={originalCategory} readOnly />
                </div>
              )}
              <div className="mb-3">
                <Form.Label>New Category</Form.Label>
                <Form.Control
                  type="text"
                  value={newcatName}
                  onChange={(e) => {
                    if (e.target.value.includes('_')) {
                      e.target.value = e.target.value.replace('_', '');
                    }
                    if (e.target.value.includes('/')) {
                      e.target.value = e.target.value.replace('/', '');
                    }
                    setNewCatName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <Form.Label>New Description</Form.Label>
                <Form.Control type="text" maxLength="130" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
              </div>
              <div className="mb-3">
                <Form.Label>New Image</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={(e) => setNewCatImage(e.target.files[0])} />
              </div>
              <Button variant="primary" type="submit" className="btn-icon btn-icon-start">
                <CsLineIcons icon="save" />
                <span>Update</span>
              </Button>
            </Form>
          </OverlayScrollbarsComponent> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ListCategory;
