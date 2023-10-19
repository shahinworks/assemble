import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Forgot() {
const [mail, setMail] = useState("");
    const REQUEST = gql`
    mutation RequestPasswordReset($email: String!) {
        requestPasswordReset(email: $email)
      }`;

      const [sendMail, {data}] = useMutation(REQUEST);
      const handleMail = async () => {
       await sendMail({
          variables: {
            email: mail
          }
        })
      }
    
  return (<>
    <div>Forgot</div>
    <input type='email' onChange={(e) => setMail(e.target.value)} />
    <Button onClick={() =>  handleMail()}>Send</Button>
    </>)
}

export default Forgot;