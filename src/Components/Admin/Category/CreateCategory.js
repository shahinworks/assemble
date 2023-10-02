import React from 'react';
import { Card, Form } from 'react-bootstrap';

function CreateCategory() {
  return (<>
    <h2>Create Category</h2>
    <Card className='mt-4 mb-2 mx-2 border-0 bg-dark text-light'>
      <Card.Body>
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text"/>
      </Card.Body>
    </Card>
  </>)
}

export default CreateCategory