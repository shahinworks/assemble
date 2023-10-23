import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import toast from "react-hot-toast";

function CreateCategory() {
  const [categoryName, setCategoryName] = useState('');

  const CREATE_CATEGROY = gql`
    mutation CreateCategory($categoryName: String) {
      createCategory(categoryName: $categoryName) {
        id
        categoryName
      }
    }
  `;

  const [createCategory, {data, loading, error}] = useMutation(CREATE_CATEGROY, {
    onCompleted : () => {
      toast.success("Category Added Successfully")
    },
    onError : (error) => {
      toast.error("Error Occured");
      console.error("ERROR: ", error.message)
    }
  });

  const handleSubmit = async () => {
    await createCategory({
      variables : {
        categoryName: categoryName
      }
    })
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (<>
    <h2 className='text-center my-2'>Create Category</h2>
    {/* <Card className='mt-4 mb-2 mx-2 border-0 bg-dark text-light'> */}
    <Row >
      <Col className="col-8 mx-auto my-5">
    <Card style={{ backgroundColor: "black", color: "white"}}>
      <Card.Body>
        <h5>Category Name</h5>
        <Form.Control type="text" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        <Button type='submit' className='my-2 btn btn-light' onClick={() => handleSubmit()}>Submit</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </>)
}

export default CreateCategory;