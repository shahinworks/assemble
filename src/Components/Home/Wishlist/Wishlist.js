import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Row, Col, Button } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function Wishlist() {  

  const GET_WISHLIST_ITEMS = gql`
    query Wishlist {
        wishlist {
          userId
          wishlistProducts {
            productId {
              id
              productName
              priveiwName
              sellingPrice
              images
              size
              color
              gender
              discount
              gst
              description
              stock
            }
          }
        }
      }
    `;

  const {data} = useQuery(GET_WISHLIST_ITEMS);
  if(data){
    console.log("data", data);
  }
  return (<>
    <div style={{marginTop: "10%"}}>Wishlist Item</div>

      {data && data?.wishlist?.wishlistProducts?.map((wish) => 
      <div key={wish?.productId?.id} className='mb-1 mx-1 px-0 mt-1'>
        <Row className='my-2'>
          <Col className='col-3'><img style={{height: "100px", width:"70px", border: "2px solid black"}} src={wish?.productId?.images } alt="s"/></Col>
          <Col className='col-9'> <p className='fs-6'>{wish?.productId?.productName}</p>
            <Row>
              <Col className='fw-bold'>₹ {wish?.productId?.sellingPrice}</Col>
            </Row>
          </Col>
          <Col>
          <Button className="btn btn-sm btn-light" 
        //  onClick={() => handleEdit(item.id, item.content, item.url )}
          >
            <Pencil size={20} color="black"/>
          </Button>{" "}
          <Button className="btn btn-sm btn-light" 
          // onClick={() => handleDelete(item.id)}
          >
            <Trash size={20} color="black" />
          </Button>
          </Col>
        </Row>
      </div>)}
  </>)
}

export default Wishlist;