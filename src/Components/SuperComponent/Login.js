import { gql, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Form, useNavigate } from 'react-router-dom';

function Login() {

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
    console.log("Button Clicked");
    await loginUser({
      variables: {
        email: "shahin@gmail.com",
        password: "123456"
      }
    })
  }
  return (<>
    <div>Login</div>
    <Button onClick={() => handleLogin()}> Login</Button>
  </>)
}

export default Login