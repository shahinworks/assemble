import { gql, useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import {useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("shahin@gmail.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();
  const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        token
      }
    }
  `;

  const [loginUser, {data}] = useMutation(LOGIN_USER, {
    onCompleted: async () => {
      toast.success("Logged IN");
      localStorage.setItem('token', data?.loginUser?.token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  });

  useEffect(() => {
    localStorage.setItem('token', data?.loginUser?.token);
  }, [data]);

  const handleLogin = async () => {
    await loginUser({
      variables: {
        email: username,
        password: password, 
      }
    })
  }
  return (<>
    <Card>
      <Card.Body>
        <Form>
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type='email' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button onClick={() => handleLogin()}> Login</Button>
      </Form>
      </Card.Body>
    </Card>
    
  </>)
}

export default Login