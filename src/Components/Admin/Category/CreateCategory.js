import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

function CreateCategory() {

  const CREATE_CATEGROY = gql`
    mutation CreateCategory($categoryName: String) {
      createCategory(categoryName: $categoryName) {
        id
        categoryName
      }
    }
  `;

  const {data, loading, error} = useMutation(CREATE_CATEGROY,{
    onCompleted: () => {
      console.log("Category created successfully!");
      console.log("data", data);
    }
  });

  const initialState = {
    categoryName: ''
  }

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    console.log("formData", formData);
  }

 

  return (<>
    <h2>Create Category</h2>
    {/* <Card className='mt-4 mb-2 mx-2 border-0 bg-dark text-light'> */}
    <Card  style={{ backgroundColor: "black", color: "white"}}>
      <Card.Body>
        <form onSubmit={handleSubmit}>
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" name={initialState.categoryName} onChange={setFormData}/>
        <Button type='submit'>Submit</Button>
        </form>
      </Card.Body>
    </Card>
  </>)
}

export default CreateCategory;