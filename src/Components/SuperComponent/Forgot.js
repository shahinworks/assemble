import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react';
import { Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Forgot() {

    const navigate = useNavigate();
const [mail, setMail] = useState("");
    const REQUEST = gql`
    mutation RequestPasswordReset($email: String!) {
        requestPasswordReset(email: $email)
      }`;

      const [sendMail, {data}] = useMutation(REQUEST, {
        onCompleted: () => {
          navigate('/reset');
        }
      });
      const handleMail = async () => {
       await sendMail({
          variables: {
            email: mail
          }
        })
      }
    
  return (<>
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow" style={{border: "none"}}>
              <Card.Body className='mx-3'>
                <h3>Forgot Password ???</h3>
                <Form.Control type='email' onChange={(e) => setMail(e.target.value)} placeholder='Enter your Email' />
                <Button onClick={() =>  handleMail()} className='mt-4 mb-4'>Submit</Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> 
  </>);
}

export default Forgot;