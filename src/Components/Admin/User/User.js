import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Card, Col, Row, Button , Modal, Form} from "react-bootstrap";
import {Pencil, Trash} from 'react-bootstrap-icons';
import toast from 'react-hot-toast';


function User() {

  const GET_ALL_USER = gql`
    query GetAllUser {
      getAllUser {
        id
        firstName
        lastName
        email
        profilepic
        mobileNo
        role
      }
    }
  `;

  const {data, refetch} = useQuery(GET_ALL_USER);


  const DELETE_USER = gql`
    mutation DeleteUser($deleteUserId: ID!) {
      deleteUser(id: $deleteUserId) {
        id
        firstName
        email
      }
    }
  `;

  const [deleteUser, {data: deleteUserData}] = useMutation(DELETE_USER, {
    onCompleted : () => {
      // toast.success(deleteUserData?.deleteUser?.firstName);
      toast.success("User Deleted Successfully");
      refetch();
    },
    onError : (error) => {
      toast.error(error.message);
    }
  });

  const handleDeleteUser = async (id, name) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete ${name}'s Details?`);
    if(shouldDelete) {
      await deleteUser({
        variables: {
          deleteUserId: id
        }
      });
    }    
  }

  return (<>
    {/* <Row> */}
      <Col className="mx-auto my-5">
        <Card className="bg-dark" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
          <Card.Body style={{ backgroundColor: "black", color: "white", border: "1px solid black" }}>
            <h2>List of User</h2>
            <table style={{ backgroundColor: "black", color: "white", border: "1px solid black", overflowX: "scroll"}} className="table mt-2 border ">
              <thead style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table-head">
                <tr style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
                  <th style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> Index</th>
                  <th style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> User Name</th>
                  <th style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> Email </th>
                  <th style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> Mobile No</th> 
                  <th style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>Role</th>
                  <th style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>Actions</th> 
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table-body">
                {data?.getAllUser && data?.getAllUser?.map((user, index) => (
                <tr style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} key={user.id}>
                  <td style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> {index + 1}</td>
                  <td style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> {user.firstName} {user.lastName}</td>
                  <td style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> {user.email}</td>
                  <td style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> {user.mobileNo}</td>
                  <td style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}> {user.role.join(", ")}</td>
                  <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >
                       <Button className="btn btn-sm btn-light mx-2"  >
                        <Pencil size={20} color="black"/>
                       </Button>

                       <Button className="btn btn-sm btn-light" onClick={() => handleDeleteUser(user.id, user.firstName)}  > 
                        <Trash size={20} color="black" />
                       </Button>
                     </td>
                </tr>))}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </Col>
    {/* </Row> */}
  </>);
}

export default User;