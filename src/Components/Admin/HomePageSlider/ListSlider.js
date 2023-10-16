import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

function ListSlider() {

  const GET_SLIDER = gql`
    query GetAllHomePageSlider {
      getAllHomePageSlider {
        id
        images
        content
        url
      }
    }
  `;

  const {data} = useQuery(GET_SLIDER);

  const handleEdit = () => {
    console.log("handleEdit")
  }

  const handleDelete = ()  => {
    console.log("handleDelete")
  }
  
  return (<>
    <h2 className='text-center my-2'>List of Slider Images</h2>
   
    {data?.getAllHomePageSlider && data?.getAllHomePageSlider?.map((item, index) => index > 0 &&
       <div key={item.id} className='d-flex'>
        <Col className='col-2'>
        <img style={{height: "40px", width: "70px"}} src={item.images} aly="pic"/> 
        </Col> 
        <Col className='col-8'>
          <p>Content: {item.content}</p>
          <p>URL: {item.url}</p> 
          </Col>
          <Col className='col-2'>
          <Button className="btn btn-sm btn-light" onClick={() => handleEdit(item.id, item.productName, item.priveiwName,  item.sellingPrice, item.purchasePrice , item.size, item.color, item.discount, item.gender, item.description, item.stock )}>
            <Pencil size={20} color="black"/>
          </Button>{" "}
          <Button className="btn btn-sm btn-light" onClick={() => handleDelete(item.id)}>
            <Trash size={20} color="black" />
          </Button>
          </Col>
    </div> )}
   <ul>
    {/* {data?.getAllHomePageSlider && data?.getAllHomePageSlider?.map((item) => 
     <li><img style={{height: "40px", width: "70px"}} src={item.images} aly="pic"/>
     <p>{item.content}</p>
     <p>{item.url}</p>
     </li>
    )} */}
   </ul>
   
  </>)
}

export default ListSlider;