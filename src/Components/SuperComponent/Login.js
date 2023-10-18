import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Form, Card, Row, Col, Container} from 'react-bootstrap';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("shahin@gmail.com");
  const [password, setPassword] = useState("123456");

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
    }, 
    onError : (error) => {
      if( error.message === "Error: Incorrect password") {
        toast.error("Incorrect password");
      } else if(error.message === "Error: User not found"){
        toast.error("Incorrect Email, User not found");
      } else {
        console.log("ERROR: ", error.message);
        toast.error("Some Error Occured");
      }
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


  // Forgot Password


  return (<>
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow" style={{border: "none"}}>
              <Card.Body className='mx-3'>
              <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Welcome</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                <Form>
                  <h6>Enter Email</h6>
        <Form.Control type='email' value={username} onChange={(e) => setUsername(e.target.value)} className='mb-3'/>
        <h6>Enter Password</h6>
        <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='mb-3'/>

        <p className="fs-6">
                          <a className="text-primary" href="/forgot">
                            Forgot password?
                          </a>
                        </p>
                        <Row>
      <Button onClick={() => handleLogin()} className='px-2'> Login</Button> </Row>
                </Form>
                </div>
                <div className="mt-3">
                      <p className="mb-0 text-center fs-6">
                        Don't have an account?   
                        <Link to="/register" className="mx-1 text-primary fw-bold">
                             Sign Up
                        </Link>
                      </p>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </>);
}

export default Login;