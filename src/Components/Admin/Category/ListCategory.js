import React, { useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import {Pencil, Trash} from 'react-bootstrap-icons';

function ListCategory() {

  const GET_ALL_CATEGORY = gql`
  query GetAllCategory {
    getAllCategory {
      id
      categoryName
    }
  }`;

  const { data, refetch } = useQuery(GET_ALL_CATEGORY);

  // console.log(data);

  useEffect(() => {
    refetch();

  }, []);




  return (
    <>
      <Row>
        <Col className="mx-auto my-5">
          <Card className="bg-dark" style={{ backgroundColor: "black", color: "white", border: "1px solid black"}}>
            <Card.Body  style={{ backgroundColor: "black", color: "white", border: "1px solid black" }}>
              
              <h2>Table of Category List</h2>
              <table  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table mt-2 border ">
                <thead  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table-head">
                  <tr  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}}  >
                    <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >Index</th>
                    <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}}  >Category Name</th>
                    <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}} >Action</th>
                    {/* <th  style={{ backgroundColor: "black", color: "white", border: "1px solid black", border: "1px solid black"}} className="border">Delete</th> */}
                  </tr>
                </thead>
                <tbody  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} className="table-body">
                  { data && data.getAllCategory.map((item , index) => (
                     <tr  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} key={item.id}>
                     <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >{index + 1}</td>
                     <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >{item.categoryName}</td>
                     <td  style={{ backgroundColor: "black", color: "white", border: "1px solid black"}} >
                       <Button className="btn btn-sm btn-light mx-2">
                        <Pencil size={20} color="black"/>
                       </Button>
                     {/* </td>
                     <td className="border"> */}
                       <Button className="btn btn-sm btn-light"> 
                        <Trash size={20} color="black" />
                       </Button>
                     </td>
                   </tr>
                   
                  ))}
                 
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ListCategory;
