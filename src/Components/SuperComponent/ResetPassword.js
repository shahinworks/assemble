import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';

function ResetPassword() {
const [ passWord, setPassWord] = useState("");


    const RESET_PASSWORD = gql`
    mutation ResetPassword($token: String!, $newPassword: String!) {
        resetPassword(token: $token, newPassword: $newPassword)
      }
      `;


      const [ reset, {data}] = useMutation(RESET_PASSWORD, {
        onCompleted: () => {
            toast.success("Password Set Successfully")
        }, 
        onError: (error) => {
toast.error("Some Error Occured");
console.log(error.message);
        }
      });

      
   const handleMail = async () => {
    await reset({
        variables: { 
        token: "null",
        newPassword: passWord
      }
    })
    
   }

  return (<>
    <div>Reset Password</div>
    <input type='password' onChange={(e) => setPassWord(e.target.value)} />
    <Button onClick={() =>  handleMail()}>Send</Button>
</>)
}

export default ResetPassword;