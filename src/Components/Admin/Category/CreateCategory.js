import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

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

  const [createCategory, {data, loading, error}] = useMutation(CREATE_CATEGROY,{
    onCompleted: () => {
      console.log("Category created successfully!");
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
    <h2 className='text-center'>Create Category</h2>
    {/* <Card className='mt-4 mb-2 mx-2 border-0 bg-dark text-light'> */}
    <Card style={{ backgroundColor: "black", color: "white"}}>
      <Card.Body>
        <h5>Category Name</h5>
        <Form.Control type="text" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        <Button type='submit' className='my-2 btn btn-light' onClick={() => handleSubmit()}>Submit</Button>
      </Card.Body>
    </Card>
  </>)
}

export default CreateCategory;